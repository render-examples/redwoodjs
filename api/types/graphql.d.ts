import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CreateVoteInput: CreateVoteInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateVoteInput: UpdateVoteInput;
  Vote: ResolverTypeWrapper<Vote>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CreateVoteInput: CreateVoteInput;
  String: Scalars['String'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Int: Scalars['Int'];
  Query: {};
  Redwood: Redwood;
  Time: Scalars['Time'];
  UpdateVoteInput: UpdateVoteInput;
  Vote: Vote;
  Boolean: Scalars['Boolean'];
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createVote?: Resolver<ResolversTypes['Vote'], ParentType, ContextType, RequireFields<MutationCreateVoteArgs, 'input'>>;
  updateVote?: Resolver<ResolversTypes['Vote'], ParentType, ContextType, RequireFields<MutationUpdateVoteArgs, 'id' | 'input'>>;
  deleteVote?: Resolver<ResolversTypes['Vote'], ParentType, ContextType, RequireFields<MutationDeleteVoteArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  totalVotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  vote?: Resolver<Maybe<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<QueryVoteArgs, never>>;
  voteCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<QueryVoteCountArgs, never>>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type VoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vote'] = ResolversParentTypes['Vote']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  choice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Vote?: VoteResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
