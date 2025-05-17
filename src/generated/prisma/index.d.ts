
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Megazine
 * 
 */
export type Megazine = $Result.DefaultSelection<Prisma.$MegazinePayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Funding
 * 
 */
export type Funding = $Result.DefaultSelection<Prisma.$FundingPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model JoinedUser
 * 
 */
export type JoinedUser = $Result.DefaultSelection<Prisma.$JoinedUserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Region: {
  SEOUL: 'SEOUL',
  INCHEON_GYEONGGI: 'INCHEON_GYEONGGI',
  GYEONGSANG: 'GYEONGSANG',
  CHUNGCHEONG: 'CHUNGCHEONG',
  GANGWON: 'GANGWON',
  JEOLLA: 'JEOLLA',
  JEJU: 'JEJU'
};

export type Region = (typeof Region)[keyof typeof Region]

}

export type Region = $Enums.Region

export const Region: typeof $Enums.Region

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.megazine`: Exposes CRUD operations for the **Megazine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Megazines
    * const megazines = await prisma.megazine.findMany()
    * ```
    */
  get megazine(): Prisma.MegazineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funding`: Exposes CRUD operations for the **Funding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fundings
    * const fundings = await prisma.funding.findMany()
    * ```
    */
  get funding(): Prisma.FundingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.joinedUser`: Exposes CRUD operations for the **JoinedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JoinedUsers
    * const joinedUsers = await prisma.joinedUser.findMany()
    * ```
    */
  get joinedUser(): Prisma.JoinedUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Megazine: 'Megazine',
    Session: 'Session',
    Funding: 'Funding',
    Photo: 'Photo',
    JoinedUser: 'JoinedUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "megazine" | "session" | "funding" | "photo" | "joinedUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Megazine: {
        payload: Prisma.$MegazinePayload<ExtArgs>
        fields: Prisma.MegazineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MegazineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MegazinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MegazineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MegazinePayload>
          }
          findFirst: {
            args: Prisma.MegazineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MegazinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MegazineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MegazinePayload>
          }
          findMany: {
            args: Prisma.MegazineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MegazinePayload>[]
          }
          create: {
            args: Prisma.MegazineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MegazinePayload>
          }
          createMany: {
            args: Prisma.MegazineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MegazineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MegazinePayload>
          }
          update: {
            args: Prisma.MegazineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MegazinePayload>
          }
          deleteMany: {
            args: Prisma.MegazineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MegazineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MegazineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MegazinePayload>
          }
          aggregate: {
            args: Prisma.MegazineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMegazine>
          }
          groupBy: {
            args: Prisma.MegazineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MegazineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MegazineCountArgs<ExtArgs>
            result: $Utils.Optional<MegazineCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Funding: {
        payload: Prisma.$FundingPayload<ExtArgs>
        fields: Prisma.FundingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingPayload>
          }
          findFirst: {
            args: Prisma.FundingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingPayload>
          }
          findMany: {
            args: Prisma.FundingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingPayload>[]
          }
          create: {
            args: Prisma.FundingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingPayload>
          }
          createMany: {
            args: Prisma.FundingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FundingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingPayload>
          }
          update: {
            args: Prisma.FundingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingPayload>
          }
          deleteMany: {
            args: Prisma.FundingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FundingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingPayload>
          }
          aggregate: {
            args: Prisma.FundingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFunding>
          }
          groupBy: {
            args: Prisma.FundingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundingCountArgs<ExtArgs>
            result: $Utils.Optional<FundingCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      JoinedUser: {
        payload: Prisma.$JoinedUserPayload<ExtArgs>
        fields: Prisma.JoinedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoinedUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoinedUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinedUserPayload>
          }
          findFirst: {
            args: Prisma.JoinedUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoinedUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinedUserPayload>
          }
          findMany: {
            args: Prisma.JoinedUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinedUserPayload>[]
          }
          create: {
            args: Prisma.JoinedUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinedUserPayload>
          }
          createMany: {
            args: Prisma.JoinedUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JoinedUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinedUserPayload>
          }
          update: {
            args: Prisma.JoinedUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinedUserPayload>
          }
          deleteMany: {
            args: Prisma.JoinedUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JoinedUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JoinedUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinedUserPayload>
          }
          aggregate: {
            args: Prisma.JoinedUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJoinedUser>
          }
          groupBy: {
            args: Prisma.JoinedUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<JoinedUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.JoinedUserCountArgs<ExtArgs>
            result: $Utils.Optional<JoinedUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    megazine?: MegazineOmit
    session?: SessionOmit
    funding?: FundingOmit
    photo?: PhotoOmit
    joinedUser?: JoinedUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    magazines: number
    joinedUsers: number
    fundings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    magazines?: boolean | UserCountOutputTypeCountMagazinesArgs
    joinedUsers?: boolean | UserCountOutputTypeCountJoinedUsersArgs
    fundings?: boolean | UserCountOutputTypeCountFundingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMagazinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MegazineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinedUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFundingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundingWhereInput
  }


  /**
   * Count Type FundingCountOutputType
   */

  export type FundingCountOutputType = {
    photos: number
    joinedUsers: number
  }

  export type FundingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | FundingCountOutputTypeCountPhotosArgs
    joinedUsers?: boolean | FundingCountOutputTypeCountJoinedUsersArgs
  }

  // Custom InputTypes
  /**
   * FundingCountOutputType without action
   */
  export type FundingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingCountOutputType
     */
    select?: FundingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FundingCountOutputType without action
   */
  export type FundingCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * FundingCountOutputType without action
   */
  export type FundingCountOutputTypeCountJoinedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinedUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    email: string | null
    password: string | null
    status: string | null
    inactiveDate: Date | null
    CreatedAt: Date | null
    region: $Enums.Region | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    email: string | null
    password: string | null
    status: string | null
    inactiveDate: Date | null
    CreatedAt: Date | null
    region: $Enums.Region | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    email: number
    password: number
    status: number
    inactiveDate: number
    CreatedAt: number
    region: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    password?: true
    status?: true
    inactiveDate?: true
    CreatedAt?: true
    region?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    password?: true
    status?: true
    inactiveDate?: true
    CreatedAt?: true
    region?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    password?: true
    status?: true
    inactiveDate?: true
    CreatedAt?: true
    region?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userId: string
    name: string
    email: string
    password: string
    status: string
    inactiveDate: Date | null
    CreatedAt: Date
    region: $Enums.Region
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    inactiveDate?: boolean
    CreatedAt?: boolean
    region?: boolean
    magazines?: boolean | User$magazinesArgs<ExtArgs>
    joinedUsers?: boolean | User$joinedUsersArgs<ExtArgs>
    fundings?: boolean | User$fundingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    inactiveDate?: boolean
    CreatedAt?: boolean
    region?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "email" | "password" | "status" | "inactiveDate" | "CreatedAt" | "region", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    magazines?: boolean | User$magazinesArgs<ExtArgs>
    joinedUsers?: boolean | User$joinedUsersArgs<ExtArgs>
    fundings?: boolean | User$fundingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      magazines: Prisma.$MegazinePayload<ExtArgs>[]
      joinedUsers: Prisma.$JoinedUserPayload<ExtArgs>[]
      fundings: Prisma.$FundingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      name: string
      email: string
      password: string
      status: string
      inactiveDate: Date | null
      CreatedAt: Date
      region: $Enums.Region
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    magazines<T extends User$magazinesArgs<ExtArgs> = {}>(args?: Subset<T, User$magazinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MegazinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinedUsers<T extends User$joinedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$joinedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fundings<T extends User$fundingsArgs<ExtArgs> = {}>(args?: Subset<T, User$fundingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly inactiveDate: FieldRef<"User", 'DateTime'>
    readonly CreatedAt: FieldRef<"User", 'DateTime'>
    readonly region: FieldRef<"User", 'Region'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.magazines
   */
  export type User$magazinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
    where?: MegazineWhereInput
    orderBy?: MegazineOrderByWithRelationInput | MegazineOrderByWithRelationInput[]
    cursor?: MegazineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MegazineScalarFieldEnum | MegazineScalarFieldEnum[]
  }

  /**
   * User.joinedUsers
   */
  export type User$joinedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    where?: JoinedUserWhereInput
    orderBy?: JoinedUserOrderByWithRelationInput | JoinedUserOrderByWithRelationInput[]
    cursor?: JoinedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinedUserScalarFieldEnum | JoinedUserScalarFieldEnum[]
  }

  /**
   * User.fundings
   */
  export type User$fundingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
    where?: FundingWhereInput
    orderBy?: FundingOrderByWithRelationInput | FundingOrderByWithRelationInput[]
    cursor?: FundingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FundingScalarFieldEnum | FundingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Megazine
   */

  export type AggregateMegazine = {
    _count: MegazineCountAggregateOutputType | null
    _avg: MegazineAvgAggregateOutputType | null
    _sum: MegazineSumAggregateOutputType | null
    _min: MegazineMinAggregateOutputType | null
    _max: MegazineMaxAggregateOutputType | null
  }

  export type MegazineAvgAggregateOutputType = {
    id: number | null
    UserId: number | null
  }

  export type MegazineSumAggregateOutputType = {
    id: number | null
    UserId: number | null
  }

  export type MegazineMinAggregateOutputType = {
    id: number | null
    UserId: number | null
    title: string | null
    body: string | null
    CreatedAt: Date | null
  }

  export type MegazineMaxAggregateOutputType = {
    id: number | null
    UserId: number | null
    title: string | null
    body: string | null
    CreatedAt: Date | null
  }

  export type MegazineCountAggregateOutputType = {
    id: number
    UserId: number
    title: number
    body: number
    CreatedAt: number
    _all: number
  }


  export type MegazineAvgAggregateInputType = {
    id?: true
    UserId?: true
  }

  export type MegazineSumAggregateInputType = {
    id?: true
    UserId?: true
  }

  export type MegazineMinAggregateInputType = {
    id?: true
    UserId?: true
    title?: true
    body?: true
    CreatedAt?: true
  }

  export type MegazineMaxAggregateInputType = {
    id?: true
    UserId?: true
    title?: true
    body?: true
    CreatedAt?: true
  }

  export type MegazineCountAggregateInputType = {
    id?: true
    UserId?: true
    title?: true
    body?: true
    CreatedAt?: true
    _all?: true
  }

  export type MegazineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Megazine to aggregate.
     */
    where?: MegazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Megazines to fetch.
     */
    orderBy?: MegazineOrderByWithRelationInput | MegazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MegazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Megazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Megazines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Megazines
    **/
    _count?: true | MegazineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MegazineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MegazineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MegazineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MegazineMaxAggregateInputType
  }

  export type GetMegazineAggregateType<T extends MegazineAggregateArgs> = {
        [P in keyof T & keyof AggregateMegazine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMegazine[P]>
      : GetScalarType<T[P], AggregateMegazine[P]>
  }




  export type MegazineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MegazineWhereInput
    orderBy?: MegazineOrderByWithAggregationInput | MegazineOrderByWithAggregationInput[]
    by: MegazineScalarFieldEnum[] | MegazineScalarFieldEnum
    having?: MegazineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MegazineCountAggregateInputType | true
    _avg?: MegazineAvgAggregateInputType
    _sum?: MegazineSumAggregateInputType
    _min?: MegazineMinAggregateInputType
    _max?: MegazineMaxAggregateInputType
  }

  export type MegazineGroupByOutputType = {
    id: number
    UserId: number
    title: string
    body: string
    CreatedAt: Date
    _count: MegazineCountAggregateOutputType | null
    _avg: MegazineAvgAggregateOutputType | null
    _sum: MegazineSumAggregateOutputType | null
    _min: MegazineMinAggregateOutputType | null
    _max: MegazineMaxAggregateOutputType | null
  }

  type GetMegazineGroupByPayload<T extends MegazineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MegazineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MegazineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MegazineGroupByOutputType[P]>
            : GetScalarType<T[P], MegazineGroupByOutputType[P]>
        }
      >
    >


  export type MegazineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    UserId?: boolean
    title?: boolean
    body?: boolean
    CreatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["megazine"]>



  export type MegazineSelectScalar = {
    id?: boolean
    UserId?: boolean
    title?: boolean
    body?: boolean
    CreatedAt?: boolean
  }

  export type MegazineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "UserId" | "title" | "body" | "CreatedAt", ExtArgs["result"]["megazine"]>
  export type MegazineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MegazinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Megazine"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      UserId: number
      title: string
      body: string
      CreatedAt: Date
    }, ExtArgs["result"]["megazine"]>
    composites: {}
  }

  type MegazineGetPayload<S extends boolean | null | undefined | MegazineDefaultArgs> = $Result.GetResult<Prisma.$MegazinePayload, S>

  type MegazineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MegazineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MegazineCountAggregateInputType | true
    }

  export interface MegazineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Megazine'], meta: { name: 'Megazine' } }
    /**
     * Find zero or one Megazine that matches the filter.
     * @param {MegazineFindUniqueArgs} args - Arguments to find a Megazine
     * @example
     * // Get one Megazine
     * const megazine = await prisma.megazine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MegazineFindUniqueArgs>(args: SelectSubset<T, MegazineFindUniqueArgs<ExtArgs>>): Prisma__MegazineClient<$Result.GetResult<Prisma.$MegazinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Megazine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MegazineFindUniqueOrThrowArgs} args - Arguments to find a Megazine
     * @example
     * // Get one Megazine
     * const megazine = await prisma.megazine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MegazineFindUniqueOrThrowArgs>(args: SelectSubset<T, MegazineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MegazineClient<$Result.GetResult<Prisma.$MegazinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Megazine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MegazineFindFirstArgs} args - Arguments to find a Megazine
     * @example
     * // Get one Megazine
     * const megazine = await prisma.megazine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MegazineFindFirstArgs>(args?: SelectSubset<T, MegazineFindFirstArgs<ExtArgs>>): Prisma__MegazineClient<$Result.GetResult<Prisma.$MegazinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Megazine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MegazineFindFirstOrThrowArgs} args - Arguments to find a Megazine
     * @example
     * // Get one Megazine
     * const megazine = await prisma.megazine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MegazineFindFirstOrThrowArgs>(args?: SelectSubset<T, MegazineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MegazineClient<$Result.GetResult<Prisma.$MegazinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Megazines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MegazineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Megazines
     * const megazines = await prisma.megazine.findMany()
     * 
     * // Get first 10 Megazines
     * const megazines = await prisma.megazine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const megazineWithIdOnly = await prisma.megazine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MegazineFindManyArgs>(args?: SelectSubset<T, MegazineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MegazinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Megazine.
     * @param {MegazineCreateArgs} args - Arguments to create a Megazine.
     * @example
     * // Create one Megazine
     * const Megazine = await prisma.megazine.create({
     *   data: {
     *     // ... data to create a Megazine
     *   }
     * })
     * 
     */
    create<T extends MegazineCreateArgs>(args: SelectSubset<T, MegazineCreateArgs<ExtArgs>>): Prisma__MegazineClient<$Result.GetResult<Prisma.$MegazinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Megazines.
     * @param {MegazineCreateManyArgs} args - Arguments to create many Megazines.
     * @example
     * // Create many Megazines
     * const megazine = await prisma.megazine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MegazineCreateManyArgs>(args?: SelectSubset<T, MegazineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Megazine.
     * @param {MegazineDeleteArgs} args - Arguments to delete one Megazine.
     * @example
     * // Delete one Megazine
     * const Megazine = await prisma.megazine.delete({
     *   where: {
     *     // ... filter to delete one Megazine
     *   }
     * })
     * 
     */
    delete<T extends MegazineDeleteArgs>(args: SelectSubset<T, MegazineDeleteArgs<ExtArgs>>): Prisma__MegazineClient<$Result.GetResult<Prisma.$MegazinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Megazine.
     * @param {MegazineUpdateArgs} args - Arguments to update one Megazine.
     * @example
     * // Update one Megazine
     * const megazine = await prisma.megazine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MegazineUpdateArgs>(args: SelectSubset<T, MegazineUpdateArgs<ExtArgs>>): Prisma__MegazineClient<$Result.GetResult<Prisma.$MegazinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Megazines.
     * @param {MegazineDeleteManyArgs} args - Arguments to filter Megazines to delete.
     * @example
     * // Delete a few Megazines
     * const { count } = await prisma.megazine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MegazineDeleteManyArgs>(args?: SelectSubset<T, MegazineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Megazines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MegazineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Megazines
     * const megazine = await prisma.megazine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MegazineUpdateManyArgs>(args: SelectSubset<T, MegazineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Megazine.
     * @param {MegazineUpsertArgs} args - Arguments to update or create a Megazine.
     * @example
     * // Update or create a Megazine
     * const megazine = await prisma.megazine.upsert({
     *   create: {
     *     // ... data to create a Megazine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Megazine we want to update
     *   }
     * })
     */
    upsert<T extends MegazineUpsertArgs>(args: SelectSubset<T, MegazineUpsertArgs<ExtArgs>>): Prisma__MegazineClient<$Result.GetResult<Prisma.$MegazinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Megazines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MegazineCountArgs} args - Arguments to filter Megazines to count.
     * @example
     * // Count the number of Megazines
     * const count = await prisma.megazine.count({
     *   where: {
     *     // ... the filter for the Megazines we want to count
     *   }
     * })
    **/
    count<T extends MegazineCountArgs>(
      args?: Subset<T, MegazineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MegazineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Megazine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MegazineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MegazineAggregateArgs>(args: Subset<T, MegazineAggregateArgs>): Prisma.PrismaPromise<GetMegazineAggregateType<T>>

    /**
     * Group by Megazine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MegazineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MegazineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MegazineGroupByArgs['orderBy'] }
        : { orderBy?: MegazineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MegazineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMegazineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Megazine model
   */
  readonly fields: MegazineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Megazine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MegazineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Megazine model
   */
  interface MegazineFieldRefs {
    readonly id: FieldRef<"Megazine", 'Int'>
    readonly UserId: FieldRef<"Megazine", 'Int'>
    readonly title: FieldRef<"Megazine", 'String'>
    readonly body: FieldRef<"Megazine", 'String'>
    readonly CreatedAt: FieldRef<"Megazine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Megazine findUnique
   */
  export type MegazineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
    /**
     * Filter, which Megazine to fetch.
     */
    where: MegazineWhereUniqueInput
  }

  /**
   * Megazine findUniqueOrThrow
   */
  export type MegazineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
    /**
     * Filter, which Megazine to fetch.
     */
    where: MegazineWhereUniqueInput
  }

  /**
   * Megazine findFirst
   */
  export type MegazineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
    /**
     * Filter, which Megazine to fetch.
     */
    where?: MegazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Megazines to fetch.
     */
    orderBy?: MegazineOrderByWithRelationInput | MegazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Megazines.
     */
    cursor?: MegazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Megazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Megazines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Megazines.
     */
    distinct?: MegazineScalarFieldEnum | MegazineScalarFieldEnum[]
  }

  /**
   * Megazine findFirstOrThrow
   */
  export type MegazineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
    /**
     * Filter, which Megazine to fetch.
     */
    where?: MegazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Megazines to fetch.
     */
    orderBy?: MegazineOrderByWithRelationInput | MegazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Megazines.
     */
    cursor?: MegazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Megazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Megazines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Megazines.
     */
    distinct?: MegazineScalarFieldEnum | MegazineScalarFieldEnum[]
  }

  /**
   * Megazine findMany
   */
  export type MegazineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
    /**
     * Filter, which Megazines to fetch.
     */
    where?: MegazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Megazines to fetch.
     */
    orderBy?: MegazineOrderByWithRelationInput | MegazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Megazines.
     */
    cursor?: MegazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Megazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Megazines.
     */
    skip?: number
    distinct?: MegazineScalarFieldEnum | MegazineScalarFieldEnum[]
  }

  /**
   * Megazine create
   */
  export type MegazineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
    /**
     * The data needed to create a Megazine.
     */
    data: XOR<MegazineCreateInput, MegazineUncheckedCreateInput>
  }

  /**
   * Megazine createMany
   */
  export type MegazineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Megazines.
     */
    data: MegazineCreateManyInput | MegazineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Megazine update
   */
  export type MegazineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
    /**
     * The data needed to update a Megazine.
     */
    data: XOR<MegazineUpdateInput, MegazineUncheckedUpdateInput>
    /**
     * Choose, which Megazine to update.
     */
    where: MegazineWhereUniqueInput
  }

  /**
   * Megazine updateMany
   */
  export type MegazineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Megazines.
     */
    data: XOR<MegazineUpdateManyMutationInput, MegazineUncheckedUpdateManyInput>
    /**
     * Filter which Megazines to update
     */
    where?: MegazineWhereInput
    /**
     * Limit how many Megazines to update.
     */
    limit?: number
  }

  /**
   * Megazine upsert
   */
  export type MegazineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
    /**
     * The filter to search for the Megazine to update in case it exists.
     */
    where: MegazineWhereUniqueInput
    /**
     * In case the Megazine found by the `where` argument doesn't exist, create a new Megazine with this data.
     */
    create: XOR<MegazineCreateInput, MegazineUncheckedCreateInput>
    /**
     * In case the Megazine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MegazineUpdateInput, MegazineUncheckedUpdateInput>
  }

  /**
   * Megazine delete
   */
  export type MegazineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
    /**
     * Filter which Megazine to delete.
     */
    where: MegazineWhereUniqueInput
  }

  /**
   * Megazine deleteMany
   */
  export type MegazineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Megazines to delete
     */
    where?: MegazineWhereInput
    /**
     * Limit how many Megazines to delete.
     */
    limit?: number
  }

  /**
   * Megazine without action
   */
  export type MegazineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Megazine
     */
    select?: MegazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Megazine
     */
    omit?: MegazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MegazineInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model Funding
   */

  export type AggregateFunding = {
    _count: FundingCountAggregateOutputType | null
    _avg: FundingAvgAggregateOutputType | null
    _sum: FundingSumAggregateOutputType | null
    _min: FundingMinAggregateOutputType | null
    _max: FundingMaxAggregateOutputType | null
  }

  export type FundingAvgAggregateOutputType = {
    id: number | null
    goalMoney: number | null
    fundedMoney: number | null
    userId: number | null
  }

  export type FundingSumAggregateOutputType = {
    id: number | null
    goalMoney: number | null
    fundedMoney: number | null
    userId: number | null
  }

  export type FundingMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    goalMoney: number | null
    fundedMoney: number | null
    deadlineDate: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    userId: number | null
    region: $Enums.Region | null
  }

  export type FundingMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    goalMoney: number | null
    fundedMoney: number | null
    deadlineDate: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    userId: number | null
    region: $Enums.Region | null
  }

  export type FundingCountAggregateOutputType = {
    id: number
    title: number
    description: number
    goalMoney: number
    fundedMoney: number
    deadlineDate: number
    CreatedAt: number
    UpdatedAt: number
    userId: number
    region: number
    _all: number
  }


  export type FundingAvgAggregateInputType = {
    id?: true
    goalMoney?: true
    fundedMoney?: true
    userId?: true
  }

  export type FundingSumAggregateInputType = {
    id?: true
    goalMoney?: true
    fundedMoney?: true
    userId?: true
  }

  export type FundingMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    goalMoney?: true
    fundedMoney?: true
    deadlineDate?: true
    CreatedAt?: true
    UpdatedAt?: true
    userId?: true
    region?: true
  }

  export type FundingMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    goalMoney?: true
    fundedMoney?: true
    deadlineDate?: true
    CreatedAt?: true
    UpdatedAt?: true
    userId?: true
    region?: true
  }

  export type FundingCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    goalMoney?: true
    fundedMoney?: true
    deadlineDate?: true
    CreatedAt?: true
    UpdatedAt?: true
    userId?: true
    region?: true
    _all?: true
  }

  export type FundingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funding to aggregate.
     */
    where?: FundingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fundings to fetch.
     */
    orderBy?: FundingOrderByWithRelationInput | FundingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fundings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fundings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fundings
    **/
    _count?: true | FundingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundingMaxAggregateInputType
  }

  export type GetFundingAggregateType<T extends FundingAggregateArgs> = {
        [P in keyof T & keyof AggregateFunding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFunding[P]>
      : GetScalarType<T[P], AggregateFunding[P]>
  }




  export type FundingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundingWhereInput
    orderBy?: FundingOrderByWithAggregationInput | FundingOrderByWithAggregationInput[]
    by: FundingScalarFieldEnum[] | FundingScalarFieldEnum
    having?: FundingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundingCountAggregateInputType | true
    _avg?: FundingAvgAggregateInputType
    _sum?: FundingSumAggregateInputType
    _min?: FundingMinAggregateInputType
    _max?: FundingMaxAggregateInputType
  }

  export type FundingGroupByOutputType = {
    id: number
    title: string
    description: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date
    CreatedAt: Date
    UpdatedAt: Date
    userId: number
    region: $Enums.Region
    _count: FundingCountAggregateOutputType | null
    _avg: FundingAvgAggregateOutputType | null
    _sum: FundingSumAggregateOutputType | null
    _min: FundingMinAggregateOutputType | null
    _max: FundingMaxAggregateOutputType | null
  }

  type GetFundingGroupByPayload<T extends FundingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundingGroupByOutputType[P]>
            : GetScalarType<T[P], FundingGroupByOutputType[P]>
        }
      >
    >


  export type FundingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    goalMoney?: boolean
    fundedMoney?: boolean
    deadlineDate?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    userId?: boolean
    region?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    photos?: boolean | Funding$photosArgs<ExtArgs>
    joinedUsers?: boolean | Funding$joinedUsersArgs<ExtArgs>
    _count?: boolean | FundingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funding"]>



  export type FundingSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    goalMoney?: boolean
    fundedMoney?: boolean
    deadlineDate?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    userId?: boolean
    region?: boolean
  }

  export type FundingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "goalMoney" | "fundedMoney" | "deadlineDate" | "CreatedAt" | "UpdatedAt" | "userId" | "region", ExtArgs["result"]["funding"]>
  export type FundingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    photos?: boolean | Funding$photosArgs<ExtArgs>
    joinedUsers?: boolean | Funding$joinedUsersArgs<ExtArgs>
    _count?: boolean | FundingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FundingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funding"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      joinedUsers: Prisma.$JoinedUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      goalMoney: number
      fundedMoney: number
      deadlineDate: Date
      CreatedAt: Date
      UpdatedAt: Date
      userId: number
      region: $Enums.Region
    }, ExtArgs["result"]["funding"]>
    composites: {}
  }

  type FundingGetPayload<S extends boolean | null | undefined | FundingDefaultArgs> = $Result.GetResult<Prisma.$FundingPayload, S>

  type FundingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundingCountAggregateInputType | true
    }

  export interface FundingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funding'], meta: { name: 'Funding' } }
    /**
     * Find zero or one Funding that matches the filter.
     * @param {FundingFindUniqueArgs} args - Arguments to find a Funding
     * @example
     * // Get one Funding
     * const funding = await prisma.funding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundingFindUniqueArgs>(args: SelectSubset<T, FundingFindUniqueArgs<ExtArgs>>): Prisma__FundingClient<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundingFindUniqueOrThrowArgs} args - Arguments to find a Funding
     * @example
     * // Get one Funding
     * const funding = await prisma.funding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundingFindUniqueOrThrowArgs>(args: SelectSubset<T, FundingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundingClient<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingFindFirstArgs} args - Arguments to find a Funding
     * @example
     * // Get one Funding
     * const funding = await prisma.funding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundingFindFirstArgs>(args?: SelectSubset<T, FundingFindFirstArgs<ExtArgs>>): Prisma__FundingClient<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingFindFirstOrThrowArgs} args - Arguments to find a Funding
     * @example
     * // Get one Funding
     * const funding = await prisma.funding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundingFindFirstOrThrowArgs>(args?: SelectSubset<T, FundingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundingClient<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fundings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fundings
     * const fundings = await prisma.funding.findMany()
     * 
     * // Get first 10 Fundings
     * const fundings = await prisma.funding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundingWithIdOnly = await prisma.funding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundingFindManyArgs>(args?: SelectSubset<T, FundingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funding.
     * @param {FundingCreateArgs} args - Arguments to create a Funding.
     * @example
     * // Create one Funding
     * const Funding = await prisma.funding.create({
     *   data: {
     *     // ... data to create a Funding
     *   }
     * })
     * 
     */
    create<T extends FundingCreateArgs>(args: SelectSubset<T, FundingCreateArgs<ExtArgs>>): Prisma__FundingClient<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fundings.
     * @param {FundingCreateManyArgs} args - Arguments to create many Fundings.
     * @example
     * // Create many Fundings
     * const funding = await prisma.funding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundingCreateManyArgs>(args?: SelectSubset<T, FundingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funding.
     * @param {FundingDeleteArgs} args - Arguments to delete one Funding.
     * @example
     * // Delete one Funding
     * const Funding = await prisma.funding.delete({
     *   where: {
     *     // ... filter to delete one Funding
     *   }
     * })
     * 
     */
    delete<T extends FundingDeleteArgs>(args: SelectSubset<T, FundingDeleteArgs<ExtArgs>>): Prisma__FundingClient<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funding.
     * @param {FundingUpdateArgs} args - Arguments to update one Funding.
     * @example
     * // Update one Funding
     * const funding = await prisma.funding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundingUpdateArgs>(args: SelectSubset<T, FundingUpdateArgs<ExtArgs>>): Prisma__FundingClient<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fundings.
     * @param {FundingDeleteManyArgs} args - Arguments to filter Fundings to delete.
     * @example
     * // Delete a few Fundings
     * const { count } = await prisma.funding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundingDeleteManyArgs>(args?: SelectSubset<T, FundingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fundings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fundings
     * const funding = await prisma.funding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundingUpdateManyArgs>(args: SelectSubset<T, FundingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funding.
     * @param {FundingUpsertArgs} args - Arguments to update or create a Funding.
     * @example
     * // Update or create a Funding
     * const funding = await prisma.funding.upsert({
     *   create: {
     *     // ... data to create a Funding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funding we want to update
     *   }
     * })
     */
    upsert<T extends FundingUpsertArgs>(args: SelectSubset<T, FundingUpsertArgs<ExtArgs>>): Prisma__FundingClient<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fundings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingCountArgs} args - Arguments to filter Fundings to count.
     * @example
     * // Count the number of Fundings
     * const count = await prisma.funding.count({
     *   where: {
     *     // ... the filter for the Fundings we want to count
     *   }
     * })
    **/
    count<T extends FundingCountArgs>(
      args?: Subset<T, FundingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FundingAggregateArgs>(args: Subset<T, FundingAggregateArgs>): Prisma.PrismaPromise<GetFundingAggregateType<T>>

    /**
     * Group by Funding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FundingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundingGroupByArgs['orderBy'] }
        : { orderBy?: FundingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FundingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funding model
   */
  readonly fields: FundingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photos<T extends Funding$photosArgs<ExtArgs> = {}>(args?: Subset<T, Funding$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinedUsers<T extends Funding$joinedUsersArgs<ExtArgs> = {}>(args?: Subset<T, Funding$joinedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Funding model
   */
  interface FundingFieldRefs {
    readonly id: FieldRef<"Funding", 'Int'>
    readonly title: FieldRef<"Funding", 'String'>
    readonly description: FieldRef<"Funding", 'String'>
    readonly goalMoney: FieldRef<"Funding", 'Int'>
    readonly fundedMoney: FieldRef<"Funding", 'Int'>
    readonly deadlineDate: FieldRef<"Funding", 'DateTime'>
    readonly CreatedAt: FieldRef<"Funding", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Funding", 'DateTime'>
    readonly userId: FieldRef<"Funding", 'Int'>
    readonly region: FieldRef<"Funding", 'Region'>
  }
    

  // Custom InputTypes
  /**
   * Funding findUnique
   */
  export type FundingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
    /**
     * Filter, which Funding to fetch.
     */
    where: FundingWhereUniqueInput
  }

  /**
   * Funding findUniqueOrThrow
   */
  export type FundingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
    /**
     * Filter, which Funding to fetch.
     */
    where: FundingWhereUniqueInput
  }

  /**
   * Funding findFirst
   */
  export type FundingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
    /**
     * Filter, which Funding to fetch.
     */
    where?: FundingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fundings to fetch.
     */
    orderBy?: FundingOrderByWithRelationInput | FundingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fundings.
     */
    cursor?: FundingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fundings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fundings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fundings.
     */
    distinct?: FundingScalarFieldEnum | FundingScalarFieldEnum[]
  }

  /**
   * Funding findFirstOrThrow
   */
  export type FundingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
    /**
     * Filter, which Funding to fetch.
     */
    where?: FundingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fundings to fetch.
     */
    orderBy?: FundingOrderByWithRelationInput | FundingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fundings.
     */
    cursor?: FundingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fundings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fundings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fundings.
     */
    distinct?: FundingScalarFieldEnum | FundingScalarFieldEnum[]
  }

  /**
   * Funding findMany
   */
  export type FundingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
    /**
     * Filter, which Fundings to fetch.
     */
    where?: FundingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fundings to fetch.
     */
    orderBy?: FundingOrderByWithRelationInput | FundingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fundings.
     */
    cursor?: FundingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fundings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fundings.
     */
    skip?: number
    distinct?: FundingScalarFieldEnum | FundingScalarFieldEnum[]
  }

  /**
   * Funding create
   */
  export type FundingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
    /**
     * The data needed to create a Funding.
     */
    data: XOR<FundingCreateInput, FundingUncheckedCreateInput>
  }

  /**
   * Funding createMany
   */
  export type FundingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fundings.
     */
    data: FundingCreateManyInput | FundingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funding update
   */
  export type FundingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
    /**
     * The data needed to update a Funding.
     */
    data: XOR<FundingUpdateInput, FundingUncheckedUpdateInput>
    /**
     * Choose, which Funding to update.
     */
    where: FundingWhereUniqueInput
  }

  /**
   * Funding updateMany
   */
  export type FundingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fundings.
     */
    data: XOR<FundingUpdateManyMutationInput, FundingUncheckedUpdateManyInput>
    /**
     * Filter which Fundings to update
     */
    where?: FundingWhereInput
    /**
     * Limit how many Fundings to update.
     */
    limit?: number
  }

  /**
   * Funding upsert
   */
  export type FundingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
    /**
     * The filter to search for the Funding to update in case it exists.
     */
    where: FundingWhereUniqueInput
    /**
     * In case the Funding found by the `where` argument doesn't exist, create a new Funding with this data.
     */
    create: XOR<FundingCreateInput, FundingUncheckedCreateInput>
    /**
     * In case the Funding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundingUpdateInput, FundingUncheckedUpdateInput>
  }

  /**
   * Funding delete
   */
  export type FundingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
    /**
     * Filter which Funding to delete.
     */
    where: FundingWhereUniqueInput
  }

  /**
   * Funding deleteMany
   */
  export type FundingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fundings to delete
     */
    where?: FundingWhereInput
    /**
     * Limit how many Fundings to delete.
     */
    limit?: number
  }

  /**
   * Funding.photos
   */
  export type Funding$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Funding.joinedUsers
   */
  export type Funding$joinedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    where?: JoinedUserWhereInput
    orderBy?: JoinedUserOrderByWithRelationInput | JoinedUserOrderByWithRelationInput[]
    cursor?: JoinedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinedUserScalarFieldEnum | JoinedUserScalarFieldEnum[]
  }

  /**
   * Funding without action
   */
  export type FundingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funding
     */
    select?: FundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funding
     */
    omit?: FundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
    FundingId: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    FundingId: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    FundingId: number | null
    url: string | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    FundingId: number | null
    url: string | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    FundingId: number
    url: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    FundingId?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    FundingId?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    FundingId?: true
    url?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    FundingId?: true
    url?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    FundingId?: true
    url?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: number
    FundingId: number
    url: string
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    FundingId?: boolean
    url?: boolean
    funding?: boolean | FundingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>



  export type PhotoSelectScalar = {
    id?: boolean
    FundingId?: boolean
    url?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "FundingId" | "url", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funding?: boolean | FundingDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      funding: Prisma.$FundingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      FundingId: number
      url: string
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funding<T extends FundingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FundingDefaultArgs<ExtArgs>>): Prisma__FundingClient<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'Int'>
    readonly FundingId: FieldRef<"Photo", 'Int'>
    readonly url: FieldRef<"Photo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model JoinedUser
   */

  export type AggregateJoinedUser = {
    _count: JoinedUserCountAggregateOutputType | null
    _avg: JoinedUserAvgAggregateOutputType | null
    _sum: JoinedUserSumAggregateOutputType | null
    _min: JoinedUserMinAggregateOutputType | null
    _max: JoinedUserMaxAggregateOutputType | null
  }

  export type JoinedUserAvgAggregateOutputType = {
    id: number | null
    FundingsId: number | null
    UserId: number | null
    fundedMoney: number | null
  }

  export type JoinedUserSumAggregateOutputType = {
    id: number | null
    FundingsId: number | null
    UserId: number | null
    fundedMoney: number | null
  }

  export type JoinedUserMinAggregateOutputType = {
    id: number | null
    FundingsId: number | null
    UserId: number | null
    fundedMoney: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type JoinedUserMaxAggregateOutputType = {
    id: number | null
    FundingsId: number | null
    UserId: number | null
    fundedMoney: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type JoinedUserCountAggregateOutputType = {
    id: number
    FundingsId: number
    UserId: number
    fundedMoney: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type JoinedUserAvgAggregateInputType = {
    id?: true
    FundingsId?: true
    UserId?: true
    fundedMoney?: true
  }

  export type JoinedUserSumAggregateInputType = {
    id?: true
    FundingsId?: true
    UserId?: true
    fundedMoney?: true
  }

  export type JoinedUserMinAggregateInputType = {
    id?: true
    FundingsId?: true
    UserId?: true
    fundedMoney?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type JoinedUserMaxAggregateInputType = {
    id?: true
    FundingsId?: true
    UserId?: true
    fundedMoney?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type JoinedUserCountAggregateInputType = {
    id?: true
    FundingsId?: true
    UserId?: true
    fundedMoney?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type JoinedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinedUser to aggregate.
     */
    where?: JoinedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinedUsers to fetch.
     */
    orderBy?: JoinedUserOrderByWithRelationInput | JoinedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoinedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JoinedUsers
    **/
    _count?: true | JoinedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JoinedUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JoinedUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoinedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoinedUserMaxAggregateInputType
  }

  export type GetJoinedUserAggregateType<T extends JoinedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateJoinedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoinedUser[P]>
      : GetScalarType<T[P], AggregateJoinedUser[P]>
  }




  export type JoinedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinedUserWhereInput
    orderBy?: JoinedUserOrderByWithAggregationInput | JoinedUserOrderByWithAggregationInput[]
    by: JoinedUserScalarFieldEnum[] | JoinedUserScalarFieldEnum
    having?: JoinedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoinedUserCountAggregateInputType | true
    _avg?: JoinedUserAvgAggregateInputType
    _sum?: JoinedUserSumAggregateInputType
    _min?: JoinedUserMinAggregateInputType
    _max?: JoinedUserMaxAggregateInputType
  }

  export type JoinedUserGroupByOutputType = {
    id: number
    FundingsId: number
    UserId: number
    fundedMoney: number
    CreatedAt: Date
    UpdatedAt: Date
    _count: JoinedUserCountAggregateOutputType | null
    _avg: JoinedUserAvgAggregateOutputType | null
    _sum: JoinedUserSumAggregateOutputType | null
    _min: JoinedUserMinAggregateOutputType | null
    _max: JoinedUserMaxAggregateOutputType | null
  }

  type GetJoinedUserGroupByPayload<T extends JoinedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoinedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoinedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoinedUserGroupByOutputType[P]>
            : GetScalarType<T[P], JoinedUserGroupByOutputType[P]>
        }
      >
    >


  export type JoinedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    FundingsId?: boolean
    UserId?: boolean
    fundedMoney?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    funding?: boolean | FundingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinedUser"]>



  export type JoinedUserSelectScalar = {
    id?: boolean
    FundingsId?: boolean
    UserId?: boolean
    fundedMoney?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type JoinedUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "FundingsId" | "UserId" | "fundedMoney" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["joinedUser"]>
  export type JoinedUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funding?: boolean | FundingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JoinedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JoinedUser"
    objects: {
      funding: Prisma.$FundingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      FundingsId: number
      UserId: number
      fundedMoney: number
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["joinedUser"]>
    composites: {}
  }

  type JoinedUserGetPayload<S extends boolean | null | undefined | JoinedUserDefaultArgs> = $Result.GetResult<Prisma.$JoinedUserPayload, S>

  type JoinedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JoinedUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JoinedUserCountAggregateInputType | true
    }

  export interface JoinedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JoinedUser'], meta: { name: 'JoinedUser' } }
    /**
     * Find zero or one JoinedUser that matches the filter.
     * @param {JoinedUserFindUniqueArgs} args - Arguments to find a JoinedUser
     * @example
     * // Get one JoinedUser
     * const joinedUser = await prisma.joinedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JoinedUserFindUniqueArgs>(args: SelectSubset<T, JoinedUserFindUniqueArgs<ExtArgs>>): Prisma__JoinedUserClient<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JoinedUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JoinedUserFindUniqueOrThrowArgs} args - Arguments to find a JoinedUser
     * @example
     * // Get one JoinedUser
     * const joinedUser = await prisma.joinedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JoinedUserFindUniqueOrThrowArgs>(args: SelectSubset<T, JoinedUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JoinedUserClient<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinedUserFindFirstArgs} args - Arguments to find a JoinedUser
     * @example
     * // Get one JoinedUser
     * const joinedUser = await prisma.joinedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JoinedUserFindFirstArgs>(args?: SelectSubset<T, JoinedUserFindFirstArgs<ExtArgs>>): Prisma__JoinedUserClient<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinedUserFindFirstOrThrowArgs} args - Arguments to find a JoinedUser
     * @example
     * // Get one JoinedUser
     * const joinedUser = await prisma.joinedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JoinedUserFindFirstOrThrowArgs>(args?: SelectSubset<T, JoinedUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__JoinedUserClient<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JoinedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinedUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JoinedUsers
     * const joinedUsers = await prisma.joinedUser.findMany()
     * 
     * // Get first 10 JoinedUsers
     * const joinedUsers = await prisma.joinedUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const joinedUserWithIdOnly = await prisma.joinedUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JoinedUserFindManyArgs>(args?: SelectSubset<T, JoinedUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JoinedUser.
     * @param {JoinedUserCreateArgs} args - Arguments to create a JoinedUser.
     * @example
     * // Create one JoinedUser
     * const JoinedUser = await prisma.joinedUser.create({
     *   data: {
     *     // ... data to create a JoinedUser
     *   }
     * })
     * 
     */
    create<T extends JoinedUserCreateArgs>(args: SelectSubset<T, JoinedUserCreateArgs<ExtArgs>>): Prisma__JoinedUserClient<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JoinedUsers.
     * @param {JoinedUserCreateManyArgs} args - Arguments to create many JoinedUsers.
     * @example
     * // Create many JoinedUsers
     * const joinedUser = await prisma.joinedUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JoinedUserCreateManyArgs>(args?: SelectSubset<T, JoinedUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JoinedUser.
     * @param {JoinedUserDeleteArgs} args - Arguments to delete one JoinedUser.
     * @example
     * // Delete one JoinedUser
     * const JoinedUser = await prisma.joinedUser.delete({
     *   where: {
     *     // ... filter to delete one JoinedUser
     *   }
     * })
     * 
     */
    delete<T extends JoinedUserDeleteArgs>(args: SelectSubset<T, JoinedUserDeleteArgs<ExtArgs>>): Prisma__JoinedUserClient<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JoinedUser.
     * @param {JoinedUserUpdateArgs} args - Arguments to update one JoinedUser.
     * @example
     * // Update one JoinedUser
     * const joinedUser = await prisma.joinedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JoinedUserUpdateArgs>(args: SelectSubset<T, JoinedUserUpdateArgs<ExtArgs>>): Prisma__JoinedUserClient<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JoinedUsers.
     * @param {JoinedUserDeleteManyArgs} args - Arguments to filter JoinedUsers to delete.
     * @example
     * // Delete a few JoinedUsers
     * const { count } = await prisma.joinedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JoinedUserDeleteManyArgs>(args?: SelectSubset<T, JoinedUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JoinedUsers
     * const joinedUser = await prisma.joinedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JoinedUserUpdateManyArgs>(args: SelectSubset<T, JoinedUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JoinedUser.
     * @param {JoinedUserUpsertArgs} args - Arguments to update or create a JoinedUser.
     * @example
     * // Update or create a JoinedUser
     * const joinedUser = await prisma.joinedUser.upsert({
     *   create: {
     *     // ... data to create a JoinedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JoinedUser we want to update
     *   }
     * })
     */
    upsert<T extends JoinedUserUpsertArgs>(args: SelectSubset<T, JoinedUserUpsertArgs<ExtArgs>>): Prisma__JoinedUserClient<$Result.GetResult<Prisma.$JoinedUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JoinedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinedUserCountArgs} args - Arguments to filter JoinedUsers to count.
     * @example
     * // Count the number of JoinedUsers
     * const count = await prisma.joinedUser.count({
     *   where: {
     *     // ... the filter for the JoinedUsers we want to count
     *   }
     * })
    **/
    count<T extends JoinedUserCountArgs>(
      args?: Subset<T, JoinedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoinedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JoinedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JoinedUserAggregateArgs>(args: Subset<T, JoinedUserAggregateArgs>): Prisma.PrismaPromise<GetJoinedUserAggregateType<T>>

    /**
     * Group by JoinedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinedUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JoinedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoinedUserGroupByArgs['orderBy'] }
        : { orderBy?: JoinedUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JoinedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoinedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JoinedUser model
   */
  readonly fields: JoinedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JoinedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoinedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funding<T extends FundingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FundingDefaultArgs<ExtArgs>>): Prisma__FundingClient<$Result.GetResult<Prisma.$FundingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JoinedUser model
   */
  interface JoinedUserFieldRefs {
    readonly id: FieldRef<"JoinedUser", 'Int'>
    readonly FundingsId: FieldRef<"JoinedUser", 'Int'>
    readonly UserId: FieldRef<"JoinedUser", 'Int'>
    readonly fundedMoney: FieldRef<"JoinedUser", 'Int'>
    readonly CreatedAt: FieldRef<"JoinedUser", 'DateTime'>
    readonly UpdatedAt: FieldRef<"JoinedUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JoinedUser findUnique
   */
  export type JoinedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    /**
     * Filter, which JoinedUser to fetch.
     */
    where: JoinedUserWhereUniqueInput
  }

  /**
   * JoinedUser findUniqueOrThrow
   */
  export type JoinedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    /**
     * Filter, which JoinedUser to fetch.
     */
    where: JoinedUserWhereUniqueInput
  }

  /**
   * JoinedUser findFirst
   */
  export type JoinedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    /**
     * Filter, which JoinedUser to fetch.
     */
    where?: JoinedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinedUsers to fetch.
     */
    orderBy?: JoinedUserOrderByWithRelationInput | JoinedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinedUsers.
     */
    cursor?: JoinedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinedUsers.
     */
    distinct?: JoinedUserScalarFieldEnum | JoinedUserScalarFieldEnum[]
  }

  /**
   * JoinedUser findFirstOrThrow
   */
  export type JoinedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    /**
     * Filter, which JoinedUser to fetch.
     */
    where?: JoinedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinedUsers to fetch.
     */
    orderBy?: JoinedUserOrderByWithRelationInput | JoinedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinedUsers.
     */
    cursor?: JoinedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinedUsers.
     */
    distinct?: JoinedUserScalarFieldEnum | JoinedUserScalarFieldEnum[]
  }

  /**
   * JoinedUser findMany
   */
  export type JoinedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    /**
     * Filter, which JoinedUsers to fetch.
     */
    where?: JoinedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinedUsers to fetch.
     */
    orderBy?: JoinedUserOrderByWithRelationInput | JoinedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JoinedUsers.
     */
    cursor?: JoinedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinedUsers.
     */
    skip?: number
    distinct?: JoinedUserScalarFieldEnum | JoinedUserScalarFieldEnum[]
  }

  /**
   * JoinedUser create
   */
  export type JoinedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    /**
     * The data needed to create a JoinedUser.
     */
    data: XOR<JoinedUserCreateInput, JoinedUserUncheckedCreateInput>
  }

  /**
   * JoinedUser createMany
   */
  export type JoinedUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JoinedUsers.
     */
    data: JoinedUserCreateManyInput | JoinedUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JoinedUser update
   */
  export type JoinedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    /**
     * The data needed to update a JoinedUser.
     */
    data: XOR<JoinedUserUpdateInput, JoinedUserUncheckedUpdateInput>
    /**
     * Choose, which JoinedUser to update.
     */
    where: JoinedUserWhereUniqueInput
  }

  /**
   * JoinedUser updateMany
   */
  export type JoinedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JoinedUsers.
     */
    data: XOR<JoinedUserUpdateManyMutationInput, JoinedUserUncheckedUpdateManyInput>
    /**
     * Filter which JoinedUsers to update
     */
    where?: JoinedUserWhereInput
    /**
     * Limit how many JoinedUsers to update.
     */
    limit?: number
  }

  /**
   * JoinedUser upsert
   */
  export type JoinedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    /**
     * The filter to search for the JoinedUser to update in case it exists.
     */
    where: JoinedUserWhereUniqueInput
    /**
     * In case the JoinedUser found by the `where` argument doesn't exist, create a new JoinedUser with this data.
     */
    create: XOR<JoinedUserCreateInput, JoinedUserUncheckedCreateInput>
    /**
     * In case the JoinedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoinedUserUpdateInput, JoinedUserUncheckedUpdateInput>
  }

  /**
   * JoinedUser delete
   */
  export type JoinedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
    /**
     * Filter which JoinedUser to delete.
     */
    where: JoinedUserWhereUniqueInput
  }

  /**
   * JoinedUser deleteMany
   */
  export type JoinedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinedUsers to delete
     */
    where?: JoinedUserWhereInput
    /**
     * Limit how many JoinedUsers to delete.
     */
    limit?: number
  }

  /**
   * JoinedUser without action
   */
  export type JoinedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinedUser
     */
    select?: JoinedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinedUser
     */
    omit?: JoinedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinedUserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    email: 'email',
    password: 'password',
    status: 'status',
    inactiveDate: 'inactiveDate',
    CreatedAt: 'CreatedAt',
    region: 'region'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MegazineScalarFieldEnum: {
    id: 'id',
    UserId: 'UserId',
    title: 'title',
    body: 'body',
    CreatedAt: 'CreatedAt'
  };

  export type MegazineScalarFieldEnum = (typeof MegazineScalarFieldEnum)[keyof typeof MegazineScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const FundingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    goalMoney: 'goalMoney',
    fundedMoney: 'fundedMoney',
    deadlineDate: 'deadlineDate',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    userId: 'userId',
    region: 'region'
  };

  export type FundingScalarFieldEnum = (typeof FundingScalarFieldEnum)[keyof typeof FundingScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    FundingId: 'FundingId',
    url: 'url'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const JoinedUserScalarFieldEnum: {
    id: 'id',
    FundingsId: 'FundingsId',
    UserId: 'UserId',
    fundedMoney: 'fundedMoney',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type JoinedUserScalarFieldEnum = (typeof JoinedUserScalarFieldEnum)[keyof typeof JoinedUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    userId: 'userId',
    name: 'name',
    email: 'email',
    password: 'password',
    status: 'status'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const MegazineOrderByRelevanceFieldEnum: {
    title: 'title',
    body: 'body'
  };

  export type MegazineOrderByRelevanceFieldEnum = (typeof MegazineOrderByRelevanceFieldEnum)[keyof typeof MegazineOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const FundingOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type FundingOrderByRelevanceFieldEnum = (typeof FundingOrderByRelevanceFieldEnum)[keyof typeof FundingOrderByRelevanceFieldEnum]


  export const PhotoOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type PhotoOrderByRelevanceFieldEnum = (typeof PhotoOrderByRelevanceFieldEnum)[keyof typeof PhotoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Region'
   */
  export type EnumRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Region'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    inactiveDate?: DateTimeNullableFilter<"User"> | Date | string | null
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    region?: EnumRegionFilter<"User"> | $Enums.Region
    magazines?: MegazineListRelationFilter
    joinedUsers?: JoinedUserListRelationFilter
    fundings?: FundingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    inactiveDate?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    region?: SortOrder
    magazines?: MegazineOrderByRelationAggregateInput
    joinedUsers?: JoinedUserOrderByRelationAggregateInput
    fundings?: FundingOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    inactiveDate?: DateTimeNullableFilter<"User"> | Date | string | null
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    region?: EnumRegionFilter<"User"> | $Enums.Region
    magazines?: MegazineListRelationFilter
    joinedUsers?: JoinedUserListRelationFilter
    fundings?: FundingListRelationFilter
  }, "id" | "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    inactiveDate?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    region?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    inactiveDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    region?: EnumRegionWithAggregatesFilter<"User"> | $Enums.Region
  }

  export type MegazineWhereInput = {
    AND?: MegazineWhereInput | MegazineWhereInput[]
    OR?: MegazineWhereInput[]
    NOT?: MegazineWhereInput | MegazineWhereInput[]
    id?: IntFilter<"Megazine"> | number
    UserId?: IntFilter<"Megazine"> | number
    title?: StringFilter<"Megazine"> | string
    body?: StringFilter<"Megazine"> | string
    CreatedAt?: DateTimeFilter<"Megazine"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MegazineOrderByWithRelationInput = {
    id?: SortOrder
    UserId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    CreatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: MegazineOrderByRelevanceInput
  }

  export type MegazineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MegazineWhereInput | MegazineWhereInput[]
    OR?: MegazineWhereInput[]
    NOT?: MegazineWhereInput | MegazineWhereInput[]
    UserId?: IntFilter<"Megazine"> | number
    title?: StringFilter<"Megazine"> | string
    body?: StringFilter<"Megazine"> | string
    CreatedAt?: DateTimeFilter<"Megazine"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MegazineOrderByWithAggregationInput = {
    id?: SortOrder
    UserId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    CreatedAt?: SortOrder
    _count?: MegazineCountOrderByAggregateInput
    _avg?: MegazineAvgOrderByAggregateInput
    _max?: MegazineMaxOrderByAggregateInput
    _min?: MegazineMinOrderByAggregateInput
    _sum?: MegazineSumOrderByAggregateInput
  }

  export type MegazineScalarWhereWithAggregatesInput = {
    AND?: MegazineScalarWhereWithAggregatesInput | MegazineScalarWhereWithAggregatesInput[]
    OR?: MegazineScalarWhereWithAggregatesInput[]
    NOT?: MegazineScalarWhereWithAggregatesInput | MegazineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Megazine"> | number
    UserId?: IntWithAggregatesFilter<"Megazine"> | number
    title?: StringWithAggregatesFilter<"Megazine"> | string
    body?: StringWithAggregatesFilter<"Megazine"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Megazine"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type FundingWhereInput = {
    AND?: FundingWhereInput | FundingWhereInput[]
    OR?: FundingWhereInput[]
    NOT?: FundingWhereInput | FundingWhereInput[]
    id?: IntFilter<"Funding"> | number
    title?: StringFilter<"Funding"> | string
    description?: StringNullableFilter<"Funding"> | string | null
    goalMoney?: IntFilter<"Funding"> | number
    fundedMoney?: IntFilter<"Funding"> | number
    deadlineDate?: DateTimeFilter<"Funding"> | Date | string
    CreatedAt?: DateTimeFilter<"Funding"> | Date | string
    UpdatedAt?: DateTimeFilter<"Funding"> | Date | string
    userId?: IntFilter<"Funding"> | number
    region?: EnumRegionFilter<"Funding"> | $Enums.Region
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    photos?: PhotoListRelationFilter
    joinedUsers?: JoinedUserListRelationFilter
  }

  export type FundingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    goalMoney?: SortOrder
    fundedMoney?: SortOrder
    deadlineDate?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    userId?: SortOrder
    region?: SortOrder
    user?: UserOrderByWithRelationInput
    photos?: PhotoOrderByRelationAggregateInput
    joinedUsers?: JoinedUserOrderByRelationAggregateInput
    _relevance?: FundingOrderByRelevanceInput
  }

  export type FundingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FundingWhereInput | FundingWhereInput[]
    OR?: FundingWhereInput[]
    NOT?: FundingWhereInput | FundingWhereInput[]
    title?: StringFilter<"Funding"> | string
    description?: StringNullableFilter<"Funding"> | string | null
    goalMoney?: IntFilter<"Funding"> | number
    fundedMoney?: IntFilter<"Funding"> | number
    deadlineDate?: DateTimeFilter<"Funding"> | Date | string
    CreatedAt?: DateTimeFilter<"Funding"> | Date | string
    UpdatedAt?: DateTimeFilter<"Funding"> | Date | string
    userId?: IntFilter<"Funding"> | number
    region?: EnumRegionFilter<"Funding"> | $Enums.Region
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    photos?: PhotoListRelationFilter
    joinedUsers?: JoinedUserListRelationFilter
  }, "id">

  export type FundingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    goalMoney?: SortOrder
    fundedMoney?: SortOrder
    deadlineDate?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    userId?: SortOrder
    region?: SortOrder
    _count?: FundingCountOrderByAggregateInput
    _avg?: FundingAvgOrderByAggregateInput
    _max?: FundingMaxOrderByAggregateInput
    _min?: FundingMinOrderByAggregateInput
    _sum?: FundingSumOrderByAggregateInput
  }

  export type FundingScalarWhereWithAggregatesInput = {
    AND?: FundingScalarWhereWithAggregatesInput | FundingScalarWhereWithAggregatesInput[]
    OR?: FundingScalarWhereWithAggregatesInput[]
    NOT?: FundingScalarWhereWithAggregatesInput | FundingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funding"> | number
    title?: StringWithAggregatesFilter<"Funding"> | string
    description?: StringNullableWithAggregatesFilter<"Funding"> | string | null
    goalMoney?: IntWithAggregatesFilter<"Funding"> | number
    fundedMoney?: IntWithAggregatesFilter<"Funding"> | number
    deadlineDate?: DateTimeWithAggregatesFilter<"Funding"> | Date | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Funding"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Funding"> | Date | string
    userId?: IntWithAggregatesFilter<"Funding"> | number
    region?: EnumRegionWithAggregatesFilter<"Funding"> | $Enums.Region
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: IntFilter<"Photo"> | number
    FundingId?: IntFilter<"Photo"> | number
    url?: StringFilter<"Photo"> | string
    funding?: XOR<FundingScalarRelationFilter, FundingWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    FundingId?: SortOrder
    url?: SortOrder
    funding?: FundingOrderByWithRelationInput
    _relevance?: PhotoOrderByRelevanceInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    FundingId?: IntFilter<"Photo"> | number
    url?: StringFilter<"Photo"> | string
    funding?: XOR<FundingScalarRelationFilter, FundingWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    FundingId?: SortOrder
    url?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photo"> | number
    FundingId?: IntWithAggregatesFilter<"Photo"> | number
    url?: StringWithAggregatesFilter<"Photo"> | string
  }

  export type JoinedUserWhereInput = {
    AND?: JoinedUserWhereInput | JoinedUserWhereInput[]
    OR?: JoinedUserWhereInput[]
    NOT?: JoinedUserWhereInput | JoinedUserWhereInput[]
    id?: IntFilter<"JoinedUser"> | number
    FundingsId?: IntFilter<"JoinedUser"> | number
    UserId?: IntFilter<"JoinedUser"> | number
    fundedMoney?: IntFilter<"JoinedUser"> | number
    CreatedAt?: DateTimeFilter<"JoinedUser"> | Date | string
    UpdatedAt?: DateTimeFilter<"JoinedUser"> | Date | string
    funding?: XOR<FundingScalarRelationFilter, FundingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JoinedUserOrderByWithRelationInput = {
    id?: SortOrder
    FundingsId?: SortOrder
    UserId?: SortOrder
    fundedMoney?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    funding?: FundingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type JoinedUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JoinedUserWhereInput | JoinedUserWhereInput[]
    OR?: JoinedUserWhereInput[]
    NOT?: JoinedUserWhereInput | JoinedUserWhereInput[]
    FundingsId?: IntFilter<"JoinedUser"> | number
    UserId?: IntFilter<"JoinedUser"> | number
    fundedMoney?: IntFilter<"JoinedUser"> | number
    CreatedAt?: DateTimeFilter<"JoinedUser"> | Date | string
    UpdatedAt?: DateTimeFilter<"JoinedUser"> | Date | string
    funding?: XOR<FundingScalarRelationFilter, FundingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type JoinedUserOrderByWithAggregationInput = {
    id?: SortOrder
    FundingsId?: SortOrder
    UserId?: SortOrder
    fundedMoney?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: JoinedUserCountOrderByAggregateInput
    _avg?: JoinedUserAvgOrderByAggregateInput
    _max?: JoinedUserMaxOrderByAggregateInput
    _min?: JoinedUserMinOrderByAggregateInput
    _sum?: JoinedUserSumOrderByAggregateInput
  }

  export type JoinedUserScalarWhereWithAggregatesInput = {
    AND?: JoinedUserScalarWhereWithAggregatesInput | JoinedUserScalarWhereWithAggregatesInput[]
    OR?: JoinedUserScalarWhereWithAggregatesInput[]
    NOT?: JoinedUserScalarWhereWithAggregatesInput | JoinedUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JoinedUser"> | number
    FundingsId?: IntWithAggregatesFilter<"JoinedUser"> | number
    UserId?: IntWithAggregatesFilter<"JoinedUser"> | number
    fundedMoney?: IntWithAggregatesFilter<"JoinedUser"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"JoinedUser"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"JoinedUser"> | Date | string
  }

  export type UserCreateInput = {
    userId: string
    name: string
    email: string
    password: string
    status: string
    inactiveDate?: Date | string | null
    CreatedAt: Date | string
    region: $Enums.Region
    magazines?: MegazineCreateNestedManyWithoutUserInput
    joinedUsers?: JoinedUserCreateNestedManyWithoutUserInput
    fundings?: FundingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userId: string
    name: string
    email: string
    password: string
    status: string
    inactiveDate?: Date | string | null
    CreatedAt: Date | string
    region: $Enums.Region
    magazines?: MegazineUncheckedCreateNestedManyWithoutUserInput
    joinedUsers?: JoinedUserUncheckedCreateNestedManyWithoutUserInput
    fundings?: FundingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    magazines?: MegazineUpdateManyWithoutUserNestedInput
    joinedUsers?: JoinedUserUpdateManyWithoutUserNestedInput
    fundings?: FundingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    magazines?: MegazineUncheckedUpdateManyWithoutUserNestedInput
    joinedUsers?: JoinedUserUncheckedUpdateManyWithoutUserNestedInput
    fundings?: FundingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userId: string
    name: string
    email: string
    password: string
    status: string
    inactiveDate?: Date | string | null
    CreatedAt: Date | string
    region: $Enums.Region
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
  }

  export type MegazineCreateInput = {
    title: string
    body: string
    CreatedAt: Date | string
    user: UserCreateNestedOneWithoutMagazinesInput
  }

  export type MegazineUncheckedCreateInput = {
    id?: number
    UserId: number
    title: string
    body: string
    CreatedAt: Date | string
  }

  export type MegazineUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMagazinesNestedInput
  }

  export type MegazineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MegazineCreateManyInput = {
    id?: number
    UserId: number
    title: string
    body: string
    CreatedAt: Date | string
  }

  export type MegazineUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MegazineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingCreateInput = {
    title: string
    description?: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date | string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    region: $Enums.Region
    user: UserCreateNestedOneWithoutFundingsInput
    photos?: PhotoCreateNestedManyWithoutFundingInput
    joinedUsers?: JoinedUserCreateNestedManyWithoutFundingInput
  }

  export type FundingUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date | string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    userId: number
    region: $Enums.Region
    photos?: PhotoUncheckedCreateNestedManyWithoutFundingInput
    joinedUsers?: JoinedUserUncheckedCreateNestedManyWithoutFundingInput
  }

  export type FundingUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    user?: UserUpdateOneRequiredWithoutFundingsNestedInput
    photos?: PhotoUpdateManyWithoutFundingNestedInput
    joinedUsers?: JoinedUserUpdateManyWithoutFundingNestedInput
  }

  export type FundingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    photos?: PhotoUncheckedUpdateManyWithoutFundingNestedInput
    joinedUsers?: JoinedUserUncheckedUpdateManyWithoutFundingNestedInput
  }

  export type FundingCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date | string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    userId: number
    region: $Enums.Region
  }

  export type FundingUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
  }

  export type FundingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
  }

  export type PhotoCreateInput = {
    url: string
    funding: FundingCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    FundingId: number
    url: string
  }

  export type PhotoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    funding?: FundingUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    FundingId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateManyInput = {
    id?: number
    FundingId: number
    url: string
  }

  export type PhotoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    FundingId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type JoinedUserCreateInput = {
    fundedMoney: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    funding: FundingCreateNestedOneWithoutJoinedUsersInput
    user: UserCreateNestedOneWithoutJoinedUsersInput
  }

  export type JoinedUserUncheckedCreateInput = {
    id?: number
    FundingsId: number
    UserId: number
    fundedMoney: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type JoinedUserUpdateInput = {
    fundedMoney?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funding?: FundingUpdateOneRequiredWithoutJoinedUsersNestedInput
    user?: UserUpdateOneRequiredWithoutJoinedUsersNestedInput
  }

  export type JoinedUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    FundingsId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinedUserCreateManyInput = {
    id?: number
    FundingsId: number
    UserId: number
    fundedMoney: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type JoinedUserUpdateManyMutationInput = {
    fundedMoney?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinedUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    FundingsId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRegionFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel>
    in?: $Enums.Region[]
    notIn?: $Enums.Region[]
    not?: NestedEnumRegionFilter<$PrismaModel> | $Enums.Region
  }

  export type MegazineListRelationFilter = {
    every?: MegazineWhereInput
    some?: MegazineWhereInput
    none?: MegazineWhereInput
  }

  export type JoinedUserListRelationFilter = {
    every?: JoinedUserWhereInput
    some?: JoinedUserWhereInput
    none?: JoinedUserWhereInput
  }

  export type FundingListRelationFilter = {
    every?: FundingWhereInput
    some?: FundingWhereInput
    none?: FundingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MegazineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JoinedUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FundingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    inactiveDate?: SortOrder
    CreatedAt?: SortOrder
    region?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    inactiveDate?: SortOrder
    CreatedAt?: SortOrder
    region?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    inactiveDate?: SortOrder
    CreatedAt?: SortOrder
    region?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRegionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel>
    in?: $Enums.Region[]
    notIn?: $Enums.Region[]
    not?: NestedEnumRegionWithAggregatesFilter<$PrismaModel> | $Enums.Region
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegionFilter<$PrismaModel>
    _max?: NestedEnumRegionFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MegazineOrderByRelevanceInput = {
    fields: MegazineOrderByRelevanceFieldEnum | MegazineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MegazineCountOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    CreatedAt?: SortOrder
  }

  export type MegazineAvgOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
  }

  export type MegazineMaxOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    CreatedAt?: SortOrder
  }

  export type MegazineMinOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    CreatedAt?: SortOrder
  }

  export type MegazineSumOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FundingOrderByRelevanceInput = {
    fields: FundingOrderByRelevanceFieldEnum | FundingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FundingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goalMoney?: SortOrder
    fundedMoney?: SortOrder
    deadlineDate?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    userId?: SortOrder
    region?: SortOrder
  }

  export type FundingAvgOrderByAggregateInput = {
    id?: SortOrder
    goalMoney?: SortOrder
    fundedMoney?: SortOrder
    userId?: SortOrder
  }

  export type FundingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goalMoney?: SortOrder
    fundedMoney?: SortOrder
    deadlineDate?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    userId?: SortOrder
    region?: SortOrder
  }

  export type FundingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goalMoney?: SortOrder
    fundedMoney?: SortOrder
    deadlineDate?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    userId?: SortOrder
    region?: SortOrder
  }

  export type FundingSumOrderByAggregateInput = {
    id?: SortOrder
    goalMoney?: SortOrder
    fundedMoney?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FundingScalarRelationFilter = {
    is?: FundingWhereInput
    isNot?: FundingWhereInput
  }

  export type PhotoOrderByRelevanceInput = {
    fields: PhotoOrderByRelevanceFieldEnum | PhotoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    FundingId?: SortOrder
    url?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    FundingId?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    FundingId?: SortOrder
    url?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    FundingId?: SortOrder
    url?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
    FundingId?: SortOrder
  }

  export type JoinedUserCountOrderByAggregateInput = {
    id?: SortOrder
    FundingsId?: SortOrder
    UserId?: SortOrder
    fundedMoney?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type JoinedUserAvgOrderByAggregateInput = {
    id?: SortOrder
    FundingsId?: SortOrder
    UserId?: SortOrder
    fundedMoney?: SortOrder
  }

  export type JoinedUserMaxOrderByAggregateInput = {
    id?: SortOrder
    FundingsId?: SortOrder
    UserId?: SortOrder
    fundedMoney?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type JoinedUserMinOrderByAggregateInput = {
    id?: SortOrder
    FundingsId?: SortOrder
    UserId?: SortOrder
    fundedMoney?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type JoinedUserSumOrderByAggregateInput = {
    id?: SortOrder
    FundingsId?: SortOrder
    UserId?: SortOrder
    fundedMoney?: SortOrder
  }

  export type MegazineCreateNestedManyWithoutUserInput = {
    create?: XOR<MegazineCreateWithoutUserInput, MegazineUncheckedCreateWithoutUserInput> | MegazineCreateWithoutUserInput[] | MegazineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MegazineCreateOrConnectWithoutUserInput | MegazineCreateOrConnectWithoutUserInput[]
    createMany?: MegazineCreateManyUserInputEnvelope
    connect?: MegazineWhereUniqueInput | MegazineWhereUniqueInput[]
  }

  export type JoinedUserCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinedUserCreateWithoutUserInput, JoinedUserUncheckedCreateWithoutUserInput> | JoinedUserCreateWithoutUserInput[] | JoinedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinedUserCreateOrConnectWithoutUserInput | JoinedUserCreateOrConnectWithoutUserInput[]
    createMany?: JoinedUserCreateManyUserInputEnvelope
    connect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
  }

  export type FundingCreateNestedManyWithoutUserInput = {
    create?: XOR<FundingCreateWithoutUserInput, FundingUncheckedCreateWithoutUserInput> | FundingCreateWithoutUserInput[] | FundingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundingCreateOrConnectWithoutUserInput | FundingCreateOrConnectWithoutUserInput[]
    createMany?: FundingCreateManyUserInputEnvelope
    connect?: FundingWhereUniqueInput | FundingWhereUniqueInput[]
  }

  export type MegazineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MegazineCreateWithoutUserInput, MegazineUncheckedCreateWithoutUserInput> | MegazineCreateWithoutUserInput[] | MegazineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MegazineCreateOrConnectWithoutUserInput | MegazineCreateOrConnectWithoutUserInput[]
    createMany?: MegazineCreateManyUserInputEnvelope
    connect?: MegazineWhereUniqueInput | MegazineWhereUniqueInput[]
  }

  export type JoinedUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinedUserCreateWithoutUserInput, JoinedUserUncheckedCreateWithoutUserInput> | JoinedUserCreateWithoutUserInput[] | JoinedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinedUserCreateOrConnectWithoutUserInput | JoinedUserCreateOrConnectWithoutUserInput[]
    createMany?: JoinedUserCreateManyUserInputEnvelope
    connect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
  }

  export type FundingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FundingCreateWithoutUserInput, FundingUncheckedCreateWithoutUserInput> | FundingCreateWithoutUserInput[] | FundingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundingCreateOrConnectWithoutUserInput | FundingCreateOrConnectWithoutUserInput[]
    createMany?: FundingCreateManyUserInputEnvelope
    connect?: FundingWhereUniqueInput | FundingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRegionFieldUpdateOperationsInput = {
    set?: $Enums.Region
  }

  export type MegazineUpdateManyWithoutUserNestedInput = {
    create?: XOR<MegazineCreateWithoutUserInput, MegazineUncheckedCreateWithoutUserInput> | MegazineCreateWithoutUserInput[] | MegazineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MegazineCreateOrConnectWithoutUserInput | MegazineCreateOrConnectWithoutUserInput[]
    upsert?: MegazineUpsertWithWhereUniqueWithoutUserInput | MegazineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MegazineCreateManyUserInputEnvelope
    set?: MegazineWhereUniqueInput | MegazineWhereUniqueInput[]
    disconnect?: MegazineWhereUniqueInput | MegazineWhereUniqueInput[]
    delete?: MegazineWhereUniqueInput | MegazineWhereUniqueInput[]
    connect?: MegazineWhereUniqueInput | MegazineWhereUniqueInput[]
    update?: MegazineUpdateWithWhereUniqueWithoutUserInput | MegazineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MegazineUpdateManyWithWhereWithoutUserInput | MegazineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MegazineScalarWhereInput | MegazineScalarWhereInput[]
  }

  export type JoinedUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinedUserCreateWithoutUserInput, JoinedUserUncheckedCreateWithoutUserInput> | JoinedUserCreateWithoutUserInput[] | JoinedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinedUserCreateOrConnectWithoutUserInput | JoinedUserCreateOrConnectWithoutUserInput[]
    upsert?: JoinedUserUpsertWithWhereUniqueWithoutUserInput | JoinedUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinedUserCreateManyUserInputEnvelope
    set?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    disconnect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    delete?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    connect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    update?: JoinedUserUpdateWithWhereUniqueWithoutUserInput | JoinedUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinedUserUpdateManyWithWhereWithoutUserInput | JoinedUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinedUserScalarWhereInput | JoinedUserScalarWhereInput[]
  }

  export type FundingUpdateManyWithoutUserNestedInput = {
    create?: XOR<FundingCreateWithoutUserInput, FundingUncheckedCreateWithoutUserInput> | FundingCreateWithoutUserInput[] | FundingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundingCreateOrConnectWithoutUserInput | FundingCreateOrConnectWithoutUserInput[]
    upsert?: FundingUpsertWithWhereUniqueWithoutUserInput | FundingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FundingCreateManyUserInputEnvelope
    set?: FundingWhereUniqueInput | FundingWhereUniqueInput[]
    disconnect?: FundingWhereUniqueInput | FundingWhereUniqueInput[]
    delete?: FundingWhereUniqueInput | FundingWhereUniqueInput[]
    connect?: FundingWhereUniqueInput | FundingWhereUniqueInput[]
    update?: FundingUpdateWithWhereUniqueWithoutUserInput | FundingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FundingUpdateManyWithWhereWithoutUserInput | FundingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FundingScalarWhereInput | FundingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MegazineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MegazineCreateWithoutUserInput, MegazineUncheckedCreateWithoutUserInput> | MegazineCreateWithoutUserInput[] | MegazineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MegazineCreateOrConnectWithoutUserInput | MegazineCreateOrConnectWithoutUserInput[]
    upsert?: MegazineUpsertWithWhereUniqueWithoutUserInput | MegazineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MegazineCreateManyUserInputEnvelope
    set?: MegazineWhereUniqueInput | MegazineWhereUniqueInput[]
    disconnect?: MegazineWhereUniqueInput | MegazineWhereUniqueInput[]
    delete?: MegazineWhereUniqueInput | MegazineWhereUniqueInput[]
    connect?: MegazineWhereUniqueInput | MegazineWhereUniqueInput[]
    update?: MegazineUpdateWithWhereUniqueWithoutUserInput | MegazineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MegazineUpdateManyWithWhereWithoutUserInput | MegazineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MegazineScalarWhereInput | MegazineScalarWhereInput[]
  }

  export type JoinedUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinedUserCreateWithoutUserInput, JoinedUserUncheckedCreateWithoutUserInput> | JoinedUserCreateWithoutUserInput[] | JoinedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinedUserCreateOrConnectWithoutUserInput | JoinedUserCreateOrConnectWithoutUserInput[]
    upsert?: JoinedUserUpsertWithWhereUniqueWithoutUserInput | JoinedUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinedUserCreateManyUserInputEnvelope
    set?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    disconnect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    delete?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    connect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    update?: JoinedUserUpdateWithWhereUniqueWithoutUserInput | JoinedUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinedUserUpdateManyWithWhereWithoutUserInput | JoinedUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinedUserScalarWhereInput | JoinedUserScalarWhereInput[]
  }

  export type FundingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FundingCreateWithoutUserInput, FundingUncheckedCreateWithoutUserInput> | FundingCreateWithoutUserInput[] | FundingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundingCreateOrConnectWithoutUserInput | FundingCreateOrConnectWithoutUserInput[]
    upsert?: FundingUpsertWithWhereUniqueWithoutUserInput | FundingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FundingCreateManyUserInputEnvelope
    set?: FundingWhereUniqueInput | FundingWhereUniqueInput[]
    disconnect?: FundingWhereUniqueInput | FundingWhereUniqueInput[]
    delete?: FundingWhereUniqueInput | FundingWhereUniqueInput[]
    connect?: FundingWhereUniqueInput | FundingWhereUniqueInput[]
    update?: FundingUpdateWithWhereUniqueWithoutUserInput | FundingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FundingUpdateManyWithWhereWithoutUserInput | FundingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FundingScalarWhereInput | FundingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMagazinesInput = {
    create?: XOR<UserCreateWithoutMagazinesInput, UserUncheckedCreateWithoutMagazinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMagazinesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMagazinesNestedInput = {
    create?: XOR<UserCreateWithoutMagazinesInput, UserUncheckedCreateWithoutMagazinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMagazinesInput
    upsert?: UserUpsertWithoutMagazinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMagazinesInput, UserUpdateWithoutMagazinesInput>, UserUncheckedUpdateWithoutMagazinesInput>
  }

  export type UserCreateNestedOneWithoutFundingsInput = {
    create?: XOR<UserCreateWithoutFundingsInput, UserUncheckedCreateWithoutFundingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFundingsInput
    connect?: UserWhereUniqueInput
  }

  export type PhotoCreateNestedManyWithoutFundingInput = {
    create?: XOR<PhotoCreateWithoutFundingInput, PhotoUncheckedCreateWithoutFundingInput> | PhotoCreateWithoutFundingInput[] | PhotoUncheckedCreateWithoutFundingInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutFundingInput | PhotoCreateOrConnectWithoutFundingInput[]
    createMany?: PhotoCreateManyFundingInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type JoinedUserCreateNestedManyWithoutFundingInput = {
    create?: XOR<JoinedUserCreateWithoutFundingInput, JoinedUserUncheckedCreateWithoutFundingInput> | JoinedUserCreateWithoutFundingInput[] | JoinedUserUncheckedCreateWithoutFundingInput[]
    connectOrCreate?: JoinedUserCreateOrConnectWithoutFundingInput | JoinedUserCreateOrConnectWithoutFundingInput[]
    createMany?: JoinedUserCreateManyFundingInputEnvelope
    connect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutFundingInput = {
    create?: XOR<PhotoCreateWithoutFundingInput, PhotoUncheckedCreateWithoutFundingInput> | PhotoCreateWithoutFundingInput[] | PhotoUncheckedCreateWithoutFundingInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutFundingInput | PhotoCreateOrConnectWithoutFundingInput[]
    createMany?: PhotoCreateManyFundingInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type JoinedUserUncheckedCreateNestedManyWithoutFundingInput = {
    create?: XOR<JoinedUserCreateWithoutFundingInput, JoinedUserUncheckedCreateWithoutFundingInput> | JoinedUserCreateWithoutFundingInput[] | JoinedUserUncheckedCreateWithoutFundingInput[]
    connectOrCreate?: JoinedUserCreateOrConnectWithoutFundingInput | JoinedUserCreateOrConnectWithoutFundingInput[]
    createMany?: JoinedUserCreateManyFundingInputEnvelope
    connect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutFundingsNestedInput = {
    create?: XOR<UserCreateWithoutFundingsInput, UserUncheckedCreateWithoutFundingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFundingsInput
    upsert?: UserUpsertWithoutFundingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFundingsInput, UserUpdateWithoutFundingsInput>, UserUncheckedUpdateWithoutFundingsInput>
  }

  export type PhotoUpdateManyWithoutFundingNestedInput = {
    create?: XOR<PhotoCreateWithoutFundingInput, PhotoUncheckedCreateWithoutFundingInput> | PhotoCreateWithoutFundingInput[] | PhotoUncheckedCreateWithoutFundingInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutFundingInput | PhotoCreateOrConnectWithoutFundingInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutFundingInput | PhotoUpsertWithWhereUniqueWithoutFundingInput[]
    createMany?: PhotoCreateManyFundingInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutFundingInput | PhotoUpdateWithWhereUniqueWithoutFundingInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutFundingInput | PhotoUpdateManyWithWhereWithoutFundingInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type JoinedUserUpdateManyWithoutFundingNestedInput = {
    create?: XOR<JoinedUserCreateWithoutFundingInput, JoinedUserUncheckedCreateWithoutFundingInput> | JoinedUserCreateWithoutFundingInput[] | JoinedUserUncheckedCreateWithoutFundingInput[]
    connectOrCreate?: JoinedUserCreateOrConnectWithoutFundingInput | JoinedUserCreateOrConnectWithoutFundingInput[]
    upsert?: JoinedUserUpsertWithWhereUniqueWithoutFundingInput | JoinedUserUpsertWithWhereUniqueWithoutFundingInput[]
    createMany?: JoinedUserCreateManyFundingInputEnvelope
    set?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    disconnect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    delete?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    connect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    update?: JoinedUserUpdateWithWhereUniqueWithoutFundingInput | JoinedUserUpdateWithWhereUniqueWithoutFundingInput[]
    updateMany?: JoinedUserUpdateManyWithWhereWithoutFundingInput | JoinedUserUpdateManyWithWhereWithoutFundingInput[]
    deleteMany?: JoinedUserScalarWhereInput | JoinedUserScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutFundingNestedInput = {
    create?: XOR<PhotoCreateWithoutFundingInput, PhotoUncheckedCreateWithoutFundingInput> | PhotoCreateWithoutFundingInput[] | PhotoUncheckedCreateWithoutFundingInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutFundingInput | PhotoCreateOrConnectWithoutFundingInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutFundingInput | PhotoUpsertWithWhereUniqueWithoutFundingInput[]
    createMany?: PhotoCreateManyFundingInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutFundingInput | PhotoUpdateWithWhereUniqueWithoutFundingInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutFundingInput | PhotoUpdateManyWithWhereWithoutFundingInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type JoinedUserUncheckedUpdateManyWithoutFundingNestedInput = {
    create?: XOR<JoinedUserCreateWithoutFundingInput, JoinedUserUncheckedCreateWithoutFundingInput> | JoinedUserCreateWithoutFundingInput[] | JoinedUserUncheckedCreateWithoutFundingInput[]
    connectOrCreate?: JoinedUserCreateOrConnectWithoutFundingInput | JoinedUserCreateOrConnectWithoutFundingInput[]
    upsert?: JoinedUserUpsertWithWhereUniqueWithoutFundingInput | JoinedUserUpsertWithWhereUniqueWithoutFundingInput[]
    createMany?: JoinedUserCreateManyFundingInputEnvelope
    set?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    disconnect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    delete?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    connect?: JoinedUserWhereUniqueInput | JoinedUserWhereUniqueInput[]
    update?: JoinedUserUpdateWithWhereUniqueWithoutFundingInput | JoinedUserUpdateWithWhereUniqueWithoutFundingInput[]
    updateMany?: JoinedUserUpdateManyWithWhereWithoutFundingInput | JoinedUserUpdateManyWithWhereWithoutFundingInput[]
    deleteMany?: JoinedUserScalarWhereInput | JoinedUserScalarWhereInput[]
  }

  export type FundingCreateNestedOneWithoutPhotosInput = {
    create?: XOR<FundingCreateWithoutPhotosInput, FundingUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: FundingCreateOrConnectWithoutPhotosInput
    connect?: FundingWhereUniqueInput
  }

  export type FundingUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<FundingCreateWithoutPhotosInput, FundingUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: FundingCreateOrConnectWithoutPhotosInput
    upsert?: FundingUpsertWithoutPhotosInput
    connect?: FundingWhereUniqueInput
    update?: XOR<XOR<FundingUpdateToOneWithWhereWithoutPhotosInput, FundingUpdateWithoutPhotosInput>, FundingUncheckedUpdateWithoutPhotosInput>
  }

  export type FundingCreateNestedOneWithoutJoinedUsersInput = {
    create?: XOR<FundingCreateWithoutJoinedUsersInput, FundingUncheckedCreateWithoutJoinedUsersInput>
    connectOrCreate?: FundingCreateOrConnectWithoutJoinedUsersInput
    connect?: FundingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJoinedUsersInput = {
    create?: XOR<UserCreateWithoutJoinedUsersInput, UserUncheckedCreateWithoutJoinedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type FundingUpdateOneRequiredWithoutJoinedUsersNestedInput = {
    create?: XOR<FundingCreateWithoutJoinedUsersInput, FundingUncheckedCreateWithoutJoinedUsersInput>
    connectOrCreate?: FundingCreateOrConnectWithoutJoinedUsersInput
    upsert?: FundingUpsertWithoutJoinedUsersInput
    connect?: FundingWhereUniqueInput
    update?: XOR<XOR<FundingUpdateToOneWithWhereWithoutJoinedUsersInput, FundingUpdateWithoutJoinedUsersInput>, FundingUncheckedUpdateWithoutJoinedUsersInput>
  }

  export type UserUpdateOneRequiredWithoutJoinedUsersNestedInput = {
    create?: XOR<UserCreateWithoutJoinedUsersInput, UserUncheckedCreateWithoutJoinedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinedUsersInput
    upsert?: UserUpsertWithoutJoinedUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJoinedUsersInput, UserUpdateWithoutJoinedUsersInput>, UserUncheckedUpdateWithoutJoinedUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRegionFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel>
    in?: $Enums.Region[]
    notIn?: $Enums.Region[]
    not?: NestedEnumRegionFilter<$PrismaModel> | $Enums.Region
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRegionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel>
    in?: $Enums.Region[]
    notIn?: $Enums.Region[]
    not?: NestedEnumRegionWithAggregatesFilter<$PrismaModel> | $Enums.Region
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegionFilter<$PrismaModel>
    _max?: NestedEnumRegionFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MegazineCreateWithoutUserInput = {
    title: string
    body: string
    CreatedAt: Date | string
  }

  export type MegazineUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    body: string
    CreatedAt: Date | string
  }

  export type MegazineCreateOrConnectWithoutUserInput = {
    where: MegazineWhereUniqueInput
    create: XOR<MegazineCreateWithoutUserInput, MegazineUncheckedCreateWithoutUserInput>
  }

  export type MegazineCreateManyUserInputEnvelope = {
    data: MegazineCreateManyUserInput | MegazineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JoinedUserCreateWithoutUserInput = {
    fundedMoney: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    funding: FundingCreateNestedOneWithoutJoinedUsersInput
  }

  export type JoinedUserUncheckedCreateWithoutUserInput = {
    id?: number
    FundingsId: number
    fundedMoney: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type JoinedUserCreateOrConnectWithoutUserInput = {
    where: JoinedUserWhereUniqueInput
    create: XOR<JoinedUserCreateWithoutUserInput, JoinedUserUncheckedCreateWithoutUserInput>
  }

  export type JoinedUserCreateManyUserInputEnvelope = {
    data: JoinedUserCreateManyUserInput | JoinedUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FundingCreateWithoutUserInput = {
    title: string
    description?: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date | string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    region: $Enums.Region
    photos?: PhotoCreateNestedManyWithoutFundingInput
    joinedUsers?: JoinedUserCreateNestedManyWithoutFundingInput
  }

  export type FundingUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date | string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    region: $Enums.Region
    photos?: PhotoUncheckedCreateNestedManyWithoutFundingInput
    joinedUsers?: JoinedUserUncheckedCreateNestedManyWithoutFundingInput
  }

  export type FundingCreateOrConnectWithoutUserInput = {
    where: FundingWhereUniqueInput
    create: XOR<FundingCreateWithoutUserInput, FundingUncheckedCreateWithoutUserInput>
  }

  export type FundingCreateManyUserInputEnvelope = {
    data: FundingCreateManyUserInput | FundingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MegazineUpsertWithWhereUniqueWithoutUserInput = {
    where: MegazineWhereUniqueInput
    update: XOR<MegazineUpdateWithoutUserInput, MegazineUncheckedUpdateWithoutUserInput>
    create: XOR<MegazineCreateWithoutUserInput, MegazineUncheckedCreateWithoutUserInput>
  }

  export type MegazineUpdateWithWhereUniqueWithoutUserInput = {
    where: MegazineWhereUniqueInput
    data: XOR<MegazineUpdateWithoutUserInput, MegazineUncheckedUpdateWithoutUserInput>
  }

  export type MegazineUpdateManyWithWhereWithoutUserInput = {
    where: MegazineScalarWhereInput
    data: XOR<MegazineUpdateManyMutationInput, MegazineUncheckedUpdateManyWithoutUserInput>
  }

  export type MegazineScalarWhereInput = {
    AND?: MegazineScalarWhereInput | MegazineScalarWhereInput[]
    OR?: MegazineScalarWhereInput[]
    NOT?: MegazineScalarWhereInput | MegazineScalarWhereInput[]
    id?: IntFilter<"Megazine"> | number
    UserId?: IntFilter<"Megazine"> | number
    title?: StringFilter<"Megazine"> | string
    body?: StringFilter<"Megazine"> | string
    CreatedAt?: DateTimeFilter<"Megazine"> | Date | string
  }

  export type JoinedUserUpsertWithWhereUniqueWithoutUserInput = {
    where: JoinedUserWhereUniqueInput
    update: XOR<JoinedUserUpdateWithoutUserInput, JoinedUserUncheckedUpdateWithoutUserInput>
    create: XOR<JoinedUserCreateWithoutUserInput, JoinedUserUncheckedCreateWithoutUserInput>
  }

  export type JoinedUserUpdateWithWhereUniqueWithoutUserInput = {
    where: JoinedUserWhereUniqueInput
    data: XOR<JoinedUserUpdateWithoutUserInput, JoinedUserUncheckedUpdateWithoutUserInput>
  }

  export type JoinedUserUpdateManyWithWhereWithoutUserInput = {
    where: JoinedUserScalarWhereInput
    data: XOR<JoinedUserUpdateManyMutationInput, JoinedUserUncheckedUpdateManyWithoutUserInput>
  }

  export type JoinedUserScalarWhereInput = {
    AND?: JoinedUserScalarWhereInput | JoinedUserScalarWhereInput[]
    OR?: JoinedUserScalarWhereInput[]
    NOT?: JoinedUserScalarWhereInput | JoinedUserScalarWhereInput[]
    id?: IntFilter<"JoinedUser"> | number
    FundingsId?: IntFilter<"JoinedUser"> | number
    UserId?: IntFilter<"JoinedUser"> | number
    fundedMoney?: IntFilter<"JoinedUser"> | number
    CreatedAt?: DateTimeFilter<"JoinedUser"> | Date | string
    UpdatedAt?: DateTimeFilter<"JoinedUser"> | Date | string
  }

  export type FundingUpsertWithWhereUniqueWithoutUserInput = {
    where: FundingWhereUniqueInput
    update: XOR<FundingUpdateWithoutUserInput, FundingUncheckedUpdateWithoutUserInput>
    create: XOR<FundingCreateWithoutUserInput, FundingUncheckedCreateWithoutUserInput>
  }

  export type FundingUpdateWithWhereUniqueWithoutUserInput = {
    where: FundingWhereUniqueInput
    data: XOR<FundingUpdateWithoutUserInput, FundingUncheckedUpdateWithoutUserInput>
  }

  export type FundingUpdateManyWithWhereWithoutUserInput = {
    where: FundingScalarWhereInput
    data: XOR<FundingUpdateManyMutationInput, FundingUncheckedUpdateManyWithoutUserInput>
  }

  export type FundingScalarWhereInput = {
    AND?: FundingScalarWhereInput | FundingScalarWhereInput[]
    OR?: FundingScalarWhereInput[]
    NOT?: FundingScalarWhereInput | FundingScalarWhereInput[]
    id?: IntFilter<"Funding"> | number
    title?: StringFilter<"Funding"> | string
    description?: StringNullableFilter<"Funding"> | string | null
    goalMoney?: IntFilter<"Funding"> | number
    fundedMoney?: IntFilter<"Funding"> | number
    deadlineDate?: DateTimeFilter<"Funding"> | Date | string
    CreatedAt?: DateTimeFilter<"Funding"> | Date | string
    UpdatedAt?: DateTimeFilter<"Funding"> | Date | string
    userId?: IntFilter<"Funding"> | number
    region?: EnumRegionFilter<"Funding"> | $Enums.Region
  }

  export type UserCreateWithoutMagazinesInput = {
    userId: string
    name: string
    email: string
    password: string
    status: string
    inactiveDate?: Date | string | null
    CreatedAt: Date | string
    region: $Enums.Region
    joinedUsers?: JoinedUserCreateNestedManyWithoutUserInput
    fundings?: FundingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMagazinesInput = {
    id?: number
    userId: string
    name: string
    email: string
    password: string
    status: string
    inactiveDate?: Date | string | null
    CreatedAt: Date | string
    region: $Enums.Region
    joinedUsers?: JoinedUserUncheckedCreateNestedManyWithoutUserInput
    fundings?: FundingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMagazinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMagazinesInput, UserUncheckedCreateWithoutMagazinesInput>
  }

  export type UserUpsertWithoutMagazinesInput = {
    update: XOR<UserUpdateWithoutMagazinesInput, UserUncheckedUpdateWithoutMagazinesInput>
    create: XOR<UserCreateWithoutMagazinesInput, UserUncheckedCreateWithoutMagazinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMagazinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMagazinesInput, UserUncheckedUpdateWithoutMagazinesInput>
  }

  export type UserUpdateWithoutMagazinesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    joinedUsers?: JoinedUserUpdateManyWithoutUserNestedInput
    fundings?: FundingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMagazinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    joinedUsers?: JoinedUserUncheckedUpdateManyWithoutUserNestedInput
    fundings?: FundingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFundingsInput = {
    userId: string
    name: string
    email: string
    password: string
    status: string
    inactiveDate?: Date | string | null
    CreatedAt: Date | string
    region: $Enums.Region
    magazines?: MegazineCreateNestedManyWithoutUserInput
    joinedUsers?: JoinedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFundingsInput = {
    id?: number
    userId: string
    name: string
    email: string
    password: string
    status: string
    inactiveDate?: Date | string | null
    CreatedAt: Date | string
    region: $Enums.Region
    magazines?: MegazineUncheckedCreateNestedManyWithoutUserInput
    joinedUsers?: JoinedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFundingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFundingsInput, UserUncheckedCreateWithoutFundingsInput>
  }

  export type PhotoCreateWithoutFundingInput = {
    url: string
  }

  export type PhotoUncheckedCreateWithoutFundingInput = {
    id?: number
    url: string
  }

  export type PhotoCreateOrConnectWithoutFundingInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutFundingInput, PhotoUncheckedCreateWithoutFundingInput>
  }

  export type PhotoCreateManyFundingInputEnvelope = {
    data: PhotoCreateManyFundingInput | PhotoCreateManyFundingInput[]
    skipDuplicates?: boolean
  }

  export type JoinedUserCreateWithoutFundingInput = {
    fundedMoney: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    user: UserCreateNestedOneWithoutJoinedUsersInput
  }

  export type JoinedUserUncheckedCreateWithoutFundingInput = {
    id?: number
    UserId: number
    fundedMoney: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type JoinedUserCreateOrConnectWithoutFundingInput = {
    where: JoinedUserWhereUniqueInput
    create: XOR<JoinedUserCreateWithoutFundingInput, JoinedUserUncheckedCreateWithoutFundingInput>
  }

  export type JoinedUserCreateManyFundingInputEnvelope = {
    data: JoinedUserCreateManyFundingInput | JoinedUserCreateManyFundingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFundingsInput = {
    update: XOR<UserUpdateWithoutFundingsInput, UserUncheckedUpdateWithoutFundingsInput>
    create: XOR<UserCreateWithoutFundingsInput, UserUncheckedCreateWithoutFundingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFundingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFundingsInput, UserUncheckedUpdateWithoutFundingsInput>
  }

  export type UserUpdateWithoutFundingsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    magazines?: MegazineUpdateManyWithoutUserNestedInput
    joinedUsers?: JoinedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFundingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    magazines?: MegazineUncheckedUpdateManyWithoutUserNestedInput
    joinedUsers?: JoinedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PhotoUpsertWithWhereUniqueWithoutFundingInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutFundingInput, PhotoUncheckedUpdateWithoutFundingInput>
    create: XOR<PhotoCreateWithoutFundingInput, PhotoUncheckedCreateWithoutFundingInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutFundingInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutFundingInput, PhotoUncheckedUpdateWithoutFundingInput>
  }

  export type PhotoUpdateManyWithWhereWithoutFundingInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutFundingInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: IntFilter<"Photo"> | number
    FundingId?: IntFilter<"Photo"> | number
    url?: StringFilter<"Photo"> | string
  }

  export type JoinedUserUpsertWithWhereUniqueWithoutFundingInput = {
    where: JoinedUserWhereUniqueInput
    update: XOR<JoinedUserUpdateWithoutFundingInput, JoinedUserUncheckedUpdateWithoutFundingInput>
    create: XOR<JoinedUserCreateWithoutFundingInput, JoinedUserUncheckedCreateWithoutFundingInput>
  }

  export type JoinedUserUpdateWithWhereUniqueWithoutFundingInput = {
    where: JoinedUserWhereUniqueInput
    data: XOR<JoinedUserUpdateWithoutFundingInput, JoinedUserUncheckedUpdateWithoutFundingInput>
  }

  export type JoinedUserUpdateManyWithWhereWithoutFundingInput = {
    where: JoinedUserScalarWhereInput
    data: XOR<JoinedUserUpdateManyMutationInput, JoinedUserUncheckedUpdateManyWithoutFundingInput>
  }

  export type FundingCreateWithoutPhotosInput = {
    title: string
    description?: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date | string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    region: $Enums.Region
    user: UserCreateNestedOneWithoutFundingsInput
    joinedUsers?: JoinedUserCreateNestedManyWithoutFundingInput
  }

  export type FundingUncheckedCreateWithoutPhotosInput = {
    id?: number
    title: string
    description?: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date | string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    userId: number
    region: $Enums.Region
    joinedUsers?: JoinedUserUncheckedCreateNestedManyWithoutFundingInput
  }

  export type FundingCreateOrConnectWithoutPhotosInput = {
    where: FundingWhereUniqueInput
    create: XOR<FundingCreateWithoutPhotosInput, FundingUncheckedCreateWithoutPhotosInput>
  }

  export type FundingUpsertWithoutPhotosInput = {
    update: XOR<FundingUpdateWithoutPhotosInput, FundingUncheckedUpdateWithoutPhotosInput>
    create: XOR<FundingCreateWithoutPhotosInput, FundingUncheckedCreateWithoutPhotosInput>
    where?: FundingWhereInput
  }

  export type FundingUpdateToOneWithWhereWithoutPhotosInput = {
    where?: FundingWhereInput
    data: XOR<FundingUpdateWithoutPhotosInput, FundingUncheckedUpdateWithoutPhotosInput>
  }

  export type FundingUpdateWithoutPhotosInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    user?: UserUpdateOneRequiredWithoutFundingsNestedInput
    joinedUsers?: JoinedUserUpdateManyWithoutFundingNestedInput
  }

  export type FundingUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    joinedUsers?: JoinedUserUncheckedUpdateManyWithoutFundingNestedInput
  }

  export type FundingCreateWithoutJoinedUsersInput = {
    title: string
    description?: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date | string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    region: $Enums.Region
    user: UserCreateNestedOneWithoutFundingsInput
    photos?: PhotoCreateNestedManyWithoutFundingInput
  }

  export type FundingUncheckedCreateWithoutJoinedUsersInput = {
    id?: number
    title: string
    description?: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date | string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    userId: number
    region: $Enums.Region
    photos?: PhotoUncheckedCreateNestedManyWithoutFundingInput
  }

  export type FundingCreateOrConnectWithoutJoinedUsersInput = {
    where: FundingWhereUniqueInput
    create: XOR<FundingCreateWithoutJoinedUsersInput, FundingUncheckedCreateWithoutJoinedUsersInput>
  }

  export type UserCreateWithoutJoinedUsersInput = {
    userId: string
    name: string
    email: string
    password: string
    status: string
    inactiveDate?: Date | string | null
    CreatedAt: Date | string
    region: $Enums.Region
    magazines?: MegazineCreateNestedManyWithoutUserInput
    fundings?: FundingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJoinedUsersInput = {
    id?: number
    userId: string
    name: string
    email: string
    password: string
    status: string
    inactiveDate?: Date | string | null
    CreatedAt: Date | string
    region: $Enums.Region
    magazines?: MegazineUncheckedCreateNestedManyWithoutUserInput
    fundings?: FundingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJoinedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinedUsersInput, UserUncheckedCreateWithoutJoinedUsersInput>
  }

  export type FundingUpsertWithoutJoinedUsersInput = {
    update: XOR<FundingUpdateWithoutJoinedUsersInput, FundingUncheckedUpdateWithoutJoinedUsersInput>
    create: XOR<FundingCreateWithoutJoinedUsersInput, FundingUncheckedCreateWithoutJoinedUsersInput>
    where?: FundingWhereInput
  }

  export type FundingUpdateToOneWithWhereWithoutJoinedUsersInput = {
    where?: FundingWhereInput
    data: XOR<FundingUpdateWithoutJoinedUsersInput, FundingUncheckedUpdateWithoutJoinedUsersInput>
  }

  export type FundingUpdateWithoutJoinedUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    user?: UserUpdateOneRequiredWithoutFundingsNestedInput
    photos?: PhotoUpdateManyWithoutFundingNestedInput
  }

  export type FundingUncheckedUpdateWithoutJoinedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    photos?: PhotoUncheckedUpdateManyWithoutFundingNestedInput
  }

  export type UserUpsertWithoutJoinedUsersInput = {
    update: XOR<UserUpdateWithoutJoinedUsersInput, UserUncheckedUpdateWithoutJoinedUsersInput>
    create: XOR<UserCreateWithoutJoinedUsersInput, UserUncheckedCreateWithoutJoinedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJoinedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJoinedUsersInput, UserUncheckedUpdateWithoutJoinedUsersInput>
  }

  export type UserUpdateWithoutJoinedUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    magazines?: MegazineUpdateManyWithoutUserNestedInput
    fundings?: FundingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    magazines?: MegazineUncheckedUpdateManyWithoutUserNestedInput
    fundings?: FundingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MegazineCreateManyUserInput = {
    id?: number
    title: string
    body: string
    CreatedAt: Date | string
  }

  export type JoinedUserCreateManyUserInput = {
    id?: number
    FundingsId: number
    fundedMoney: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type FundingCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    goalMoney: number
    fundedMoney: number
    deadlineDate: Date | string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    region: $Enums.Region
  }

  export type MegazineUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MegazineUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MegazineUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinedUserUpdateWithoutUserInput = {
    fundedMoney?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funding?: FundingUpdateOneRequiredWithoutJoinedUsersNestedInput
  }

  export type JoinedUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    FundingsId?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinedUserUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    FundingsId?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    photos?: PhotoUpdateManyWithoutFundingNestedInput
    joinedUsers?: JoinedUserUpdateManyWithoutFundingNestedInput
  }

  export type FundingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    photos?: PhotoUncheckedUpdateManyWithoutFundingNestedInput
    joinedUsers?: JoinedUserUncheckedUpdateManyWithoutFundingNestedInput
  }

  export type FundingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalMoney?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    deadlineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
  }

  export type PhotoCreateManyFundingInput = {
    id?: number
    url: string
  }

  export type JoinedUserCreateManyFundingInput = {
    id?: number
    UserId: number
    fundedMoney: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type PhotoUpdateWithoutFundingInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateWithoutFundingInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyWithoutFundingInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type JoinedUserUpdateWithoutFundingInput = {
    fundedMoney?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinedUsersNestedInput
  }

  export type JoinedUserUncheckedUpdateWithoutFundingInput = {
    id?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinedUserUncheckedUpdateManyWithoutFundingInput = {
    id?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    fundedMoney?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}