/**
 * Raw shape of the response from:
 * GET https://api.github.com/users/{username}
 *
 * Only the fields used by the app are declared. Nullable fields are typed
 * as `string | null` because the GitHub API returns `null` when a user has
 * not filled that information in.
 */
export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
