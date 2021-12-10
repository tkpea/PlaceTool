import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  Date: any;
};

export type DirectionInput = {
  destination: LatLngInput;
  origin: LatLngInput;
};

export type DirectionResponse = {
  __typename?: 'DirectionResponse';
  routes?: Maybe<Array<Maybe<Route>>>;
};

export type LatLng = {
  __typename?: 'LatLng';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type LatLngInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type Leg = {
  __typename?: 'Leg';
  distance?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  endAddress?: Maybe<Scalars['String']>;
  startAddress?: Maybe<Scalars['String']>;
  steps?: Maybe<Array<Maybe<Step>>>;
};

export type Place = {
  __typename?: 'Place';
  address?: Maybe<Scalars['String']>;
  latlng?: Maybe<LatLng>;
  name?: Maybe<Scalars['String']>;
  placeId?: Maybe<Scalars['String']>;
};

export type PlaceResponse = {
  __typename?: 'PlaceResponse';
  nextPageToken: Scalars['String'];
  places?: Maybe<Array<Maybe<Place>>>;
};

export type PlacesByLatLngInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  pageToken?: InputMaybe<Scalars['String']>;
  radius?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  direction?: Maybe<DirectionResponse>;
  latLngByAddress: LatLng;
  placesByLatLng: PlaceResponse;
};


export type QueryDirectionArgs = {
  input?: InputMaybe<DirectionInput>;
};


export type QueryLatLngByAddressArgs = {
  address: Scalars['String'];
};


export type QueryPlacesByLatLngArgs = {
  input: PlacesByLatLngInput;
};

export type Route = {
  __typename?: 'Route';
  legs?: Maybe<Array<Maybe<Leg>>>;
  summary?: Maybe<Scalars['String']>;
};

export type Step = {
  __typename?: 'Step';
  distance?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  endLocation?: Maybe<LatLng>;
  startLocation?: Maybe<LatLng>;
  travelMode?: Maybe<Scalars['String']>;
};

export type TextValue = {
  __typename?: 'TextValue';
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DirectionInput: DirectionInput;
  DirectionResponse: ResolverTypeWrapper<DirectionResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LatLng: ResolverTypeWrapper<LatLng>;
  LatLngInput: LatLngInput;
  Leg: ResolverTypeWrapper<Leg>;
  Place: ResolverTypeWrapper<Place>;
  PlaceResponse: ResolverTypeWrapper<PlaceResponse>;
  PlacesByLatLngInput: PlacesByLatLngInput;
  Query: ResolverTypeWrapper<{}>;
  Route: ResolverTypeWrapper<Route>;
  Step: ResolverTypeWrapper<Step>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TextValue: ResolverTypeWrapper<TextValue>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  DirectionInput: DirectionInput;
  DirectionResponse: DirectionResponse;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  LatLng: LatLng;
  LatLngInput: LatLngInput;
  Leg: Leg;
  Place: Place;
  PlaceResponse: PlaceResponse;
  PlacesByLatLngInput: PlacesByLatLngInput;
  Query: {};
  Route: Route;
  Step: Step;
  String: Scalars['String'];
  TextValue: TextValue;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DirectionResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DirectionResponse'] = ResolversParentTypes['DirectionResponse']> = ResolversObject<{
  routes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Route']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LatLngResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LatLng'] = ResolversParentTypes['LatLng']> = ResolversObject<{
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LegResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Leg'] = ResolversParentTypes['Leg']> = ResolversObject<{
  distance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  endAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  steps?: Resolver<Maybe<Array<Maybe<ResolversTypes['Step']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Place'] = ResolversParentTypes['Place']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latlng?: Resolver<Maybe<ResolversTypes['LatLng']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaceResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PlaceResponse'] = ResolversParentTypes['PlaceResponse']> = ResolversObject<{
  nextPageToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  places?: Resolver<Maybe<Array<Maybe<ResolversTypes['Place']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  direction?: Resolver<Maybe<ResolversTypes['DirectionResponse']>, ParentType, ContextType, RequireFields<QueryDirectionArgs, never>>;
  latLngByAddress?: Resolver<ResolversTypes['LatLng'], ParentType, ContextType, RequireFields<QueryLatLngByAddressArgs, 'address'>>;
  placesByLatLng?: Resolver<ResolversTypes['PlaceResponse'], ParentType, ContextType, RequireFields<QueryPlacesByLatLngArgs, 'input'>>;
}>;

export type RouteResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Route'] = ResolversParentTypes['Route']> = ResolversObject<{
  legs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Leg']>>>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StepResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Step'] = ResolversParentTypes['Step']> = ResolversObject<{
  distance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  endLocation?: Resolver<Maybe<ResolversTypes['LatLng']>, ParentType, ContextType>;
  startLocation?: Resolver<Maybe<ResolversTypes['LatLng']>, ParentType, ContextType>;
  travelMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TextValueResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TextValue'] = ResolversParentTypes['TextValue']> = ResolversObject<{
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Date?: GraphQLScalarType;
  DirectionResponse?: DirectionResponseResolvers<ContextType>;
  LatLng?: LatLngResolvers<ContextType>;
  Leg?: LegResolvers<ContextType>;
  Place?: PlaceResolvers<ContextType>;
  PlaceResponse?: PlaceResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Route?: RouteResolvers<ContextType>;
  Step?: StepResolvers<ContextType>;
  TextValue?: TextValueResolvers<ContextType>;
}>;

