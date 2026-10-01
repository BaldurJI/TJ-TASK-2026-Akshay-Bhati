import type { GitHubUser } from '../types/github';

const GITHUB_API_BASE_URL = 'https://api.github.com';

/**
 * Error type that carries the HTTP status code so the UI can react to
 * specific cases (404, rate limiting, network failure, ...).
 * A status of 0 means "the request never reached GitHub".
 */
export class GitHubApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'GitHubApiError';
    this.status = status;
  }
}

/**
 * Fetches a single GitHub user by username.
 *
 * Endpoint: GET https://api.github.com/users/{username}
 *
 * Throws a `GitHubApiError` with a user-friendly message for every failure
 * case so screens never have to inspect raw responses.
 */
export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const endpoint = `${GITHUB_API_BASE_URL}/users/${encodeURIComponent(username)}`;

  let response: Response;

  try {
    response = await fetch(endpoint, {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  } catch {
    // fetch() only rejects on network-level problems (offline, DNS, timeout).
    throw new GitHubApiError(
      'Could not reach GitHub. Please check your internet connection and try again.',
      0,
    );
  }

  if (response.status === 404) {
    throw new GitHubApiError(
      `No GitHub user found with the username "${username}". Please check the spelling and try again.`,
      404,
    );
  }

  if (response.status === 403 || response.status === 429) {
    throw new GitHubApiError(
      'GitHub API rate limit reached. Please wait a few minutes and try again.',
      response.status,
    );
  }

  if (!response.ok) {
    throw new GitHubApiError(
      `GitHub returned an unexpected error (HTTP ${response.status}). Please try again.`,
      response.status,
    );
  }

  try {
    return (await response.json()) as GitHubUser;
  } catch {
    throw new GitHubApiError('Received an invalid response from GitHub.', response.status);
  }
}
