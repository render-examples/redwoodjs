export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type CreateVoteInput = {
  choice: Scalars['String'];
  dateTime: Scalars['DateTime'];
};





export type Mutation = {
  __typename?: 'Mutation';
  createVote: Vote;
  updateVote: Vote;
  deleteVote: Vote;
};


export type MutationCreateVoteArgs = {
  input: CreateVoteInput;
};


export type MutationUpdateVoteArgs = {
  id: Scalars['Int'];
  input: UpdateVoteInput;
};


export type MutationDeleteVoteArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  redwood?: Maybe<Redwood>;
  totalVotes: Scalars['Int'];
  vote?: Maybe<Vote>;
  voteCount: Scalars['Int'];
  votes: Array<Vote>;
};


export type QueryVoteArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryVoteCountArgs = {
  choice?: Maybe<Scalars['String']>;
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};


export type UpdateVoteInput = {
  choice?: Maybe<Scalars['String']>;
  dateTime?: Maybe<Scalars['DateTime']>;
};

export type Vote = {
  __typename?: 'Vote';
  id: Scalars['Int'];
  choice: Scalars['String'];
  dateTime: Scalars['DateTime'];
};

export type VoteVariables = Exact<{
  type?: Maybe<Scalars['String']>;
}>;


export type Vote = (
  { __typename?: 'Query' }
  & { count: Query['voteCount'], allCount: Query['totalVotes'] }
);

export type CreateVoteMutationVariables = Exact<{
  input: CreateVoteInput;
}>;


export type CreateVoteMutation = (
  { __typename?: 'Mutation' }
  & { createVote: (
    { __typename?: 'Vote' }
    & Pick<Vote, 'id'>
  ) }
);
