import type { GitHubUser } from '../types/github';

/**
 * Route names and the params each one expects.
 * Used by React Navigation for type-safe navigation.
 */
export type RootStackParamList = {
  Search: undefined;
  Profile: { user: GitHubUser };
};
