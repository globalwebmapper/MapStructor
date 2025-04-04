
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
 * Model hoverItem
 * 
 */
export type hoverItem = $Result.DefaultSelection<Prisma.$hoverItemPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MapGroup
 * 
 */
export type MapGroup = $Result.DefaultSelection<Prisma.$MapGroupPayload>
/**
 * Model Map
 * 
 */
export type Map = $Result.DefaultSelection<Prisma.$MapPayload>
/**
 * Model ZoomLabel
 * 
 */
export type ZoomLabel = $Result.DefaultSelection<Prisma.$ZoomLabelPayload>
/**
 * Model ButtonLink
 * 
 */
export type ButtonLink = $Result.DefaultSelection<Prisma.$ButtonLinkPayload>
/**
 * Model LayerSection
 * 
 */
export type LayerSection = $Result.DefaultSelection<Prisma.$LayerSectionPayload>
/**
 * Model LayerGroup
 * 
 */
export type LayerGroup = $Result.DefaultSelection<Prisma.$LayerGroupPayload>
/**
 * Model LayerData
 * 
 */
export type LayerData = $Result.DefaultSelection<Prisma.$LayerDataPayload>
/**
 * Model ViewOrderCounter
 * 
 */
export type ViewOrderCounter = $Result.DefaultSelection<Prisma.$ViewOrderCounterPayload>

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.mapGroup`: Exposes CRUD operations for the **MapGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapGroups
    * const mapGroups = await prisma.mapGroup.findMany()
    * ```
    */
  get mapGroup(): Prisma.MapGroupDelegate<ExtArgs>;

  /**
   * `prisma.map`: Exposes CRUD operations for the **Map** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maps
    * const maps = await prisma.map.findMany()
    * ```
    */
  get map(): Prisma.MapDelegate<ExtArgs>;

  /**
   * `prisma.zoomLabel`: Exposes CRUD operations for the **ZoomLabel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZoomLabels
    * const zoomLabels = await prisma.zoomLabel.findMany()
    * ```
    */
  get zoomLabel(): Prisma.ZoomLabelDelegate<ExtArgs>;

  /**
   * `prisma.buttonLink`: Exposes CRUD operations for the **ButtonLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ButtonLinks
    * const buttonLinks = await prisma.buttonLink.findMany()
    * ```
    */
  get buttonLink(): Prisma.ButtonLinkDelegate<ExtArgs>;

  /**
   * `prisma.layerSection`: Exposes CRUD operations for the **LayerSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LayerSections
    * const layerSections = await prisma.layerSection.findMany()
    * ```
    */
  get layerSection(): Prisma.LayerSectionDelegate<ExtArgs>;

  /**
   * `prisma.layerGroup`: Exposes CRUD operations for the **LayerGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LayerGroups
    * const layerGroups = await prisma.layerGroup.findMany()
    * ```
    */
  get layerGroup(): Prisma.LayerGroupDelegate<ExtArgs>;

  /**
   * `prisma.layerData`: Exposes CRUD operations for the **LayerData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LayerData
    * const layerData = await prisma.layerData.findMany()
    * ```
    */
  get layerData(): Prisma.LayerDataDelegate<ExtArgs>;

  /**
   * `prisma.viewOrderCounter`: Exposes CRUD operations for the **ViewOrderCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewOrderCounters
    * const viewOrderCounters = await prisma.viewOrderCounter.findMany()
    * ```
    */
  get viewOrderCounter(): Prisma.ViewOrderCounterDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    MapGroup: 'MapGroup',
    Map: 'Map',
    ZoomLabel: 'ZoomLabel',
    ButtonLink: 'ButtonLink',
    LayerSection: 'LayerSection',
    LayerGroup: 'LayerGroup',
    LayerData: 'LayerData',
    ViewOrderCounter: 'ViewOrderCounter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "mapGroup" | "map" | "zoomLabel" | "buttonLink" | "layerSection" | "layerGroup" | "layerData" | "viewOrderCounter"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MapGroup: {
        payload: Prisma.$MapGroupPayload<ExtArgs>
        fields: Prisma.MapGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapGroupPayload>
          }
          findFirst: {
            args: Prisma.MapGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapGroupPayload>
          }
          findMany: {
            args: Prisma.MapGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapGroupPayload>[]
          }
          create: {
            args: Prisma.MapGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapGroupPayload>
          }
          createMany: {
            args: Prisma.MapGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MapGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapGroupPayload>
          }
          update: {
            args: Prisma.MapGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapGroupPayload>
          }
          deleteMany: {
            args: Prisma.MapGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MapGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapGroupPayload>
          }
          aggregate: {
            args: Prisma.MapGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapGroup>
          }
          groupBy: {
            args: Prisma.MapGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapGroupGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MapGroupFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MapGroupAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MapGroupCountArgs<ExtArgs>
            result: $Utils.Optional<MapGroupCountAggregateOutputType> | number
          }
        }
      }
      Map: {
        payload: Prisma.$MapPayload<ExtArgs>
        fields: Prisma.MapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findFirst: {
            args: Prisma.MapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findMany: {
            args: Prisma.MapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          create: {
            args: Prisma.MapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          createMany: {
            args: Prisma.MapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          update: {
            args: Prisma.MapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          deleteMany: {
            args: Prisma.MapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          aggregate: {
            args: Prisma.MapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMap>
          }
          groupBy: {
            args: Prisma.MapGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MapFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MapAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MapCountArgs<ExtArgs>
            result: $Utils.Optional<MapCountAggregateOutputType> | number
          }
        }
      }
      ZoomLabel: {
        payload: Prisma.$ZoomLabelPayload<ExtArgs>
        fields: Prisma.ZoomLabelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoomLabelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomLabelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoomLabelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomLabelPayload>
          }
          findFirst: {
            args: Prisma.ZoomLabelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomLabelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoomLabelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomLabelPayload>
          }
          findMany: {
            args: Prisma.ZoomLabelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomLabelPayload>[]
          }
          create: {
            args: Prisma.ZoomLabelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomLabelPayload>
          }
          createMany: {
            args: Prisma.ZoomLabelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ZoomLabelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomLabelPayload>
          }
          update: {
            args: Prisma.ZoomLabelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomLabelPayload>
          }
          deleteMany: {
            args: Prisma.ZoomLabelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZoomLabelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ZoomLabelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomLabelPayload>
          }
          aggregate: {
            args: Prisma.ZoomLabelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZoomLabel>
          }
          groupBy: {
            args: Prisma.ZoomLabelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoomLabelGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ZoomLabelFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ZoomLabelAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ZoomLabelCountArgs<ExtArgs>
            result: $Utils.Optional<ZoomLabelCountAggregateOutputType> | number
          }
        }
      }
      ButtonLink: {
        payload: Prisma.$ButtonLinkPayload<ExtArgs>
        fields: Prisma.ButtonLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ButtonLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ButtonLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonLinkPayload>
          }
          findFirst: {
            args: Prisma.ButtonLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ButtonLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonLinkPayload>
          }
          findMany: {
            args: Prisma.ButtonLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonLinkPayload>[]
          }
          create: {
            args: Prisma.ButtonLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonLinkPayload>
          }
          createMany: {
            args: Prisma.ButtonLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ButtonLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonLinkPayload>
          }
          update: {
            args: Prisma.ButtonLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonLinkPayload>
          }
          deleteMany: {
            args: Prisma.ButtonLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ButtonLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ButtonLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonLinkPayload>
          }
          aggregate: {
            args: Prisma.ButtonLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateButtonLink>
          }
          groupBy: {
            args: Prisma.ButtonLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ButtonLinkGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ButtonLinkFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ButtonLinkAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ButtonLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ButtonLinkCountAggregateOutputType> | number
          }
        }
      }
      LayerSection: {
        payload: Prisma.$LayerSectionPayload<ExtArgs>
        fields: Prisma.LayerSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayerSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayerSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerSectionPayload>
          }
          findFirst: {
            args: Prisma.LayerSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayerSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerSectionPayload>
          }
          findMany: {
            args: Prisma.LayerSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerSectionPayload>[]
          }
          create: {
            args: Prisma.LayerSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerSectionPayload>
          }
          createMany: {
            args: Prisma.LayerSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LayerSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerSectionPayload>
          }
          update: {
            args: Prisma.LayerSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerSectionPayload>
          }
          deleteMany: {
            args: Prisma.LayerSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayerSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LayerSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerSectionPayload>
          }
          aggregate: {
            args: Prisma.LayerSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayerSection>
          }
          groupBy: {
            args: Prisma.LayerSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayerSectionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LayerSectionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LayerSectionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LayerSectionCountArgs<ExtArgs>
            result: $Utils.Optional<LayerSectionCountAggregateOutputType> | number
          }
        }
      }
      LayerGroup: {
        payload: Prisma.$LayerGroupPayload<ExtArgs>
        fields: Prisma.LayerGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayerGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayerGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerGroupPayload>
          }
          findFirst: {
            args: Prisma.LayerGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayerGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerGroupPayload>
          }
          findMany: {
            args: Prisma.LayerGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerGroupPayload>[]
          }
          create: {
            args: Prisma.LayerGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerGroupPayload>
          }
          createMany: {
            args: Prisma.LayerGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LayerGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerGroupPayload>
          }
          update: {
            args: Prisma.LayerGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerGroupPayload>
          }
          deleteMany: {
            args: Prisma.LayerGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayerGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LayerGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerGroupPayload>
          }
          aggregate: {
            args: Prisma.LayerGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayerGroup>
          }
          groupBy: {
            args: Prisma.LayerGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayerGroupGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LayerGroupFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LayerGroupAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LayerGroupCountArgs<ExtArgs>
            result: $Utils.Optional<LayerGroupCountAggregateOutputType> | number
          }
        }
      }
      LayerData: {
        payload: Prisma.$LayerDataPayload<ExtArgs>
        fields: Prisma.LayerDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayerDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayerDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerDataPayload>
          }
          findFirst: {
            args: Prisma.LayerDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayerDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerDataPayload>
          }
          findMany: {
            args: Prisma.LayerDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerDataPayload>[]
          }
          create: {
            args: Prisma.LayerDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerDataPayload>
          }
          createMany: {
            args: Prisma.LayerDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LayerDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerDataPayload>
          }
          update: {
            args: Prisma.LayerDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerDataPayload>
          }
          deleteMany: {
            args: Prisma.LayerDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayerDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LayerDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerDataPayload>
          }
          aggregate: {
            args: Prisma.LayerDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayerData>
          }
          groupBy: {
            args: Prisma.LayerDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayerDataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LayerDataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LayerDataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LayerDataCountArgs<ExtArgs>
            result: $Utils.Optional<LayerDataCountAggregateOutputType> | number
          }
        }
      }
      ViewOrderCounter: {
        payload: Prisma.$ViewOrderCounterPayload<ExtArgs>
        fields: Prisma.ViewOrderCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewOrderCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewOrderCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewOrderCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewOrderCounterPayload>
          }
          findFirst: {
            args: Prisma.ViewOrderCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewOrderCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewOrderCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewOrderCounterPayload>
          }
          findMany: {
            args: Prisma.ViewOrderCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewOrderCounterPayload>[]
          }
          create: {
            args: Prisma.ViewOrderCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewOrderCounterPayload>
          }
          createMany: {
            args: Prisma.ViewOrderCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ViewOrderCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewOrderCounterPayload>
          }
          update: {
            args: Prisma.ViewOrderCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewOrderCounterPayload>
          }
          deleteMany: {
            args: Prisma.ViewOrderCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewOrderCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ViewOrderCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewOrderCounterPayload>
          }
          aggregate: {
            args: Prisma.ViewOrderCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewOrderCounter>
          }
          groupBy: {
            args: Prisma.ViewOrderCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewOrderCounterGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ViewOrderCounterFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ViewOrderCounterAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ViewOrderCounterCountArgs<ExtArgs>
            result: $Utils.Optional<ViewOrderCounterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
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
   * Count Type MapGroupCountOutputType
   */

  export type MapGroupCountOutputType = {
    maps: number
  }

  export type MapGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maps?: boolean | MapGroupCountOutputTypeCountMapsArgs
  }

  // Custom InputTypes
  /**
   * MapGroupCountOutputType without action
   */
  export type MapGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroupCountOutputType
     */
    select?: MapGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MapGroupCountOutputType without action
   */
  export type MapGroupCountOutputTypeCountMapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapWhereInput
  }


  /**
   * Count Type ZoomLabelCountOutputType
   */

  export type ZoomLabelCountOutputType = {
    Map: number
  }

  export type ZoomLabelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Map?: boolean | ZoomLabelCountOutputTypeCountMapArgs
  }

  // Custom InputTypes
  /**
   * ZoomLabelCountOutputType without action
   */
  export type ZoomLabelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabelCountOutputType
     */
    select?: ZoomLabelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZoomLabelCountOutputType without action
   */
  export type ZoomLabelCountOutputTypeCountMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapWhereInput
  }


  /**
   * Count Type LayerSectionCountOutputType
   */

  export type LayerSectionCountOutputType = {
    layerGroups: number
  }

  export type LayerSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layerGroups?: boolean | LayerSectionCountOutputTypeCountLayerGroupsArgs
  }

  // Custom InputTypes
  /**
   * LayerSectionCountOutputType without action
   */
  export type LayerSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSectionCountOutputType
     */
    select?: LayerSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LayerSectionCountOutputType without action
   */
  export type LayerSectionCountOutputTypeCountLayerGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerGroupWhereInput
  }


  /**
   * Count Type LayerGroupCountOutputType
   */

  export type LayerGroupCountOutputType = {
    layers: number
  }

  export type LayerGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layers?: boolean | LayerGroupCountOutputTypeCountLayersArgs
  }

  // Custom InputTypes
  /**
   * LayerGroupCountOutputType without action
   */
  export type LayerGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroupCountOutputType
     */
    select?: LayerGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LayerGroupCountOutputType without action
   */
  export type LayerGroupCountOutputTypeCountLayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model hoverItem
   */





  export type hoverItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    label?: boolean
    type?: boolean
  }, ExtArgs["result"]["hoverItem"]>


  export type hoverItemSelectScalar = {
    label?: boolean
    type?: boolean
  }


  export type $hoverItemPayload = {
    name: "hoverItem"
    objects: {}
    scalars: {
      label: string
      type: string
    }
    composites: {}
  }

  type hoverItemGetPayload<S extends boolean | null | undefined | hoverItemDefaultArgs> = $Result.GetResult<Prisma.$hoverItemPayload, S>





  /**
   * Fields of the hoverItem model
   */ 
  interface hoverItemFieldRefs {
    readonly label: FieldRef<"hoverItem", 'String'>
    readonly type: FieldRef<"hoverItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hoverItem without action
   */
  export type hoverItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hoverItem
     */
    select?: hoverItemSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model MapGroup
   */

  export type AggregateMapGroup = {
    _count: MapGroupCountAggregateOutputType | null
    _min: MapGroupMinAggregateOutputType | null
    _max: MapGroupMaxAggregateOutputType | null
  }

  export type MapGroupMinAggregateOutputType = {
    id: string | null
    groupName: string | null
    label: string | null
  }

  export type MapGroupMaxAggregateOutputType = {
    id: string | null
    groupName: string | null
    label: string | null
  }

  export type MapGroupCountAggregateOutputType = {
    id: number
    groupName: number
    label: number
    _all: number
  }


  export type MapGroupMinAggregateInputType = {
    id?: true
    groupName?: true
    label?: true
  }

  export type MapGroupMaxAggregateInputType = {
    id?: true
    groupName?: true
    label?: true
  }

  export type MapGroupCountAggregateInputType = {
    id?: true
    groupName?: true
    label?: true
    _all?: true
  }

  export type MapGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapGroup to aggregate.
     */
    where?: MapGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapGroups to fetch.
     */
    orderBy?: MapGroupOrderByWithRelationInput | MapGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapGroups
    **/
    _count?: true | MapGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapGroupMaxAggregateInputType
  }

  export type GetMapGroupAggregateType<T extends MapGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateMapGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapGroup[P]>
      : GetScalarType<T[P], AggregateMapGroup[P]>
  }




  export type MapGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapGroupWhereInput
    orderBy?: MapGroupOrderByWithAggregationInput | MapGroupOrderByWithAggregationInput[]
    by: MapGroupScalarFieldEnum[] | MapGroupScalarFieldEnum
    having?: MapGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapGroupCountAggregateInputType | true
    _min?: MapGroupMinAggregateInputType
    _max?: MapGroupMaxAggregateInputType
  }

  export type MapGroupGroupByOutputType = {
    id: string
    groupName: string
    label: string
    _count: MapGroupCountAggregateOutputType | null
    _min: MapGroupMinAggregateOutputType | null
    _max: MapGroupMaxAggregateOutputType | null
  }

  type GetMapGroupGroupByPayload<T extends MapGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapGroupGroupByOutputType[P]>
            : GetScalarType<T[P], MapGroupGroupByOutputType[P]>
        }
      >
    >


  export type MapGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupName?: boolean
    label?: boolean
    maps?: boolean | MapGroup$mapsArgs<ExtArgs>
    _count?: boolean | MapGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapGroup"]>


  export type MapGroupSelectScalar = {
    id?: boolean
    groupName?: boolean
    label?: boolean
  }

  export type MapGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maps?: boolean | MapGroup$mapsArgs<ExtArgs>
    _count?: boolean | MapGroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MapGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapGroup"
    objects: {
      maps: Prisma.$MapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupName: string
      label: string
    }, ExtArgs["result"]["mapGroup"]>
    composites: {}
  }

  type MapGroupGetPayload<S extends boolean | null | undefined | MapGroupDefaultArgs> = $Result.GetResult<Prisma.$MapGroupPayload, S>

  type MapGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MapGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MapGroupCountAggregateInputType | true
    }

  export interface MapGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapGroup'], meta: { name: 'MapGroup' } }
    /**
     * Find zero or one MapGroup that matches the filter.
     * @param {MapGroupFindUniqueArgs} args - Arguments to find a MapGroup
     * @example
     * // Get one MapGroup
     * const mapGroup = await prisma.mapGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapGroupFindUniqueArgs>(args: SelectSubset<T, MapGroupFindUniqueArgs<ExtArgs>>): Prisma__MapGroupClient<$Result.GetResult<Prisma.$MapGroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MapGroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MapGroupFindUniqueOrThrowArgs} args - Arguments to find a MapGroup
     * @example
     * // Get one MapGroup
     * const mapGroup = await prisma.mapGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, MapGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapGroupClient<$Result.GetResult<Prisma.$MapGroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MapGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupFindFirstArgs} args - Arguments to find a MapGroup
     * @example
     * // Get one MapGroup
     * const mapGroup = await prisma.mapGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapGroupFindFirstArgs>(args?: SelectSubset<T, MapGroupFindFirstArgs<ExtArgs>>): Prisma__MapGroupClient<$Result.GetResult<Prisma.$MapGroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MapGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupFindFirstOrThrowArgs} args - Arguments to find a MapGroup
     * @example
     * // Get one MapGroup
     * const mapGroup = await prisma.mapGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, MapGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapGroupClient<$Result.GetResult<Prisma.$MapGroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MapGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapGroups
     * const mapGroups = await prisma.mapGroup.findMany()
     * 
     * // Get first 10 MapGroups
     * const mapGroups = await prisma.mapGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapGroupWithIdOnly = await prisma.mapGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapGroupFindManyArgs>(args?: SelectSubset<T, MapGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapGroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MapGroup.
     * @param {MapGroupCreateArgs} args - Arguments to create a MapGroup.
     * @example
     * // Create one MapGroup
     * const MapGroup = await prisma.mapGroup.create({
     *   data: {
     *     // ... data to create a MapGroup
     *   }
     * })
     * 
     */
    create<T extends MapGroupCreateArgs>(args: SelectSubset<T, MapGroupCreateArgs<ExtArgs>>): Prisma__MapGroupClient<$Result.GetResult<Prisma.$MapGroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MapGroups.
     * @param {MapGroupCreateManyArgs} args - Arguments to create many MapGroups.
     * @example
     * // Create many MapGroups
     * const mapGroup = await prisma.mapGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapGroupCreateManyArgs>(args?: SelectSubset<T, MapGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MapGroup.
     * @param {MapGroupDeleteArgs} args - Arguments to delete one MapGroup.
     * @example
     * // Delete one MapGroup
     * const MapGroup = await prisma.mapGroup.delete({
     *   where: {
     *     // ... filter to delete one MapGroup
     *   }
     * })
     * 
     */
    delete<T extends MapGroupDeleteArgs>(args: SelectSubset<T, MapGroupDeleteArgs<ExtArgs>>): Prisma__MapGroupClient<$Result.GetResult<Prisma.$MapGroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MapGroup.
     * @param {MapGroupUpdateArgs} args - Arguments to update one MapGroup.
     * @example
     * // Update one MapGroup
     * const mapGroup = await prisma.mapGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapGroupUpdateArgs>(args: SelectSubset<T, MapGroupUpdateArgs<ExtArgs>>): Prisma__MapGroupClient<$Result.GetResult<Prisma.$MapGroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MapGroups.
     * @param {MapGroupDeleteManyArgs} args - Arguments to filter MapGroups to delete.
     * @example
     * // Delete a few MapGroups
     * const { count } = await prisma.mapGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapGroupDeleteManyArgs>(args?: SelectSubset<T, MapGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapGroups
     * const mapGroup = await prisma.mapGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapGroupUpdateManyArgs>(args: SelectSubset<T, MapGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MapGroup.
     * @param {MapGroupUpsertArgs} args - Arguments to update or create a MapGroup.
     * @example
     * // Update or create a MapGroup
     * const mapGroup = await prisma.mapGroup.upsert({
     *   create: {
     *     // ... data to create a MapGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapGroup we want to update
     *   }
     * })
     */
    upsert<T extends MapGroupUpsertArgs>(args: SelectSubset<T, MapGroupUpsertArgs<ExtArgs>>): Prisma__MapGroupClient<$Result.GetResult<Prisma.$MapGroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more MapGroups that matches the filter.
     * @param {MapGroupFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mapGroup = await prisma.mapGroup.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: MapGroupFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MapGroup.
     * @param {MapGroupAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mapGroup = await prisma.mapGroup.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MapGroupAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MapGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupCountArgs} args - Arguments to filter MapGroups to count.
     * @example
     * // Count the number of MapGroups
     * const count = await prisma.mapGroup.count({
     *   where: {
     *     // ... the filter for the MapGroups we want to count
     *   }
     * })
    **/
    count<T extends MapGroupCountArgs>(
      args?: Subset<T, MapGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapGroupAggregateArgs>(args: Subset<T, MapGroupAggregateArgs>): Prisma.PrismaPromise<GetMapGroupAggregateType<T>>

    /**
     * Group by MapGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupGroupByArgs} args - Group by arguments.
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
      T extends MapGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapGroupGroupByArgs['orderBy'] }
        : { orderBy?: MapGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapGroup model
   */
  readonly fields: MapGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maps<T extends MapGroup$mapsArgs<ExtArgs> = {}>(args?: Subset<T, MapGroup$mapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the MapGroup model
   */ 
  interface MapGroupFieldRefs {
    readonly id: FieldRef<"MapGroup", 'String'>
    readonly groupName: FieldRef<"MapGroup", 'String'>
    readonly label: FieldRef<"MapGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MapGroup findUnique
   */
  export type MapGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
    /**
     * Filter, which MapGroup to fetch.
     */
    where: MapGroupWhereUniqueInput
  }

  /**
   * MapGroup findUniqueOrThrow
   */
  export type MapGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
    /**
     * Filter, which MapGroup to fetch.
     */
    where: MapGroupWhereUniqueInput
  }

  /**
   * MapGroup findFirst
   */
  export type MapGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
    /**
     * Filter, which MapGroup to fetch.
     */
    where?: MapGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapGroups to fetch.
     */
    orderBy?: MapGroupOrderByWithRelationInput | MapGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapGroups.
     */
    cursor?: MapGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapGroups.
     */
    distinct?: MapGroupScalarFieldEnum | MapGroupScalarFieldEnum[]
  }

  /**
   * MapGroup findFirstOrThrow
   */
  export type MapGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
    /**
     * Filter, which MapGroup to fetch.
     */
    where?: MapGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapGroups to fetch.
     */
    orderBy?: MapGroupOrderByWithRelationInput | MapGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapGroups.
     */
    cursor?: MapGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapGroups.
     */
    distinct?: MapGroupScalarFieldEnum | MapGroupScalarFieldEnum[]
  }

  /**
   * MapGroup findMany
   */
  export type MapGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
    /**
     * Filter, which MapGroups to fetch.
     */
    where?: MapGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapGroups to fetch.
     */
    orderBy?: MapGroupOrderByWithRelationInput | MapGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapGroups.
     */
    cursor?: MapGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapGroups.
     */
    skip?: number
    distinct?: MapGroupScalarFieldEnum | MapGroupScalarFieldEnum[]
  }

  /**
   * MapGroup create
   */
  export type MapGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a MapGroup.
     */
    data: XOR<MapGroupCreateInput, MapGroupUncheckedCreateInput>
  }

  /**
   * MapGroup createMany
   */
  export type MapGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapGroups.
     */
    data: MapGroupCreateManyInput | MapGroupCreateManyInput[]
  }

  /**
   * MapGroup update
   */
  export type MapGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a MapGroup.
     */
    data: XOR<MapGroupUpdateInput, MapGroupUncheckedUpdateInput>
    /**
     * Choose, which MapGroup to update.
     */
    where: MapGroupWhereUniqueInput
  }

  /**
   * MapGroup updateMany
   */
  export type MapGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapGroups.
     */
    data: XOR<MapGroupUpdateManyMutationInput, MapGroupUncheckedUpdateManyInput>
    /**
     * Filter which MapGroups to update
     */
    where?: MapGroupWhereInput
  }

  /**
   * MapGroup upsert
   */
  export type MapGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the MapGroup to update in case it exists.
     */
    where: MapGroupWhereUniqueInput
    /**
     * In case the MapGroup found by the `where` argument doesn't exist, create a new MapGroup with this data.
     */
    create: XOR<MapGroupCreateInput, MapGroupUncheckedCreateInput>
    /**
     * In case the MapGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapGroupUpdateInput, MapGroupUncheckedUpdateInput>
  }

  /**
   * MapGroup delete
   */
  export type MapGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
    /**
     * Filter which MapGroup to delete.
     */
    where: MapGroupWhereUniqueInput
  }

  /**
   * MapGroup deleteMany
   */
  export type MapGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapGroups to delete
     */
    where?: MapGroupWhereInput
  }

  /**
   * MapGroup findRaw
   */
  export type MapGroupFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MapGroup aggregateRaw
   */
  export type MapGroupAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MapGroup.maps
   */
  export type MapGroup$mapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    where?: MapWhereInput
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    cursor?: MapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * MapGroup without action
   */
  export type MapGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
  }


  /**
   * Model Map
   */

  export type AggregateMap = {
    _count: MapCountAggregateOutputType | null
    _avg: MapAvgAggregateOutputType | null
    _sum: MapSumAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  export type MapAvgAggregateOutputType = {
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
  }

  export type MapSumAggregateOutputType = {
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
  }

  export type MapMinAggregateOutputType = {
    id: string | null
    mapId: string | null
    longitude: number | null
    latitude: number | null
    mapName: string | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    styleId: string | null
    groupId: string | null
    zoomLabelId: string | null
    infoId: string | null
  }

  export type MapMaxAggregateOutputType = {
    id: string | null
    mapId: string | null
    longitude: number | null
    latitude: number | null
    mapName: string | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    styleId: string | null
    groupId: string | null
    zoomLabelId: string | null
    infoId: string | null
  }

  export type MapCountAggregateOutputType = {
    id: number
    mapId: number
    longitude: number
    latitude: number
    mapName: number
    zoom: number
    bearing: number
    topLeftBoundLatitude: number
    topLeftBoundLongitude: number
    bottomRightBoundLatitude: number
    bottomRightBoundLongitude: number
    zoomToBounds: number
    styleId: number
    groupId: number
    zoomLabelId: number
    infoId: number
    _all: number
  }


  export type MapAvgAggregateInputType = {
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
  }

  export type MapSumAggregateInputType = {
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
  }

  export type MapMinAggregateInputType = {
    id?: true
    mapId?: true
    longitude?: true
    latitude?: true
    mapName?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    styleId?: true
    groupId?: true
    zoomLabelId?: true
    infoId?: true
  }

  export type MapMaxAggregateInputType = {
    id?: true
    mapId?: true
    longitude?: true
    latitude?: true
    mapName?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    styleId?: true
    groupId?: true
    zoomLabelId?: true
    infoId?: true
  }

  export type MapCountAggregateInputType = {
    id?: true
    mapId?: true
    longitude?: true
    latitude?: true
    mapName?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    styleId?: true
    groupId?: true
    zoomLabelId?: true
    infoId?: true
    _all?: true
  }

  export type MapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Map to aggregate.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maps
    **/
    _count?: true | MapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapMaxAggregateInputType
  }

  export type GetMapAggregateType<T extends MapAggregateArgs> = {
        [P in keyof T & keyof AggregateMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMap[P]>
      : GetScalarType<T[P], AggregateMap[P]>
  }




  export type MapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapWhereInput
    orderBy?: MapOrderByWithAggregationInput | MapOrderByWithAggregationInput[]
    by: MapScalarFieldEnum[] | MapScalarFieldEnum
    having?: MapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapCountAggregateInputType | true
    _avg?: MapAvgAggregateInputType
    _sum?: MapSumAggregateInputType
    _min?: MapMinAggregateInputType
    _max?: MapMaxAggregateInputType
  }

  export type MapGroupByOutputType = {
    id: string
    mapId: string
    longitude: number | null
    latitude: number | null
    mapName: string
    zoom: number
    bearing: number
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    styleId: string
    groupId: string
    zoomLabelId: string | null
    infoId: string | null
    _count: MapCountAggregateOutputType | null
    _avg: MapAvgAggregateOutputType | null
    _sum: MapSumAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  type GetMapGroupByPayload<T extends MapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapGroupByOutputType[P]>
            : GetScalarType<T[P], MapGroupByOutputType[P]>
        }
      >
    >


  export type MapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mapId?: boolean
    longitude?: boolean
    latitude?: boolean
    mapName?: boolean
    zoom?: boolean
    bearing?: boolean
    topLeftBoundLatitude?: boolean
    topLeftBoundLongitude?: boolean
    bottomRightBoundLatitude?: boolean
    bottomRightBoundLongitude?: boolean
    zoomToBounds?: boolean
    styleId?: boolean
    groupId?: boolean
    zoomLabelId?: boolean
    infoId?: boolean
    zoomLabel?: boolean | Map$zoomLabelArgs<ExtArgs>
    MapGroup?: boolean | Map$MapGroupArgs<ExtArgs>
  }, ExtArgs["result"]["map"]>


  export type MapSelectScalar = {
    id?: boolean
    mapId?: boolean
    longitude?: boolean
    latitude?: boolean
    mapName?: boolean
    zoom?: boolean
    bearing?: boolean
    topLeftBoundLatitude?: boolean
    topLeftBoundLongitude?: boolean
    bottomRightBoundLatitude?: boolean
    bottomRightBoundLongitude?: boolean
    zoomToBounds?: boolean
    styleId?: boolean
    groupId?: boolean
    zoomLabelId?: boolean
    infoId?: boolean
  }

  export type MapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zoomLabel?: boolean | Map$zoomLabelArgs<ExtArgs>
    MapGroup?: boolean | Map$MapGroupArgs<ExtArgs>
  }

  export type $MapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Map"
    objects: {
      zoomLabel: Prisma.$ZoomLabelPayload<ExtArgs> | null
      MapGroup: Prisma.$MapGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mapId: string
      longitude: number | null
      latitude: number | null
      mapName: string
      zoom: number
      bearing: number
      topLeftBoundLatitude: number | null
      topLeftBoundLongitude: number | null
      bottomRightBoundLatitude: number | null
      bottomRightBoundLongitude: number | null
      zoomToBounds: boolean | null
      styleId: string
      groupId: string
      zoomLabelId: string | null
      infoId: string | null
    }, ExtArgs["result"]["map"]>
    composites: {}
  }

  type MapGetPayload<S extends boolean | null | undefined | MapDefaultArgs> = $Result.GetResult<Prisma.$MapPayload, S>

  type MapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MapFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MapCountAggregateInputType | true
    }

  export interface MapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Map'], meta: { name: 'Map' } }
    /**
     * Find zero or one Map that matches the filter.
     * @param {MapFindUniqueArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapFindUniqueArgs>(args: SelectSubset<T, MapFindUniqueArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Map that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MapFindUniqueOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapFindUniqueOrThrowArgs>(args: SelectSubset<T, MapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Map that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapFindFirstArgs>(args?: SelectSubset<T, MapFindFirstArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Map that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapFindFirstOrThrowArgs>(args?: SelectSubset<T, MapFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maps
     * const maps = await prisma.map.findMany()
     * 
     * // Get first 10 Maps
     * const maps = await prisma.map.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapWithIdOnly = await prisma.map.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapFindManyArgs>(args?: SelectSubset<T, MapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Map.
     * @param {MapCreateArgs} args - Arguments to create a Map.
     * @example
     * // Create one Map
     * const Map = await prisma.map.create({
     *   data: {
     *     // ... data to create a Map
     *   }
     * })
     * 
     */
    create<T extends MapCreateArgs>(args: SelectSubset<T, MapCreateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Maps.
     * @param {MapCreateManyArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapCreateManyArgs>(args?: SelectSubset<T, MapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Map.
     * @param {MapDeleteArgs} args - Arguments to delete one Map.
     * @example
     * // Delete one Map
     * const Map = await prisma.map.delete({
     *   where: {
     *     // ... filter to delete one Map
     *   }
     * })
     * 
     */
    delete<T extends MapDeleteArgs>(args: SelectSubset<T, MapDeleteArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Map.
     * @param {MapUpdateArgs} args - Arguments to update one Map.
     * @example
     * // Update one Map
     * const map = await prisma.map.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapUpdateArgs>(args: SelectSubset<T, MapUpdateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Maps.
     * @param {MapDeleteManyArgs} args - Arguments to filter Maps to delete.
     * @example
     * // Delete a few Maps
     * const { count } = await prisma.map.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapDeleteManyArgs>(args?: SelectSubset<T, MapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapUpdateManyArgs>(args: SelectSubset<T, MapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Map.
     * @param {MapUpsertArgs} args - Arguments to update or create a Map.
     * @example
     * // Update or create a Map
     * const map = await prisma.map.upsert({
     *   create: {
     *     // ... data to create a Map
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Map we want to update
     *   }
     * })
     */
    upsert<T extends MapUpsertArgs>(args: SelectSubset<T, MapUpsertArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Maps that matches the filter.
     * @param {MapFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const map = await prisma.map.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: MapFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Map.
     * @param {MapAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const map = await prisma.map.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MapAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapCountArgs} args - Arguments to filter Maps to count.
     * @example
     * // Count the number of Maps
     * const count = await prisma.map.count({
     *   where: {
     *     // ... the filter for the Maps we want to count
     *   }
     * })
    **/
    count<T extends MapCountArgs>(
      args?: Subset<T, MapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapAggregateArgs>(args: Subset<T, MapAggregateArgs>): Prisma.PrismaPromise<GetMapAggregateType<T>>

    /**
     * Group by Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupByArgs} args - Group by arguments.
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
      T extends MapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapGroupByArgs['orderBy'] }
        : { orderBy?: MapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Map model
   */
  readonly fields: MapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Map.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zoomLabel<T extends Map$zoomLabelArgs<ExtArgs> = {}>(args?: Subset<T, Map$zoomLabelArgs<ExtArgs>>): Prisma__ZoomLabelClient<$Result.GetResult<Prisma.$ZoomLabelPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    MapGroup<T extends Map$MapGroupArgs<ExtArgs> = {}>(args?: Subset<T, Map$MapGroupArgs<ExtArgs>>): Prisma__MapGroupClient<$Result.GetResult<Prisma.$MapGroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Map model
   */ 
  interface MapFieldRefs {
    readonly id: FieldRef<"Map", 'String'>
    readonly mapId: FieldRef<"Map", 'String'>
    readonly longitude: FieldRef<"Map", 'Float'>
    readonly latitude: FieldRef<"Map", 'Float'>
    readonly mapName: FieldRef<"Map", 'String'>
    readonly zoom: FieldRef<"Map", 'Float'>
    readonly bearing: FieldRef<"Map", 'Float'>
    readonly topLeftBoundLatitude: FieldRef<"Map", 'Float'>
    readonly topLeftBoundLongitude: FieldRef<"Map", 'Float'>
    readonly bottomRightBoundLatitude: FieldRef<"Map", 'Float'>
    readonly bottomRightBoundLongitude: FieldRef<"Map", 'Float'>
    readonly zoomToBounds: FieldRef<"Map", 'Boolean'>
    readonly styleId: FieldRef<"Map", 'String'>
    readonly groupId: FieldRef<"Map", 'String'>
    readonly zoomLabelId: FieldRef<"Map", 'String'>
    readonly infoId: FieldRef<"Map", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Map findUnique
   */
  export type MapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findUniqueOrThrow
   */
  export type MapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findFirst
   */
  export type MapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findFirstOrThrow
   */
  export type MapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findMany
   */
  export type MapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Maps to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map create
   */
  export type MapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The data needed to create a Map.
     */
    data: XOR<MapCreateInput, MapUncheckedCreateInput>
  }

  /**
   * Map createMany
   */
  export type MapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[]
  }

  /**
   * Map update
   */
  export type MapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The data needed to update a Map.
     */
    data: XOR<MapUpdateInput, MapUncheckedUpdateInput>
    /**
     * Choose, which Map to update.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map updateMany
   */
  export type MapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput
  }

  /**
   * Map upsert
   */
  export type MapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The filter to search for the Map to update in case it exists.
     */
    where: MapWhereUniqueInput
    /**
     * In case the Map found by the `where` argument doesn't exist, create a new Map with this data.
     */
    create: XOR<MapCreateInput, MapUncheckedCreateInput>
    /**
     * In case the Map was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapUpdateInput, MapUncheckedUpdateInput>
  }

  /**
   * Map delete
   */
  export type MapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter which Map to delete.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map deleteMany
   */
  export type MapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maps to delete
     */
    where?: MapWhereInput
  }

  /**
   * Map findRaw
   */
  export type MapFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Map aggregateRaw
   */
  export type MapAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Map.zoomLabel
   */
  export type Map$zoomLabelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
    where?: ZoomLabelWhereInput
  }

  /**
   * Map.MapGroup
   */
  export type Map$MapGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapGroup
     */
    select?: MapGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapGroupInclude<ExtArgs> | null
    where?: MapGroupWhereInput
  }

  /**
   * Map without action
   */
  export type MapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
  }


  /**
   * Model ZoomLabel
   */

  export type AggregateZoomLabel = {
    _count: ZoomLabelCountAggregateOutputType | null
    _avg: ZoomLabelAvgAggregateOutputType | null
    _sum: ZoomLabelSumAggregateOutputType | null
    _min: ZoomLabelMinAggregateOutputType | null
    _max: ZoomLabelMaxAggregateOutputType | null
  }

  export type ZoomLabelAvgAggregateOutputType = {
    minZoom: number | null
    zoom: number | null
    bearing: number | null
    centerLatitude: number | null
    centerLongitude: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    textSizeDefault: number | null
    textSizeStopsZoom1: number | null
    textSizeStopsVal1: number | null
    textSizeStopsZoom2: number | null
    textSizeStopsVal2: number | null
    textColorStopsZoom1: number | null
    textColorStopsZoom2: number | null
    textHaloWidthDefault: number | null
    textHaloWidthStopsZoom1: number | null
    textHaloWidthStopsVal1: number | null
    textHaloWidthStopsZoom2: number | null
    textHaloWidthStopsVal2: number | null
    textHaloBlurDefault: number | null
    textHaloBlurStopsZoom1: number | null
    textHaloBlurStopsVal1: number | null
    textHaloBlurStopsZoom2: number | null
    textHaloBlurStopsVal2: number | null
    textHaloColorStopsZoom1: number | null
    textHaloColorStopsZoom2: number | null
    textOpacityDefault: number | null
    textOpacityStopsZoom1: number | null
    textOpacityStopsVal1: number | null
    textOpacityStopsZoom2: number | null
    textOpacityStopsVal2: number | null
  }

  export type ZoomLabelSumAggregateOutputType = {
    minZoom: number | null
    zoom: number | null
    bearing: number | null
    centerLatitude: number | null
    centerLongitude: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    textSizeDefault: number | null
    textSizeStopsZoom1: number | null
    textSizeStopsVal1: number | null
    textSizeStopsZoom2: number | null
    textSizeStopsVal2: number | null
    textColorStopsZoom1: number | null
    textColorStopsZoom2: number | null
    textHaloWidthDefault: number | null
    textHaloWidthStopsZoom1: number | null
    textHaloWidthStopsVal1: number | null
    textHaloWidthStopsZoom2: number | null
    textHaloWidthStopsVal2: number | null
    textHaloBlurDefault: number | null
    textHaloBlurStopsZoom1: number | null
    textHaloBlurStopsVal1: number | null
    textHaloBlurStopsZoom2: number | null
    textHaloBlurStopsVal2: number | null
    textHaloColorStopsZoom1: number | null
    textHaloColorStopsZoom2: number | null
    textOpacityDefault: number | null
    textOpacityStopsZoom1: number | null
    textOpacityStopsVal1: number | null
    textOpacityStopsZoom2: number | null
    textOpacityStopsVal2: number | null
  }

  export type ZoomLabelMinAggregateOutputType = {
    id: string | null
    title: string | null
    minZoom: number | null
    zoom: number | null
    bearing: number | null
    centerLatitude: number | null
    centerLongitude: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    useTextSizeZoomStyling: boolean | null
    textSizeDefault: number | null
    textSizeStopsZoom1: number | null
    textSizeStopsVal1: number | null
    textSizeStopsZoom2: number | null
    textSizeStopsVal2: number | null
    useTextColorZoomStyling: boolean | null
    textColorDefault: string | null
    textColorStopsZoom1: number | null
    textColorStopsVal1: string | null
    textColorStopsZoom2: number | null
    textColorStopsVal2: string | null
    useTextHaloWidthZoomStyling: boolean | null
    textHaloWidthDefault: number | null
    textHaloWidthStopsZoom1: number | null
    textHaloWidthStopsVal1: number | null
    textHaloWidthStopsZoom2: number | null
    textHaloWidthStopsVal2: number | null
    useTextHaloBlurZoomStyling: boolean | null
    textHaloBlurDefault: number | null
    textHaloBlurStopsZoom1: number | null
    textHaloBlurStopsVal1: number | null
    textHaloBlurStopsZoom2: number | null
    textHaloBlurStopsVal2: number | null
    useTextHaloColorZoomStyling: boolean | null
    textHaloColorDefault: string | null
    textHaloColorStopsZoom1: number | null
    textHaloColorStopsVal1: string | null
    textHaloColorStopsZoom2: number | null
    textHaloColorStopsVal2: string | null
    useTextOpacityZoomStyling: boolean | null
    textOpacityDefault: number | null
    textOpacityStopsZoom1: number | null
    textOpacityStopsVal1: number | null
    textOpacityStopsZoom2: number | null
    textOpacityStopsVal2: number | null
  }

  export type ZoomLabelMaxAggregateOutputType = {
    id: string | null
    title: string | null
    minZoom: number | null
    zoom: number | null
    bearing: number | null
    centerLatitude: number | null
    centerLongitude: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    useTextSizeZoomStyling: boolean | null
    textSizeDefault: number | null
    textSizeStopsZoom1: number | null
    textSizeStopsVal1: number | null
    textSizeStopsZoom2: number | null
    textSizeStopsVal2: number | null
    useTextColorZoomStyling: boolean | null
    textColorDefault: string | null
    textColorStopsZoom1: number | null
    textColorStopsVal1: string | null
    textColorStopsZoom2: number | null
    textColorStopsVal2: string | null
    useTextHaloWidthZoomStyling: boolean | null
    textHaloWidthDefault: number | null
    textHaloWidthStopsZoom1: number | null
    textHaloWidthStopsVal1: number | null
    textHaloWidthStopsZoom2: number | null
    textHaloWidthStopsVal2: number | null
    useTextHaloBlurZoomStyling: boolean | null
    textHaloBlurDefault: number | null
    textHaloBlurStopsZoom1: number | null
    textHaloBlurStopsVal1: number | null
    textHaloBlurStopsZoom2: number | null
    textHaloBlurStopsVal2: number | null
    useTextHaloColorZoomStyling: boolean | null
    textHaloColorDefault: string | null
    textHaloColorStopsZoom1: number | null
    textHaloColorStopsVal1: string | null
    textHaloColorStopsZoom2: number | null
    textHaloColorStopsVal2: string | null
    useTextOpacityZoomStyling: boolean | null
    textOpacityDefault: number | null
    textOpacityStopsZoom1: number | null
    textOpacityStopsVal1: number | null
    textOpacityStopsZoom2: number | null
    textOpacityStopsVal2: number | null
  }

  export type ZoomLabelCountAggregateOutputType = {
    id: number
    title: number
    minZoom: number
    zoom: number
    bearing: number
    centerLatitude: number
    centerLongitude: number
    topLeftBoundLatitude: number
    topLeftBoundLongitude: number
    bottomRightBoundLatitude: number
    bottomRightBoundLongitude: number
    zoomToBounds: number
    useTextSizeZoomStyling: number
    textSizeDefault: number
    textSizeStopsZoom1: number
    textSizeStopsVal1: number
    textSizeStopsZoom2: number
    textSizeStopsVal2: number
    useTextColorZoomStyling: number
    textColorDefault: number
    textColorStopsZoom1: number
    textColorStopsVal1: number
    textColorStopsZoom2: number
    textColorStopsVal2: number
    useTextHaloWidthZoomStyling: number
    textHaloWidthDefault: number
    textHaloWidthStopsZoom1: number
    textHaloWidthStopsVal1: number
    textHaloWidthStopsZoom2: number
    textHaloWidthStopsVal2: number
    useTextHaloBlurZoomStyling: number
    textHaloBlurDefault: number
    textHaloBlurStopsZoom1: number
    textHaloBlurStopsVal1: number
    textHaloBlurStopsZoom2: number
    textHaloBlurStopsVal2: number
    useTextHaloColorZoomStyling: number
    textHaloColorDefault: number
    textHaloColorStopsZoom1: number
    textHaloColorStopsVal1: number
    textHaloColorStopsZoom2: number
    textHaloColorStopsVal2: number
    useTextOpacityZoomStyling: number
    textOpacityDefault: number
    textOpacityStopsZoom1: number
    textOpacityStopsVal1: number
    textOpacityStopsZoom2: number
    textOpacityStopsVal2: number
    _all: number
  }


  export type ZoomLabelAvgAggregateInputType = {
    minZoom?: true
    zoom?: true
    bearing?: true
    centerLatitude?: true
    centerLongitude?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    textSizeDefault?: true
    textSizeStopsZoom1?: true
    textSizeStopsVal1?: true
    textSizeStopsZoom2?: true
    textSizeStopsVal2?: true
    textColorStopsZoom1?: true
    textColorStopsZoom2?: true
    textHaloWidthDefault?: true
    textHaloWidthStopsZoom1?: true
    textHaloWidthStopsVal1?: true
    textHaloWidthStopsZoom2?: true
    textHaloWidthStopsVal2?: true
    textHaloBlurDefault?: true
    textHaloBlurStopsZoom1?: true
    textHaloBlurStopsVal1?: true
    textHaloBlurStopsZoom2?: true
    textHaloBlurStopsVal2?: true
    textHaloColorStopsZoom1?: true
    textHaloColorStopsZoom2?: true
    textOpacityDefault?: true
    textOpacityStopsZoom1?: true
    textOpacityStopsVal1?: true
    textOpacityStopsZoom2?: true
    textOpacityStopsVal2?: true
  }

  export type ZoomLabelSumAggregateInputType = {
    minZoom?: true
    zoom?: true
    bearing?: true
    centerLatitude?: true
    centerLongitude?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    textSizeDefault?: true
    textSizeStopsZoom1?: true
    textSizeStopsVal1?: true
    textSizeStopsZoom2?: true
    textSizeStopsVal2?: true
    textColorStopsZoom1?: true
    textColorStopsZoom2?: true
    textHaloWidthDefault?: true
    textHaloWidthStopsZoom1?: true
    textHaloWidthStopsVal1?: true
    textHaloWidthStopsZoom2?: true
    textHaloWidthStopsVal2?: true
    textHaloBlurDefault?: true
    textHaloBlurStopsZoom1?: true
    textHaloBlurStopsVal1?: true
    textHaloBlurStopsZoom2?: true
    textHaloBlurStopsVal2?: true
    textHaloColorStopsZoom1?: true
    textHaloColorStopsZoom2?: true
    textOpacityDefault?: true
    textOpacityStopsZoom1?: true
    textOpacityStopsVal1?: true
    textOpacityStopsZoom2?: true
    textOpacityStopsVal2?: true
  }

  export type ZoomLabelMinAggregateInputType = {
    id?: true
    title?: true
    minZoom?: true
    zoom?: true
    bearing?: true
    centerLatitude?: true
    centerLongitude?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    useTextSizeZoomStyling?: true
    textSizeDefault?: true
    textSizeStopsZoom1?: true
    textSizeStopsVal1?: true
    textSizeStopsZoom2?: true
    textSizeStopsVal2?: true
    useTextColorZoomStyling?: true
    textColorDefault?: true
    textColorStopsZoom1?: true
    textColorStopsVal1?: true
    textColorStopsZoom2?: true
    textColorStopsVal2?: true
    useTextHaloWidthZoomStyling?: true
    textHaloWidthDefault?: true
    textHaloWidthStopsZoom1?: true
    textHaloWidthStopsVal1?: true
    textHaloWidthStopsZoom2?: true
    textHaloWidthStopsVal2?: true
    useTextHaloBlurZoomStyling?: true
    textHaloBlurDefault?: true
    textHaloBlurStopsZoom1?: true
    textHaloBlurStopsVal1?: true
    textHaloBlurStopsZoom2?: true
    textHaloBlurStopsVal2?: true
    useTextHaloColorZoomStyling?: true
    textHaloColorDefault?: true
    textHaloColorStopsZoom1?: true
    textHaloColorStopsVal1?: true
    textHaloColorStopsZoom2?: true
    textHaloColorStopsVal2?: true
    useTextOpacityZoomStyling?: true
    textOpacityDefault?: true
    textOpacityStopsZoom1?: true
    textOpacityStopsVal1?: true
    textOpacityStopsZoom2?: true
    textOpacityStopsVal2?: true
  }

  export type ZoomLabelMaxAggregateInputType = {
    id?: true
    title?: true
    minZoom?: true
    zoom?: true
    bearing?: true
    centerLatitude?: true
    centerLongitude?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    useTextSizeZoomStyling?: true
    textSizeDefault?: true
    textSizeStopsZoom1?: true
    textSizeStopsVal1?: true
    textSizeStopsZoom2?: true
    textSizeStopsVal2?: true
    useTextColorZoomStyling?: true
    textColorDefault?: true
    textColorStopsZoom1?: true
    textColorStopsVal1?: true
    textColorStopsZoom2?: true
    textColorStopsVal2?: true
    useTextHaloWidthZoomStyling?: true
    textHaloWidthDefault?: true
    textHaloWidthStopsZoom1?: true
    textHaloWidthStopsVal1?: true
    textHaloWidthStopsZoom2?: true
    textHaloWidthStopsVal2?: true
    useTextHaloBlurZoomStyling?: true
    textHaloBlurDefault?: true
    textHaloBlurStopsZoom1?: true
    textHaloBlurStopsVal1?: true
    textHaloBlurStopsZoom2?: true
    textHaloBlurStopsVal2?: true
    useTextHaloColorZoomStyling?: true
    textHaloColorDefault?: true
    textHaloColorStopsZoom1?: true
    textHaloColorStopsVal1?: true
    textHaloColorStopsZoom2?: true
    textHaloColorStopsVal2?: true
    useTextOpacityZoomStyling?: true
    textOpacityDefault?: true
    textOpacityStopsZoom1?: true
    textOpacityStopsVal1?: true
    textOpacityStopsZoom2?: true
    textOpacityStopsVal2?: true
  }

  export type ZoomLabelCountAggregateInputType = {
    id?: true
    title?: true
    minZoom?: true
    zoom?: true
    bearing?: true
    centerLatitude?: true
    centerLongitude?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    useTextSizeZoomStyling?: true
    textSizeDefault?: true
    textSizeStopsZoom1?: true
    textSizeStopsVal1?: true
    textSizeStopsZoom2?: true
    textSizeStopsVal2?: true
    useTextColorZoomStyling?: true
    textColorDefault?: true
    textColorStopsZoom1?: true
    textColorStopsVal1?: true
    textColorStopsZoom2?: true
    textColorStopsVal2?: true
    useTextHaloWidthZoomStyling?: true
    textHaloWidthDefault?: true
    textHaloWidthStopsZoom1?: true
    textHaloWidthStopsVal1?: true
    textHaloWidthStopsZoom2?: true
    textHaloWidthStopsVal2?: true
    useTextHaloBlurZoomStyling?: true
    textHaloBlurDefault?: true
    textHaloBlurStopsZoom1?: true
    textHaloBlurStopsVal1?: true
    textHaloBlurStopsZoom2?: true
    textHaloBlurStopsVal2?: true
    useTextHaloColorZoomStyling?: true
    textHaloColorDefault?: true
    textHaloColorStopsZoom1?: true
    textHaloColorStopsVal1?: true
    textHaloColorStopsZoom2?: true
    textHaloColorStopsVal2?: true
    useTextOpacityZoomStyling?: true
    textOpacityDefault?: true
    textOpacityStopsZoom1?: true
    textOpacityStopsVal1?: true
    textOpacityStopsZoom2?: true
    textOpacityStopsVal2?: true
    _all?: true
  }

  export type ZoomLabelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZoomLabel to aggregate.
     */
    where?: ZoomLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomLabels to fetch.
     */
    orderBy?: ZoomLabelOrderByWithRelationInput | ZoomLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoomLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZoomLabels
    **/
    _count?: true | ZoomLabelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZoomLabelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZoomLabelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoomLabelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoomLabelMaxAggregateInputType
  }

  export type GetZoomLabelAggregateType<T extends ZoomLabelAggregateArgs> = {
        [P in keyof T & keyof AggregateZoomLabel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZoomLabel[P]>
      : GetScalarType<T[P], AggregateZoomLabel[P]>
  }




  export type ZoomLabelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoomLabelWhereInput
    orderBy?: ZoomLabelOrderByWithAggregationInput | ZoomLabelOrderByWithAggregationInput[]
    by: ZoomLabelScalarFieldEnum[] | ZoomLabelScalarFieldEnum
    having?: ZoomLabelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoomLabelCountAggregateInputType | true
    _avg?: ZoomLabelAvgAggregateInputType
    _sum?: ZoomLabelSumAggregateInputType
    _min?: ZoomLabelMinAggregateInputType
    _max?: ZoomLabelMaxAggregateInputType
  }

  export type ZoomLabelGroupByOutputType = {
    id: string
    title: string
    minZoom: number | null
    zoom: number | null
    bearing: number | null
    centerLatitude: number | null
    centerLongitude: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean
    useTextSizeZoomStyling: boolean
    textSizeDefault: number
    textSizeStopsZoom1: number
    textSizeStopsVal1: number
    textSizeStopsZoom2: number
    textSizeStopsVal2: number
    useTextColorZoomStyling: boolean
    textColorDefault: string
    textColorStopsZoom1: number
    textColorStopsVal1: string
    textColorStopsZoom2: number
    textColorStopsVal2: string
    useTextHaloWidthZoomStyling: boolean
    textHaloWidthDefault: number
    textHaloWidthStopsZoom1: number
    textHaloWidthStopsVal1: number
    textHaloWidthStopsZoom2: number
    textHaloWidthStopsVal2: number
    useTextHaloBlurZoomStyling: boolean
    textHaloBlurDefault: number
    textHaloBlurStopsZoom1: number
    textHaloBlurStopsVal1: number
    textHaloBlurStopsZoom2: number
    textHaloBlurStopsVal2: number
    useTextHaloColorZoomStyling: boolean
    textHaloColorDefault: string
    textHaloColorStopsZoom1: number
    textHaloColorStopsVal1: string
    textHaloColorStopsZoom2: number
    textHaloColorStopsVal2: string
    useTextOpacityZoomStyling: boolean
    textOpacityDefault: number
    textOpacityStopsZoom1: number
    textOpacityStopsVal1: number
    textOpacityStopsZoom2: number
    textOpacityStopsVal2: number
    _count: ZoomLabelCountAggregateOutputType | null
    _avg: ZoomLabelAvgAggregateOutputType | null
    _sum: ZoomLabelSumAggregateOutputType | null
    _min: ZoomLabelMinAggregateOutputType | null
    _max: ZoomLabelMaxAggregateOutputType | null
  }

  type GetZoomLabelGroupByPayload<T extends ZoomLabelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoomLabelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoomLabelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoomLabelGroupByOutputType[P]>
            : GetScalarType<T[P], ZoomLabelGroupByOutputType[P]>
        }
      >
    >


  export type ZoomLabelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    minZoom?: boolean
    zoom?: boolean
    bearing?: boolean
    centerLatitude?: boolean
    centerLongitude?: boolean
    topLeftBoundLatitude?: boolean
    topLeftBoundLongitude?: boolean
    bottomRightBoundLatitude?: boolean
    bottomRightBoundLongitude?: boolean
    zoomToBounds?: boolean
    useTextSizeZoomStyling?: boolean
    textSizeDefault?: boolean
    textSizeStopsZoom1?: boolean
    textSizeStopsVal1?: boolean
    textSizeStopsZoom2?: boolean
    textSizeStopsVal2?: boolean
    useTextColorZoomStyling?: boolean
    textColorDefault?: boolean
    textColorStopsZoom1?: boolean
    textColorStopsVal1?: boolean
    textColorStopsZoom2?: boolean
    textColorStopsVal2?: boolean
    useTextHaloWidthZoomStyling?: boolean
    textHaloWidthDefault?: boolean
    textHaloWidthStopsZoom1?: boolean
    textHaloWidthStopsVal1?: boolean
    textHaloWidthStopsZoom2?: boolean
    textHaloWidthStopsVal2?: boolean
    useTextHaloBlurZoomStyling?: boolean
    textHaloBlurDefault?: boolean
    textHaloBlurStopsZoom1?: boolean
    textHaloBlurStopsVal1?: boolean
    textHaloBlurStopsZoom2?: boolean
    textHaloBlurStopsVal2?: boolean
    useTextHaloColorZoomStyling?: boolean
    textHaloColorDefault?: boolean
    textHaloColorStopsZoom1?: boolean
    textHaloColorStopsVal1?: boolean
    textHaloColorStopsZoom2?: boolean
    textHaloColorStopsVal2?: boolean
    useTextOpacityZoomStyling?: boolean
    textOpacityDefault?: boolean
    textOpacityStopsZoom1?: boolean
    textOpacityStopsVal1?: boolean
    textOpacityStopsZoom2?: boolean
    textOpacityStopsVal2?: boolean
    Map?: boolean | ZoomLabel$MapArgs<ExtArgs>
    _count?: boolean | ZoomLabelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zoomLabel"]>


  export type ZoomLabelSelectScalar = {
    id?: boolean
    title?: boolean
    minZoom?: boolean
    zoom?: boolean
    bearing?: boolean
    centerLatitude?: boolean
    centerLongitude?: boolean
    topLeftBoundLatitude?: boolean
    topLeftBoundLongitude?: boolean
    bottomRightBoundLatitude?: boolean
    bottomRightBoundLongitude?: boolean
    zoomToBounds?: boolean
    useTextSizeZoomStyling?: boolean
    textSizeDefault?: boolean
    textSizeStopsZoom1?: boolean
    textSizeStopsVal1?: boolean
    textSizeStopsZoom2?: boolean
    textSizeStopsVal2?: boolean
    useTextColorZoomStyling?: boolean
    textColorDefault?: boolean
    textColorStopsZoom1?: boolean
    textColorStopsVal1?: boolean
    textColorStopsZoom2?: boolean
    textColorStopsVal2?: boolean
    useTextHaloWidthZoomStyling?: boolean
    textHaloWidthDefault?: boolean
    textHaloWidthStopsZoom1?: boolean
    textHaloWidthStopsVal1?: boolean
    textHaloWidthStopsZoom2?: boolean
    textHaloWidthStopsVal2?: boolean
    useTextHaloBlurZoomStyling?: boolean
    textHaloBlurDefault?: boolean
    textHaloBlurStopsZoom1?: boolean
    textHaloBlurStopsVal1?: boolean
    textHaloBlurStopsZoom2?: boolean
    textHaloBlurStopsVal2?: boolean
    useTextHaloColorZoomStyling?: boolean
    textHaloColorDefault?: boolean
    textHaloColorStopsZoom1?: boolean
    textHaloColorStopsVal1?: boolean
    textHaloColorStopsZoom2?: boolean
    textHaloColorStopsVal2?: boolean
    useTextOpacityZoomStyling?: boolean
    textOpacityDefault?: boolean
    textOpacityStopsZoom1?: boolean
    textOpacityStopsVal1?: boolean
    textOpacityStopsZoom2?: boolean
    textOpacityStopsVal2?: boolean
  }

  export type ZoomLabelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Map?: boolean | ZoomLabel$MapArgs<ExtArgs>
    _count?: boolean | ZoomLabelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ZoomLabelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZoomLabel"
    objects: {
      Map: Prisma.$MapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      minZoom: number | null
      zoom: number | null
      bearing: number | null
      centerLatitude: number | null
      centerLongitude: number | null
      topLeftBoundLatitude: number | null
      topLeftBoundLongitude: number | null
      bottomRightBoundLatitude: number | null
      bottomRightBoundLongitude: number | null
      zoomToBounds: boolean
      useTextSizeZoomStyling: boolean
      textSizeDefault: number
      textSizeStopsZoom1: number
      textSizeStopsVal1: number
      textSizeStopsZoom2: number
      textSizeStopsVal2: number
      useTextColorZoomStyling: boolean
      textColorDefault: string
      textColorStopsZoom1: number
      textColorStopsVal1: string
      textColorStopsZoom2: number
      textColorStopsVal2: string
      useTextHaloWidthZoomStyling: boolean
      textHaloWidthDefault: number
      textHaloWidthStopsZoom1: number
      textHaloWidthStopsVal1: number
      textHaloWidthStopsZoom2: number
      textHaloWidthStopsVal2: number
      useTextHaloBlurZoomStyling: boolean
      textHaloBlurDefault: number
      textHaloBlurStopsZoom1: number
      textHaloBlurStopsVal1: number
      textHaloBlurStopsZoom2: number
      textHaloBlurStopsVal2: number
      useTextHaloColorZoomStyling: boolean
      textHaloColorDefault: string
      textHaloColorStopsZoom1: number
      textHaloColorStopsVal1: string
      textHaloColorStopsZoom2: number
      textHaloColorStopsVal2: string
      useTextOpacityZoomStyling: boolean
      textOpacityDefault: number
      textOpacityStopsZoom1: number
      textOpacityStopsVal1: number
      textOpacityStopsZoom2: number
      textOpacityStopsVal2: number
    }, ExtArgs["result"]["zoomLabel"]>
    composites: {}
  }

  type ZoomLabelGetPayload<S extends boolean | null | undefined | ZoomLabelDefaultArgs> = $Result.GetResult<Prisma.$ZoomLabelPayload, S>

  type ZoomLabelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ZoomLabelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ZoomLabelCountAggregateInputType | true
    }

  export interface ZoomLabelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZoomLabel'], meta: { name: 'ZoomLabel' } }
    /**
     * Find zero or one ZoomLabel that matches the filter.
     * @param {ZoomLabelFindUniqueArgs} args - Arguments to find a ZoomLabel
     * @example
     * // Get one ZoomLabel
     * const zoomLabel = await prisma.zoomLabel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoomLabelFindUniqueArgs>(args: SelectSubset<T, ZoomLabelFindUniqueArgs<ExtArgs>>): Prisma__ZoomLabelClient<$Result.GetResult<Prisma.$ZoomLabelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ZoomLabel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ZoomLabelFindUniqueOrThrowArgs} args - Arguments to find a ZoomLabel
     * @example
     * // Get one ZoomLabel
     * const zoomLabel = await prisma.zoomLabel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoomLabelFindUniqueOrThrowArgs>(args: SelectSubset<T, ZoomLabelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZoomLabelClient<$Result.GetResult<Prisma.$ZoomLabelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ZoomLabel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomLabelFindFirstArgs} args - Arguments to find a ZoomLabel
     * @example
     * // Get one ZoomLabel
     * const zoomLabel = await prisma.zoomLabel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoomLabelFindFirstArgs>(args?: SelectSubset<T, ZoomLabelFindFirstArgs<ExtArgs>>): Prisma__ZoomLabelClient<$Result.GetResult<Prisma.$ZoomLabelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ZoomLabel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomLabelFindFirstOrThrowArgs} args - Arguments to find a ZoomLabel
     * @example
     * // Get one ZoomLabel
     * const zoomLabel = await prisma.zoomLabel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoomLabelFindFirstOrThrowArgs>(args?: SelectSubset<T, ZoomLabelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZoomLabelClient<$Result.GetResult<Prisma.$ZoomLabelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ZoomLabels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomLabelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZoomLabels
     * const zoomLabels = await prisma.zoomLabel.findMany()
     * 
     * // Get first 10 ZoomLabels
     * const zoomLabels = await prisma.zoomLabel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoomLabelWithIdOnly = await prisma.zoomLabel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZoomLabelFindManyArgs>(args?: SelectSubset<T, ZoomLabelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoomLabelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ZoomLabel.
     * @param {ZoomLabelCreateArgs} args - Arguments to create a ZoomLabel.
     * @example
     * // Create one ZoomLabel
     * const ZoomLabel = await prisma.zoomLabel.create({
     *   data: {
     *     // ... data to create a ZoomLabel
     *   }
     * })
     * 
     */
    create<T extends ZoomLabelCreateArgs>(args: SelectSubset<T, ZoomLabelCreateArgs<ExtArgs>>): Prisma__ZoomLabelClient<$Result.GetResult<Prisma.$ZoomLabelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ZoomLabels.
     * @param {ZoomLabelCreateManyArgs} args - Arguments to create many ZoomLabels.
     * @example
     * // Create many ZoomLabels
     * const zoomLabel = await prisma.zoomLabel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZoomLabelCreateManyArgs>(args?: SelectSubset<T, ZoomLabelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ZoomLabel.
     * @param {ZoomLabelDeleteArgs} args - Arguments to delete one ZoomLabel.
     * @example
     * // Delete one ZoomLabel
     * const ZoomLabel = await prisma.zoomLabel.delete({
     *   where: {
     *     // ... filter to delete one ZoomLabel
     *   }
     * })
     * 
     */
    delete<T extends ZoomLabelDeleteArgs>(args: SelectSubset<T, ZoomLabelDeleteArgs<ExtArgs>>): Prisma__ZoomLabelClient<$Result.GetResult<Prisma.$ZoomLabelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ZoomLabel.
     * @param {ZoomLabelUpdateArgs} args - Arguments to update one ZoomLabel.
     * @example
     * // Update one ZoomLabel
     * const zoomLabel = await prisma.zoomLabel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZoomLabelUpdateArgs>(args: SelectSubset<T, ZoomLabelUpdateArgs<ExtArgs>>): Prisma__ZoomLabelClient<$Result.GetResult<Prisma.$ZoomLabelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ZoomLabels.
     * @param {ZoomLabelDeleteManyArgs} args - Arguments to filter ZoomLabels to delete.
     * @example
     * // Delete a few ZoomLabels
     * const { count } = await prisma.zoomLabel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZoomLabelDeleteManyArgs>(args?: SelectSubset<T, ZoomLabelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZoomLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomLabelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZoomLabels
     * const zoomLabel = await prisma.zoomLabel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZoomLabelUpdateManyArgs>(args: SelectSubset<T, ZoomLabelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ZoomLabel.
     * @param {ZoomLabelUpsertArgs} args - Arguments to update or create a ZoomLabel.
     * @example
     * // Update or create a ZoomLabel
     * const zoomLabel = await prisma.zoomLabel.upsert({
     *   create: {
     *     // ... data to create a ZoomLabel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZoomLabel we want to update
     *   }
     * })
     */
    upsert<T extends ZoomLabelUpsertArgs>(args: SelectSubset<T, ZoomLabelUpsertArgs<ExtArgs>>): Prisma__ZoomLabelClient<$Result.GetResult<Prisma.$ZoomLabelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more ZoomLabels that matches the filter.
     * @param {ZoomLabelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const zoomLabel = await prisma.zoomLabel.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ZoomLabelFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ZoomLabel.
     * @param {ZoomLabelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const zoomLabel = await prisma.zoomLabel.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ZoomLabelAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ZoomLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomLabelCountArgs} args - Arguments to filter ZoomLabels to count.
     * @example
     * // Count the number of ZoomLabels
     * const count = await prisma.zoomLabel.count({
     *   where: {
     *     // ... the filter for the ZoomLabels we want to count
     *   }
     * })
    **/
    count<T extends ZoomLabelCountArgs>(
      args?: Subset<T, ZoomLabelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoomLabelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZoomLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomLabelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZoomLabelAggregateArgs>(args: Subset<T, ZoomLabelAggregateArgs>): Prisma.PrismaPromise<GetZoomLabelAggregateType<T>>

    /**
     * Group by ZoomLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomLabelGroupByArgs} args - Group by arguments.
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
      T extends ZoomLabelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoomLabelGroupByArgs['orderBy'] }
        : { orderBy?: ZoomLabelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZoomLabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoomLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZoomLabel model
   */
  readonly fields: ZoomLabelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZoomLabel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoomLabelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Map<T extends ZoomLabel$MapArgs<ExtArgs> = {}>(args?: Subset<T, ZoomLabel$MapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ZoomLabel model
   */ 
  interface ZoomLabelFieldRefs {
    readonly id: FieldRef<"ZoomLabel", 'String'>
    readonly title: FieldRef<"ZoomLabel", 'String'>
    readonly minZoom: FieldRef<"ZoomLabel", 'Float'>
    readonly zoom: FieldRef<"ZoomLabel", 'Float'>
    readonly bearing: FieldRef<"ZoomLabel", 'Float'>
    readonly centerLatitude: FieldRef<"ZoomLabel", 'Float'>
    readonly centerLongitude: FieldRef<"ZoomLabel", 'Float'>
    readonly topLeftBoundLatitude: FieldRef<"ZoomLabel", 'Float'>
    readonly topLeftBoundLongitude: FieldRef<"ZoomLabel", 'Float'>
    readonly bottomRightBoundLatitude: FieldRef<"ZoomLabel", 'Float'>
    readonly bottomRightBoundLongitude: FieldRef<"ZoomLabel", 'Float'>
    readonly zoomToBounds: FieldRef<"ZoomLabel", 'Boolean'>
    readonly useTextSizeZoomStyling: FieldRef<"ZoomLabel", 'Boolean'>
    readonly textSizeDefault: FieldRef<"ZoomLabel", 'Float'>
    readonly textSizeStopsZoom1: FieldRef<"ZoomLabel", 'Int'>
    readonly textSizeStopsVal1: FieldRef<"ZoomLabel", 'Float'>
    readonly textSizeStopsZoom2: FieldRef<"ZoomLabel", 'Int'>
    readonly textSizeStopsVal2: FieldRef<"ZoomLabel", 'Float'>
    readonly useTextColorZoomStyling: FieldRef<"ZoomLabel", 'Boolean'>
    readonly textColorDefault: FieldRef<"ZoomLabel", 'String'>
    readonly textColorStopsZoom1: FieldRef<"ZoomLabel", 'Int'>
    readonly textColorStopsVal1: FieldRef<"ZoomLabel", 'String'>
    readonly textColorStopsZoom2: FieldRef<"ZoomLabel", 'Int'>
    readonly textColorStopsVal2: FieldRef<"ZoomLabel", 'String'>
    readonly useTextHaloWidthZoomStyling: FieldRef<"ZoomLabel", 'Boolean'>
    readonly textHaloWidthDefault: FieldRef<"ZoomLabel", 'Float'>
    readonly textHaloWidthStopsZoom1: FieldRef<"ZoomLabel", 'Int'>
    readonly textHaloWidthStopsVal1: FieldRef<"ZoomLabel", 'Float'>
    readonly textHaloWidthStopsZoom2: FieldRef<"ZoomLabel", 'Int'>
    readonly textHaloWidthStopsVal2: FieldRef<"ZoomLabel", 'Float'>
    readonly useTextHaloBlurZoomStyling: FieldRef<"ZoomLabel", 'Boolean'>
    readonly textHaloBlurDefault: FieldRef<"ZoomLabel", 'Float'>
    readonly textHaloBlurStopsZoom1: FieldRef<"ZoomLabel", 'Int'>
    readonly textHaloBlurStopsVal1: FieldRef<"ZoomLabel", 'Float'>
    readonly textHaloBlurStopsZoom2: FieldRef<"ZoomLabel", 'Int'>
    readonly textHaloBlurStopsVal2: FieldRef<"ZoomLabel", 'Float'>
    readonly useTextHaloColorZoomStyling: FieldRef<"ZoomLabel", 'Boolean'>
    readonly textHaloColorDefault: FieldRef<"ZoomLabel", 'String'>
    readonly textHaloColorStopsZoom1: FieldRef<"ZoomLabel", 'Int'>
    readonly textHaloColorStopsVal1: FieldRef<"ZoomLabel", 'String'>
    readonly textHaloColorStopsZoom2: FieldRef<"ZoomLabel", 'Int'>
    readonly textHaloColorStopsVal2: FieldRef<"ZoomLabel", 'String'>
    readonly useTextOpacityZoomStyling: FieldRef<"ZoomLabel", 'Boolean'>
    readonly textOpacityDefault: FieldRef<"ZoomLabel", 'Float'>
    readonly textOpacityStopsZoom1: FieldRef<"ZoomLabel", 'Int'>
    readonly textOpacityStopsVal1: FieldRef<"ZoomLabel", 'Float'>
    readonly textOpacityStopsZoom2: FieldRef<"ZoomLabel", 'Int'>
    readonly textOpacityStopsVal2: FieldRef<"ZoomLabel", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ZoomLabel findUnique
   */
  export type ZoomLabelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
    /**
     * Filter, which ZoomLabel to fetch.
     */
    where: ZoomLabelWhereUniqueInput
  }

  /**
   * ZoomLabel findUniqueOrThrow
   */
  export type ZoomLabelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
    /**
     * Filter, which ZoomLabel to fetch.
     */
    where: ZoomLabelWhereUniqueInput
  }

  /**
   * ZoomLabel findFirst
   */
  export type ZoomLabelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
    /**
     * Filter, which ZoomLabel to fetch.
     */
    where?: ZoomLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomLabels to fetch.
     */
    orderBy?: ZoomLabelOrderByWithRelationInput | ZoomLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZoomLabels.
     */
    cursor?: ZoomLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoomLabels.
     */
    distinct?: ZoomLabelScalarFieldEnum | ZoomLabelScalarFieldEnum[]
  }

  /**
   * ZoomLabel findFirstOrThrow
   */
  export type ZoomLabelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
    /**
     * Filter, which ZoomLabel to fetch.
     */
    where?: ZoomLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomLabels to fetch.
     */
    orderBy?: ZoomLabelOrderByWithRelationInput | ZoomLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZoomLabels.
     */
    cursor?: ZoomLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoomLabels.
     */
    distinct?: ZoomLabelScalarFieldEnum | ZoomLabelScalarFieldEnum[]
  }

  /**
   * ZoomLabel findMany
   */
  export type ZoomLabelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
    /**
     * Filter, which ZoomLabels to fetch.
     */
    where?: ZoomLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomLabels to fetch.
     */
    orderBy?: ZoomLabelOrderByWithRelationInput | ZoomLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZoomLabels.
     */
    cursor?: ZoomLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomLabels.
     */
    skip?: number
    distinct?: ZoomLabelScalarFieldEnum | ZoomLabelScalarFieldEnum[]
  }

  /**
   * ZoomLabel create
   */
  export type ZoomLabelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
    /**
     * The data needed to create a ZoomLabel.
     */
    data: XOR<ZoomLabelCreateInput, ZoomLabelUncheckedCreateInput>
  }

  /**
   * ZoomLabel createMany
   */
  export type ZoomLabelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZoomLabels.
     */
    data: ZoomLabelCreateManyInput | ZoomLabelCreateManyInput[]
  }

  /**
   * ZoomLabel update
   */
  export type ZoomLabelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
    /**
     * The data needed to update a ZoomLabel.
     */
    data: XOR<ZoomLabelUpdateInput, ZoomLabelUncheckedUpdateInput>
    /**
     * Choose, which ZoomLabel to update.
     */
    where: ZoomLabelWhereUniqueInput
  }

  /**
   * ZoomLabel updateMany
   */
  export type ZoomLabelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZoomLabels.
     */
    data: XOR<ZoomLabelUpdateManyMutationInput, ZoomLabelUncheckedUpdateManyInput>
    /**
     * Filter which ZoomLabels to update
     */
    where?: ZoomLabelWhereInput
  }

  /**
   * ZoomLabel upsert
   */
  export type ZoomLabelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
    /**
     * The filter to search for the ZoomLabel to update in case it exists.
     */
    where: ZoomLabelWhereUniqueInput
    /**
     * In case the ZoomLabel found by the `where` argument doesn't exist, create a new ZoomLabel with this data.
     */
    create: XOR<ZoomLabelCreateInput, ZoomLabelUncheckedCreateInput>
    /**
     * In case the ZoomLabel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoomLabelUpdateInput, ZoomLabelUncheckedUpdateInput>
  }

  /**
   * ZoomLabel delete
   */
  export type ZoomLabelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
    /**
     * Filter which ZoomLabel to delete.
     */
    where: ZoomLabelWhereUniqueInput
  }

  /**
   * ZoomLabel deleteMany
   */
  export type ZoomLabelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZoomLabels to delete
     */
    where?: ZoomLabelWhereInput
  }

  /**
   * ZoomLabel findRaw
   */
  export type ZoomLabelFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ZoomLabel aggregateRaw
   */
  export type ZoomLabelAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ZoomLabel.Map
   */
  export type ZoomLabel$MapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    where?: MapWhereInput
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    cursor?: MapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * ZoomLabel without action
   */
  export type ZoomLabelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomLabel
     */
    select?: ZoomLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoomLabelInclude<ExtArgs> | null
  }


  /**
   * Model ButtonLink
   */

  export type AggregateButtonLink = {
    _count: ButtonLinkCountAggregateOutputType | null
    _min: ButtonLinkMinAggregateOutputType | null
    _max: ButtonLinkMaxAggregateOutputType | null
  }

  export type ButtonLinkMinAggregateOutputType = {
    id: string | null
    label: string | null
    url: string | null
  }

  export type ButtonLinkMaxAggregateOutputType = {
    id: string | null
    label: string | null
    url: string | null
  }

  export type ButtonLinkCountAggregateOutputType = {
    id: number
    label: number
    url: number
    _all: number
  }


  export type ButtonLinkMinAggregateInputType = {
    id?: true
    label?: true
    url?: true
  }

  export type ButtonLinkMaxAggregateInputType = {
    id?: true
    label?: true
    url?: true
  }

  export type ButtonLinkCountAggregateInputType = {
    id?: true
    label?: true
    url?: true
    _all?: true
  }

  export type ButtonLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ButtonLink to aggregate.
     */
    where?: ButtonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonLinks to fetch.
     */
    orderBy?: ButtonLinkOrderByWithRelationInput | ButtonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ButtonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ButtonLinks
    **/
    _count?: true | ButtonLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ButtonLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ButtonLinkMaxAggregateInputType
  }

  export type GetButtonLinkAggregateType<T extends ButtonLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateButtonLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateButtonLink[P]>
      : GetScalarType<T[P], AggregateButtonLink[P]>
  }




  export type ButtonLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ButtonLinkWhereInput
    orderBy?: ButtonLinkOrderByWithAggregationInput | ButtonLinkOrderByWithAggregationInput[]
    by: ButtonLinkScalarFieldEnum[] | ButtonLinkScalarFieldEnum
    having?: ButtonLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ButtonLinkCountAggregateInputType | true
    _min?: ButtonLinkMinAggregateInputType
    _max?: ButtonLinkMaxAggregateInputType
  }

  export type ButtonLinkGroupByOutputType = {
    id: string
    label: string
    url: string
    _count: ButtonLinkCountAggregateOutputType | null
    _min: ButtonLinkMinAggregateOutputType | null
    _max: ButtonLinkMaxAggregateOutputType | null
  }

  type GetButtonLinkGroupByPayload<T extends ButtonLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ButtonLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ButtonLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ButtonLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ButtonLinkGroupByOutputType[P]>
        }
      >
    >


  export type ButtonLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    url?: boolean
  }, ExtArgs["result"]["buttonLink"]>


  export type ButtonLinkSelectScalar = {
    id?: boolean
    label?: boolean
    url?: boolean
  }


  export type $ButtonLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ButtonLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      url: string
    }, ExtArgs["result"]["buttonLink"]>
    composites: {}
  }

  type ButtonLinkGetPayload<S extends boolean | null | undefined | ButtonLinkDefaultArgs> = $Result.GetResult<Prisma.$ButtonLinkPayload, S>

  type ButtonLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ButtonLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ButtonLinkCountAggregateInputType | true
    }

  export interface ButtonLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ButtonLink'], meta: { name: 'ButtonLink' } }
    /**
     * Find zero or one ButtonLink that matches the filter.
     * @param {ButtonLinkFindUniqueArgs} args - Arguments to find a ButtonLink
     * @example
     * // Get one ButtonLink
     * const buttonLink = await prisma.buttonLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ButtonLinkFindUniqueArgs>(args: SelectSubset<T, ButtonLinkFindUniqueArgs<ExtArgs>>): Prisma__ButtonLinkClient<$Result.GetResult<Prisma.$ButtonLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ButtonLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ButtonLinkFindUniqueOrThrowArgs} args - Arguments to find a ButtonLink
     * @example
     * // Get one ButtonLink
     * const buttonLink = await prisma.buttonLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ButtonLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ButtonLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ButtonLinkClient<$Result.GetResult<Prisma.$ButtonLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ButtonLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonLinkFindFirstArgs} args - Arguments to find a ButtonLink
     * @example
     * // Get one ButtonLink
     * const buttonLink = await prisma.buttonLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ButtonLinkFindFirstArgs>(args?: SelectSubset<T, ButtonLinkFindFirstArgs<ExtArgs>>): Prisma__ButtonLinkClient<$Result.GetResult<Prisma.$ButtonLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ButtonLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonLinkFindFirstOrThrowArgs} args - Arguments to find a ButtonLink
     * @example
     * // Get one ButtonLink
     * const buttonLink = await prisma.buttonLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ButtonLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ButtonLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ButtonLinkClient<$Result.GetResult<Prisma.$ButtonLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ButtonLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ButtonLinks
     * const buttonLinks = await prisma.buttonLink.findMany()
     * 
     * // Get first 10 ButtonLinks
     * const buttonLinks = await prisma.buttonLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buttonLinkWithIdOnly = await prisma.buttonLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ButtonLinkFindManyArgs>(args?: SelectSubset<T, ButtonLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ButtonLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ButtonLink.
     * @param {ButtonLinkCreateArgs} args - Arguments to create a ButtonLink.
     * @example
     * // Create one ButtonLink
     * const ButtonLink = await prisma.buttonLink.create({
     *   data: {
     *     // ... data to create a ButtonLink
     *   }
     * })
     * 
     */
    create<T extends ButtonLinkCreateArgs>(args: SelectSubset<T, ButtonLinkCreateArgs<ExtArgs>>): Prisma__ButtonLinkClient<$Result.GetResult<Prisma.$ButtonLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ButtonLinks.
     * @param {ButtonLinkCreateManyArgs} args - Arguments to create many ButtonLinks.
     * @example
     * // Create many ButtonLinks
     * const buttonLink = await prisma.buttonLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ButtonLinkCreateManyArgs>(args?: SelectSubset<T, ButtonLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ButtonLink.
     * @param {ButtonLinkDeleteArgs} args - Arguments to delete one ButtonLink.
     * @example
     * // Delete one ButtonLink
     * const ButtonLink = await prisma.buttonLink.delete({
     *   where: {
     *     // ... filter to delete one ButtonLink
     *   }
     * })
     * 
     */
    delete<T extends ButtonLinkDeleteArgs>(args: SelectSubset<T, ButtonLinkDeleteArgs<ExtArgs>>): Prisma__ButtonLinkClient<$Result.GetResult<Prisma.$ButtonLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ButtonLink.
     * @param {ButtonLinkUpdateArgs} args - Arguments to update one ButtonLink.
     * @example
     * // Update one ButtonLink
     * const buttonLink = await prisma.buttonLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ButtonLinkUpdateArgs>(args: SelectSubset<T, ButtonLinkUpdateArgs<ExtArgs>>): Prisma__ButtonLinkClient<$Result.GetResult<Prisma.$ButtonLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ButtonLinks.
     * @param {ButtonLinkDeleteManyArgs} args - Arguments to filter ButtonLinks to delete.
     * @example
     * // Delete a few ButtonLinks
     * const { count } = await prisma.buttonLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ButtonLinkDeleteManyArgs>(args?: SelectSubset<T, ButtonLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ButtonLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ButtonLinks
     * const buttonLink = await prisma.buttonLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ButtonLinkUpdateManyArgs>(args: SelectSubset<T, ButtonLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ButtonLink.
     * @param {ButtonLinkUpsertArgs} args - Arguments to update or create a ButtonLink.
     * @example
     * // Update or create a ButtonLink
     * const buttonLink = await prisma.buttonLink.upsert({
     *   create: {
     *     // ... data to create a ButtonLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ButtonLink we want to update
     *   }
     * })
     */
    upsert<T extends ButtonLinkUpsertArgs>(args: SelectSubset<T, ButtonLinkUpsertArgs<ExtArgs>>): Prisma__ButtonLinkClient<$Result.GetResult<Prisma.$ButtonLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more ButtonLinks that matches the filter.
     * @param {ButtonLinkFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const buttonLink = await prisma.buttonLink.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ButtonLinkFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ButtonLink.
     * @param {ButtonLinkAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const buttonLink = await prisma.buttonLink.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ButtonLinkAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ButtonLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonLinkCountArgs} args - Arguments to filter ButtonLinks to count.
     * @example
     * // Count the number of ButtonLinks
     * const count = await prisma.buttonLink.count({
     *   where: {
     *     // ... the filter for the ButtonLinks we want to count
     *   }
     * })
    **/
    count<T extends ButtonLinkCountArgs>(
      args?: Subset<T, ButtonLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ButtonLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ButtonLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ButtonLinkAggregateArgs>(args: Subset<T, ButtonLinkAggregateArgs>): Prisma.PrismaPromise<GetButtonLinkAggregateType<T>>

    /**
     * Group by ButtonLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonLinkGroupByArgs} args - Group by arguments.
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
      T extends ButtonLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ButtonLinkGroupByArgs['orderBy'] }
        : { orderBy?: ButtonLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ButtonLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetButtonLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ButtonLink model
   */
  readonly fields: ButtonLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ButtonLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ButtonLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ButtonLink model
   */ 
  interface ButtonLinkFieldRefs {
    readonly id: FieldRef<"ButtonLink", 'String'>
    readonly label: FieldRef<"ButtonLink", 'String'>
    readonly url: FieldRef<"ButtonLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ButtonLink findUnique
   */
  export type ButtonLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonLink
     */
    select?: ButtonLinkSelect<ExtArgs> | null
    /**
     * Filter, which ButtonLink to fetch.
     */
    where: ButtonLinkWhereUniqueInput
  }

  /**
   * ButtonLink findUniqueOrThrow
   */
  export type ButtonLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonLink
     */
    select?: ButtonLinkSelect<ExtArgs> | null
    /**
     * Filter, which ButtonLink to fetch.
     */
    where: ButtonLinkWhereUniqueInput
  }

  /**
   * ButtonLink findFirst
   */
  export type ButtonLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonLink
     */
    select?: ButtonLinkSelect<ExtArgs> | null
    /**
     * Filter, which ButtonLink to fetch.
     */
    where?: ButtonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonLinks to fetch.
     */
    orderBy?: ButtonLinkOrderByWithRelationInput | ButtonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ButtonLinks.
     */
    cursor?: ButtonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ButtonLinks.
     */
    distinct?: ButtonLinkScalarFieldEnum | ButtonLinkScalarFieldEnum[]
  }

  /**
   * ButtonLink findFirstOrThrow
   */
  export type ButtonLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonLink
     */
    select?: ButtonLinkSelect<ExtArgs> | null
    /**
     * Filter, which ButtonLink to fetch.
     */
    where?: ButtonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonLinks to fetch.
     */
    orderBy?: ButtonLinkOrderByWithRelationInput | ButtonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ButtonLinks.
     */
    cursor?: ButtonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ButtonLinks.
     */
    distinct?: ButtonLinkScalarFieldEnum | ButtonLinkScalarFieldEnum[]
  }

  /**
   * ButtonLink findMany
   */
  export type ButtonLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonLink
     */
    select?: ButtonLinkSelect<ExtArgs> | null
    /**
     * Filter, which ButtonLinks to fetch.
     */
    where?: ButtonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonLinks to fetch.
     */
    orderBy?: ButtonLinkOrderByWithRelationInput | ButtonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ButtonLinks.
     */
    cursor?: ButtonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonLinks.
     */
    skip?: number
    distinct?: ButtonLinkScalarFieldEnum | ButtonLinkScalarFieldEnum[]
  }

  /**
   * ButtonLink create
   */
  export type ButtonLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonLink
     */
    select?: ButtonLinkSelect<ExtArgs> | null
    /**
     * The data needed to create a ButtonLink.
     */
    data: XOR<ButtonLinkCreateInput, ButtonLinkUncheckedCreateInput>
  }

  /**
   * ButtonLink createMany
   */
  export type ButtonLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ButtonLinks.
     */
    data: ButtonLinkCreateManyInput | ButtonLinkCreateManyInput[]
  }

  /**
   * ButtonLink update
   */
  export type ButtonLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonLink
     */
    select?: ButtonLinkSelect<ExtArgs> | null
    /**
     * The data needed to update a ButtonLink.
     */
    data: XOR<ButtonLinkUpdateInput, ButtonLinkUncheckedUpdateInput>
    /**
     * Choose, which ButtonLink to update.
     */
    where: ButtonLinkWhereUniqueInput
  }

  /**
   * ButtonLink updateMany
   */
  export type ButtonLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ButtonLinks.
     */
    data: XOR<ButtonLinkUpdateManyMutationInput, ButtonLinkUncheckedUpdateManyInput>
    /**
     * Filter which ButtonLinks to update
     */
    where?: ButtonLinkWhereInput
  }

  /**
   * ButtonLink upsert
   */
  export type ButtonLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonLink
     */
    select?: ButtonLinkSelect<ExtArgs> | null
    /**
     * The filter to search for the ButtonLink to update in case it exists.
     */
    where: ButtonLinkWhereUniqueInput
    /**
     * In case the ButtonLink found by the `where` argument doesn't exist, create a new ButtonLink with this data.
     */
    create: XOR<ButtonLinkCreateInput, ButtonLinkUncheckedCreateInput>
    /**
     * In case the ButtonLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ButtonLinkUpdateInput, ButtonLinkUncheckedUpdateInput>
  }

  /**
   * ButtonLink delete
   */
  export type ButtonLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonLink
     */
    select?: ButtonLinkSelect<ExtArgs> | null
    /**
     * Filter which ButtonLink to delete.
     */
    where: ButtonLinkWhereUniqueInput
  }

  /**
   * ButtonLink deleteMany
   */
  export type ButtonLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ButtonLinks to delete
     */
    where?: ButtonLinkWhereInput
  }

  /**
   * ButtonLink findRaw
   */
  export type ButtonLinkFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ButtonLink aggregateRaw
   */
  export type ButtonLinkAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ButtonLink without action
   */
  export type ButtonLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonLink
     */
    select?: ButtonLinkSelect<ExtArgs> | null
  }


  /**
   * Model LayerSection
   */

  export type AggregateLayerSection = {
    _count: LayerSectionCountAggregateOutputType | null
    _avg: LayerSectionAvgAggregateOutputType | null
    _sum: LayerSectionSumAggregateOutputType | null
    _min: LayerSectionMinAggregateOutputType | null
    _max: LayerSectionMaxAggregateOutputType | null
  }

  export type LayerSectionAvgAggregateOutputType = {
    order: number | null
  }

  export type LayerSectionSumAggregateOutputType = {
    order: number | null
  }

  export type LayerSectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
  }

  export type LayerSectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
  }

  export type LayerSectionCountAggregateOutputType = {
    id: number
    name: number
    order: number
    _all: number
  }


  export type LayerSectionAvgAggregateInputType = {
    order?: true
  }

  export type LayerSectionSumAggregateInputType = {
    order?: true
  }

  export type LayerSectionMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
  }

  export type LayerSectionMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
  }

  export type LayerSectionCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    _all?: true
  }

  export type LayerSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayerSection to aggregate.
     */
    where?: LayerSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerSections to fetch.
     */
    orderBy?: LayerSectionOrderByWithRelationInput | LayerSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayerSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LayerSections
    **/
    _count?: true | LayerSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayerSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayerSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayerSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayerSectionMaxAggregateInputType
  }

  export type GetLayerSectionAggregateType<T extends LayerSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateLayerSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayerSection[P]>
      : GetScalarType<T[P], AggregateLayerSection[P]>
  }




  export type LayerSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerSectionWhereInput
    orderBy?: LayerSectionOrderByWithAggregationInput | LayerSectionOrderByWithAggregationInput[]
    by: LayerSectionScalarFieldEnum[] | LayerSectionScalarFieldEnum
    having?: LayerSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayerSectionCountAggregateInputType | true
    _avg?: LayerSectionAvgAggregateInputType
    _sum?: LayerSectionSumAggregateInputType
    _min?: LayerSectionMinAggregateInputType
    _max?: LayerSectionMaxAggregateInputType
  }

  export type LayerSectionGroupByOutputType = {
    id: string
    name: string
    order: number
    _count: LayerSectionCountAggregateOutputType | null
    _avg: LayerSectionAvgAggregateOutputType | null
    _sum: LayerSectionSumAggregateOutputType | null
    _min: LayerSectionMinAggregateOutputType | null
    _max: LayerSectionMaxAggregateOutputType | null
  }

  type GetLayerSectionGroupByPayload<T extends LayerSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayerSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayerSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayerSectionGroupByOutputType[P]>
            : GetScalarType<T[P], LayerSectionGroupByOutputType[P]>
        }
      >
    >


  export type LayerSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    layerGroups?: boolean | LayerSection$layerGroupsArgs<ExtArgs>
    _count?: boolean | LayerSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layerSection"]>


  export type LayerSectionSelectScalar = {
    id?: boolean
    name?: boolean
    order?: boolean
  }

  export type LayerSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layerGroups?: boolean | LayerSection$layerGroupsArgs<ExtArgs>
    _count?: boolean | LayerSectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LayerSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LayerSection"
    objects: {
      layerGroups: Prisma.$LayerGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      order: number
    }, ExtArgs["result"]["layerSection"]>
    composites: {}
  }

  type LayerSectionGetPayload<S extends boolean | null | undefined | LayerSectionDefaultArgs> = $Result.GetResult<Prisma.$LayerSectionPayload, S>

  type LayerSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LayerSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LayerSectionCountAggregateInputType | true
    }

  export interface LayerSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LayerSection'], meta: { name: 'LayerSection' } }
    /**
     * Find zero or one LayerSection that matches the filter.
     * @param {LayerSectionFindUniqueArgs} args - Arguments to find a LayerSection
     * @example
     * // Get one LayerSection
     * const layerSection = await prisma.layerSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayerSectionFindUniqueArgs>(args: SelectSubset<T, LayerSectionFindUniqueArgs<ExtArgs>>): Prisma__LayerSectionClient<$Result.GetResult<Prisma.$LayerSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LayerSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LayerSectionFindUniqueOrThrowArgs} args - Arguments to find a LayerSection
     * @example
     * // Get one LayerSection
     * const layerSection = await prisma.layerSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayerSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, LayerSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayerSectionClient<$Result.GetResult<Prisma.$LayerSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LayerSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerSectionFindFirstArgs} args - Arguments to find a LayerSection
     * @example
     * // Get one LayerSection
     * const layerSection = await prisma.layerSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayerSectionFindFirstArgs>(args?: SelectSubset<T, LayerSectionFindFirstArgs<ExtArgs>>): Prisma__LayerSectionClient<$Result.GetResult<Prisma.$LayerSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LayerSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerSectionFindFirstOrThrowArgs} args - Arguments to find a LayerSection
     * @example
     * // Get one LayerSection
     * const layerSection = await prisma.layerSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayerSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, LayerSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayerSectionClient<$Result.GetResult<Prisma.$LayerSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LayerSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LayerSections
     * const layerSections = await prisma.layerSection.findMany()
     * 
     * // Get first 10 LayerSections
     * const layerSections = await prisma.layerSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layerSectionWithIdOnly = await prisma.layerSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayerSectionFindManyArgs>(args?: SelectSubset<T, LayerSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LayerSection.
     * @param {LayerSectionCreateArgs} args - Arguments to create a LayerSection.
     * @example
     * // Create one LayerSection
     * const LayerSection = await prisma.layerSection.create({
     *   data: {
     *     // ... data to create a LayerSection
     *   }
     * })
     * 
     */
    create<T extends LayerSectionCreateArgs>(args: SelectSubset<T, LayerSectionCreateArgs<ExtArgs>>): Prisma__LayerSectionClient<$Result.GetResult<Prisma.$LayerSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LayerSections.
     * @param {LayerSectionCreateManyArgs} args - Arguments to create many LayerSections.
     * @example
     * // Create many LayerSections
     * const layerSection = await prisma.layerSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayerSectionCreateManyArgs>(args?: SelectSubset<T, LayerSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LayerSection.
     * @param {LayerSectionDeleteArgs} args - Arguments to delete one LayerSection.
     * @example
     * // Delete one LayerSection
     * const LayerSection = await prisma.layerSection.delete({
     *   where: {
     *     // ... filter to delete one LayerSection
     *   }
     * })
     * 
     */
    delete<T extends LayerSectionDeleteArgs>(args: SelectSubset<T, LayerSectionDeleteArgs<ExtArgs>>): Prisma__LayerSectionClient<$Result.GetResult<Prisma.$LayerSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LayerSection.
     * @param {LayerSectionUpdateArgs} args - Arguments to update one LayerSection.
     * @example
     * // Update one LayerSection
     * const layerSection = await prisma.layerSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayerSectionUpdateArgs>(args: SelectSubset<T, LayerSectionUpdateArgs<ExtArgs>>): Prisma__LayerSectionClient<$Result.GetResult<Prisma.$LayerSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LayerSections.
     * @param {LayerSectionDeleteManyArgs} args - Arguments to filter LayerSections to delete.
     * @example
     * // Delete a few LayerSections
     * const { count } = await prisma.layerSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayerSectionDeleteManyArgs>(args?: SelectSubset<T, LayerSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayerSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LayerSections
     * const layerSection = await prisma.layerSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayerSectionUpdateManyArgs>(args: SelectSubset<T, LayerSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LayerSection.
     * @param {LayerSectionUpsertArgs} args - Arguments to update or create a LayerSection.
     * @example
     * // Update or create a LayerSection
     * const layerSection = await prisma.layerSection.upsert({
     *   create: {
     *     // ... data to create a LayerSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LayerSection we want to update
     *   }
     * })
     */
    upsert<T extends LayerSectionUpsertArgs>(args: SelectSubset<T, LayerSectionUpsertArgs<ExtArgs>>): Prisma__LayerSectionClient<$Result.GetResult<Prisma.$LayerSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more LayerSections that matches the filter.
     * @param {LayerSectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const layerSection = await prisma.layerSection.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: LayerSectionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LayerSection.
     * @param {LayerSectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const layerSection = await prisma.layerSection.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LayerSectionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LayerSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerSectionCountArgs} args - Arguments to filter LayerSections to count.
     * @example
     * // Count the number of LayerSections
     * const count = await prisma.layerSection.count({
     *   where: {
     *     // ... the filter for the LayerSections we want to count
     *   }
     * })
    **/
    count<T extends LayerSectionCountArgs>(
      args?: Subset<T, LayerSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayerSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LayerSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayerSectionAggregateArgs>(args: Subset<T, LayerSectionAggregateArgs>): Prisma.PrismaPromise<GetLayerSectionAggregateType<T>>

    /**
     * Group by LayerSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerSectionGroupByArgs} args - Group by arguments.
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
      T extends LayerSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayerSectionGroupByArgs['orderBy'] }
        : { orderBy?: LayerSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LayerSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayerSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LayerSection model
   */
  readonly fields: LayerSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LayerSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayerSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    layerGroups<T extends LayerSection$layerGroupsArgs<ExtArgs> = {}>(args?: Subset<T, LayerSection$layerGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the LayerSection model
   */ 
  interface LayerSectionFieldRefs {
    readonly id: FieldRef<"LayerSection", 'String'>
    readonly name: FieldRef<"LayerSection", 'String'>
    readonly order: FieldRef<"LayerSection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LayerSection findUnique
   */
  export type LayerSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSection
     */
    select?: LayerSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerSectionInclude<ExtArgs> | null
    /**
     * Filter, which LayerSection to fetch.
     */
    where: LayerSectionWhereUniqueInput
  }

  /**
   * LayerSection findUniqueOrThrow
   */
  export type LayerSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSection
     */
    select?: LayerSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerSectionInclude<ExtArgs> | null
    /**
     * Filter, which LayerSection to fetch.
     */
    where: LayerSectionWhereUniqueInput
  }

  /**
   * LayerSection findFirst
   */
  export type LayerSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSection
     */
    select?: LayerSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerSectionInclude<ExtArgs> | null
    /**
     * Filter, which LayerSection to fetch.
     */
    where?: LayerSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerSections to fetch.
     */
    orderBy?: LayerSectionOrderByWithRelationInput | LayerSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayerSections.
     */
    cursor?: LayerSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayerSections.
     */
    distinct?: LayerSectionScalarFieldEnum | LayerSectionScalarFieldEnum[]
  }

  /**
   * LayerSection findFirstOrThrow
   */
  export type LayerSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSection
     */
    select?: LayerSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerSectionInclude<ExtArgs> | null
    /**
     * Filter, which LayerSection to fetch.
     */
    where?: LayerSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerSections to fetch.
     */
    orderBy?: LayerSectionOrderByWithRelationInput | LayerSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayerSections.
     */
    cursor?: LayerSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayerSections.
     */
    distinct?: LayerSectionScalarFieldEnum | LayerSectionScalarFieldEnum[]
  }

  /**
   * LayerSection findMany
   */
  export type LayerSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSection
     */
    select?: LayerSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerSectionInclude<ExtArgs> | null
    /**
     * Filter, which LayerSections to fetch.
     */
    where?: LayerSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerSections to fetch.
     */
    orderBy?: LayerSectionOrderByWithRelationInput | LayerSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LayerSections.
     */
    cursor?: LayerSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerSections.
     */
    skip?: number
    distinct?: LayerSectionScalarFieldEnum | LayerSectionScalarFieldEnum[]
  }

  /**
   * LayerSection create
   */
  export type LayerSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSection
     */
    select?: LayerSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a LayerSection.
     */
    data: XOR<LayerSectionCreateInput, LayerSectionUncheckedCreateInput>
  }

  /**
   * LayerSection createMany
   */
  export type LayerSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LayerSections.
     */
    data: LayerSectionCreateManyInput | LayerSectionCreateManyInput[]
  }

  /**
   * LayerSection update
   */
  export type LayerSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSection
     */
    select?: LayerSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a LayerSection.
     */
    data: XOR<LayerSectionUpdateInput, LayerSectionUncheckedUpdateInput>
    /**
     * Choose, which LayerSection to update.
     */
    where: LayerSectionWhereUniqueInput
  }

  /**
   * LayerSection updateMany
   */
  export type LayerSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LayerSections.
     */
    data: XOR<LayerSectionUpdateManyMutationInput, LayerSectionUncheckedUpdateManyInput>
    /**
     * Filter which LayerSections to update
     */
    where?: LayerSectionWhereInput
  }

  /**
   * LayerSection upsert
   */
  export type LayerSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSection
     */
    select?: LayerSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the LayerSection to update in case it exists.
     */
    where: LayerSectionWhereUniqueInput
    /**
     * In case the LayerSection found by the `where` argument doesn't exist, create a new LayerSection with this data.
     */
    create: XOR<LayerSectionCreateInput, LayerSectionUncheckedCreateInput>
    /**
     * In case the LayerSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayerSectionUpdateInput, LayerSectionUncheckedUpdateInput>
  }

  /**
   * LayerSection delete
   */
  export type LayerSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSection
     */
    select?: LayerSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerSectionInclude<ExtArgs> | null
    /**
     * Filter which LayerSection to delete.
     */
    where: LayerSectionWhereUniqueInput
  }

  /**
   * LayerSection deleteMany
   */
  export type LayerSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayerSections to delete
     */
    where?: LayerSectionWhereInput
  }

  /**
   * LayerSection findRaw
   */
  export type LayerSectionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LayerSection aggregateRaw
   */
  export type LayerSectionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LayerSection.layerGroups
   */
  export type LayerSection$layerGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    where?: LayerGroupWhereInput
    orderBy?: LayerGroupOrderByWithRelationInput | LayerGroupOrderByWithRelationInput[]
    cursor?: LayerGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayerGroupScalarFieldEnum | LayerGroupScalarFieldEnum[]
  }

  /**
   * LayerSection without action
   */
  export type LayerSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerSection
     */
    select?: LayerSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerSectionInclude<ExtArgs> | null
  }


  /**
   * Model LayerGroup
   */

  export type AggregateLayerGroup = {
    _count: LayerGroupCountAggregateOutputType | null
    _avg: LayerGroupAvgAggregateOutputType | null
    _sum: LayerGroupSumAggregateOutputType | null
    _min: LayerGroupMinAggregateOutputType | null
    _max: LayerGroupMaxAggregateOutputType | null
  }

  export type LayerGroupAvgAggregateOutputType = {
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    order: number | null
  }

  export type LayerGroupSumAggregateOutputType = {
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    order: number | null
  }

  export type LayerGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    layerSectionId: string | null
    longitude: string | null
    latitude: string | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    order: number | null
    infoId: string | null
  }

  export type LayerGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    layerSectionId: string | null
    longitude: string | null
    latitude: string | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    order: number | null
    infoId: string | null
  }

  export type LayerGroupCountAggregateOutputType = {
    id: number
    name: number
    layerSectionId: number
    longitude: number
    latitude: number
    zoom: number
    bearing: number
    topLeftBoundLatitude: number
    topLeftBoundLongitude: number
    bottomRightBoundLatitude: number
    bottomRightBoundLongitude: number
    zoomToBounds: number
    order: number
    infoId: number
    _all: number
  }


  export type LayerGroupAvgAggregateInputType = {
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    order?: true
  }

  export type LayerGroupSumAggregateInputType = {
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    order?: true
  }

  export type LayerGroupMinAggregateInputType = {
    id?: true
    name?: true
    layerSectionId?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    order?: true
    infoId?: true
  }

  export type LayerGroupMaxAggregateInputType = {
    id?: true
    name?: true
    layerSectionId?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    order?: true
    infoId?: true
  }

  export type LayerGroupCountAggregateInputType = {
    id?: true
    name?: true
    layerSectionId?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    order?: true
    infoId?: true
    _all?: true
  }

  export type LayerGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayerGroup to aggregate.
     */
    where?: LayerGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerGroups to fetch.
     */
    orderBy?: LayerGroupOrderByWithRelationInput | LayerGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayerGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LayerGroups
    **/
    _count?: true | LayerGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayerGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayerGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayerGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayerGroupMaxAggregateInputType
  }

  export type GetLayerGroupAggregateType<T extends LayerGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateLayerGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayerGroup[P]>
      : GetScalarType<T[P], AggregateLayerGroup[P]>
  }




  export type LayerGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerGroupWhereInput
    orderBy?: LayerGroupOrderByWithAggregationInput | LayerGroupOrderByWithAggregationInput[]
    by: LayerGroupScalarFieldEnum[] | LayerGroupScalarFieldEnum
    having?: LayerGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayerGroupCountAggregateInputType | true
    _avg?: LayerGroupAvgAggregateInputType
    _sum?: LayerGroupSumAggregateInputType
    _min?: LayerGroupMinAggregateInputType
    _max?: LayerGroupMaxAggregateInputType
  }

  export type LayerGroupGroupByOutputType = {
    id: string
    name: string
    layerSectionId: string
    longitude: string | null
    latitude: string | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    order: number
    infoId: string | null
    _count: LayerGroupCountAggregateOutputType | null
    _avg: LayerGroupAvgAggregateOutputType | null
    _sum: LayerGroupSumAggregateOutputType | null
    _min: LayerGroupMinAggregateOutputType | null
    _max: LayerGroupMaxAggregateOutputType | null
  }

  type GetLayerGroupGroupByPayload<T extends LayerGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayerGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayerGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayerGroupGroupByOutputType[P]>
            : GetScalarType<T[P], LayerGroupGroupByOutputType[P]>
        }
      >
    >


  export type LayerGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    layerSectionId?: boolean
    longitude?: boolean
    latitude?: boolean
    zoom?: boolean
    bearing?: boolean
    topLeftBoundLatitude?: boolean
    topLeftBoundLongitude?: boolean
    bottomRightBoundLatitude?: boolean
    bottomRightBoundLongitude?: boolean
    zoomToBounds?: boolean
    order?: boolean
    infoId?: boolean
    layers?: boolean | LayerGroup$layersArgs<ExtArgs>
    layerSection?: boolean | LayerSectionDefaultArgs<ExtArgs>
    _count?: boolean | LayerGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layerGroup"]>


  export type LayerGroupSelectScalar = {
    id?: boolean
    name?: boolean
    layerSectionId?: boolean
    longitude?: boolean
    latitude?: boolean
    zoom?: boolean
    bearing?: boolean
    topLeftBoundLatitude?: boolean
    topLeftBoundLongitude?: boolean
    bottomRightBoundLatitude?: boolean
    bottomRightBoundLongitude?: boolean
    zoomToBounds?: boolean
    order?: boolean
    infoId?: boolean
  }

  export type LayerGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layers?: boolean | LayerGroup$layersArgs<ExtArgs>
    layerSection?: boolean | LayerSectionDefaultArgs<ExtArgs>
    _count?: boolean | LayerGroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LayerGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LayerGroup"
    objects: {
      layers: Prisma.$LayerDataPayload<ExtArgs>[]
      layerSection: Prisma.$LayerSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      layerSectionId: string
      longitude: string | null
      latitude: string | null
      zoom: number | null
      bearing: number | null
      topLeftBoundLatitude: number | null
      topLeftBoundLongitude: number | null
      bottomRightBoundLatitude: number | null
      bottomRightBoundLongitude: number | null
      zoomToBounds: boolean | null
      order: number
      infoId: string | null
    }, ExtArgs["result"]["layerGroup"]>
    composites: {}
  }

  type LayerGroupGetPayload<S extends boolean | null | undefined | LayerGroupDefaultArgs> = $Result.GetResult<Prisma.$LayerGroupPayload, S>

  type LayerGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LayerGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LayerGroupCountAggregateInputType | true
    }

  export interface LayerGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LayerGroup'], meta: { name: 'LayerGroup' } }
    /**
     * Find zero or one LayerGroup that matches the filter.
     * @param {LayerGroupFindUniqueArgs} args - Arguments to find a LayerGroup
     * @example
     * // Get one LayerGroup
     * const layerGroup = await prisma.layerGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayerGroupFindUniqueArgs>(args: SelectSubset<T, LayerGroupFindUniqueArgs<ExtArgs>>): Prisma__LayerGroupClient<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LayerGroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LayerGroupFindUniqueOrThrowArgs} args - Arguments to find a LayerGroup
     * @example
     * // Get one LayerGroup
     * const layerGroup = await prisma.layerGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayerGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, LayerGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayerGroupClient<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LayerGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerGroupFindFirstArgs} args - Arguments to find a LayerGroup
     * @example
     * // Get one LayerGroup
     * const layerGroup = await prisma.layerGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayerGroupFindFirstArgs>(args?: SelectSubset<T, LayerGroupFindFirstArgs<ExtArgs>>): Prisma__LayerGroupClient<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LayerGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerGroupFindFirstOrThrowArgs} args - Arguments to find a LayerGroup
     * @example
     * // Get one LayerGroup
     * const layerGroup = await prisma.layerGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayerGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, LayerGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayerGroupClient<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LayerGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LayerGroups
     * const layerGroups = await prisma.layerGroup.findMany()
     * 
     * // Get first 10 LayerGroups
     * const layerGroups = await prisma.layerGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layerGroupWithIdOnly = await prisma.layerGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayerGroupFindManyArgs>(args?: SelectSubset<T, LayerGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LayerGroup.
     * @param {LayerGroupCreateArgs} args - Arguments to create a LayerGroup.
     * @example
     * // Create one LayerGroup
     * const LayerGroup = await prisma.layerGroup.create({
     *   data: {
     *     // ... data to create a LayerGroup
     *   }
     * })
     * 
     */
    create<T extends LayerGroupCreateArgs>(args: SelectSubset<T, LayerGroupCreateArgs<ExtArgs>>): Prisma__LayerGroupClient<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LayerGroups.
     * @param {LayerGroupCreateManyArgs} args - Arguments to create many LayerGroups.
     * @example
     * // Create many LayerGroups
     * const layerGroup = await prisma.layerGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayerGroupCreateManyArgs>(args?: SelectSubset<T, LayerGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LayerGroup.
     * @param {LayerGroupDeleteArgs} args - Arguments to delete one LayerGroup.
     * @example
     * // Delete one LayerGroup
     * const LayerGroup = await prisma.layerGroup.delete({
     *   where: {
     *     // ... filter to delete one LayerGroup
     *   }
     * })
     * 
     */
    delete<T extends LayerGroupDeleteArgs>(args: SelectSubset<T, LayerGroupDeleteArgs<ExtArgs>>): Prisma__LayerGroupClient<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LayerGroup.
     * @param {LayerGroupUpdateArgs} args - Arguments to update one LayerGroup.
     * @example
     * // Update one LayerGroup
     * const layerGroup = await prisma.layerGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayerGroupUpdateArgs>(args: SelectSubset<T, LayerGroupUpdateArgs<ExtArgs>>): Prisma__LayerGroupClient<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LayerGroups.
     * @param {LayerGroupDeleteManyArgs} args - Arguments to filter LayerGroups to delete.
     * @example
     * // Delete a few LayerGroups
     * const { count } = await prisma.layerGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayerGroupDeleteManyArgs>(args?: SelectSubset<T, LayerGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayerGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LayerGroups
     * const layerGroup = await prisma.layerGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayerGroupUpdateManyArgs>(args: SelectSubset<T, LayerGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LayerGroup.
     * @param {LayerGroupUpsertArgs} args - Arguments to update or create a LayerGroup.
     * @example
     * // Update or create a LayerGroup
     * const layerGroup = await prisma.layerGroup.upsert({
     *   create: {
     *     // ... data to create a LayerGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LayerGroup we want to update
     *   }
     * })
     */
    upsert<T extends LayerGroupUpsertArgs>(args: SelectSubset<T, LayerGroupUpsertArgs<ExtArgs>>): Prisma__LayerGroupClient<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more LayerGroups that matches the filter.
     * @param {LayerGroupFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const layerGroup = await prisma.layerGroup.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: LayerGroupFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LayerGroup.
     * @param {LayerGroupAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const layerGroup = await prisma.layerGroup.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LayerGroupAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LayerGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerGroupCountArgs} args - Arguments to filter LayerGroups to count.
     * @example
     * // Count the number of LayerGroups
     * const count = await prisma.layerGroup.count({
     *   where: {
     *     // ... the filter for the LayerGroups we want to count
     *   }
     * })
    **/
    count<T extends LayerGroupCountArgs>(
      args?: Subset<T, LayerGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayerGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LayerGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayerGroupAggregateArgs>(args: Subset<T, LayerGroupAggregateArgs>): Prisma.PrismaPromise<GetLayerGroupAggregateType<T>>

    /**
     * Group by LayerGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerGroupGroupByArgs} args - Group by arguments.
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
      T extends LayerGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayerGroupGroupByArgs['orderBy'] }
        : { orderBy?: LayerGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LayerGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayerGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LayerGroup model
   */
  readonly fields: LayerGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LayerGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayerGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    layers<T extends LayerGroup$layersArgs<ExtArgs> = {}>(args?: Subset<T, LayerGroup$layersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerDataPayload<ExtArgs>, T, "findMany"> | Null>
    layerSection<T extends LayerSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LayerSectionDefaultArgs<ExtArgs>>): Prisma__LayerSectionClient<$Result.GetResult<Prisma.$LayerSectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the LayerGroup model
   */ 
  interface LayerGroupFieldRefs {
    readonly id: FieldRef<"LayerGroup", 'String'>
    readonly name: FieldRef<"LayerGroup", 'String'>
    readonly layerSectionId: FieldRef<"LayerGroup", 'String'>
    readonly longitude: FieldRef<"LayerGroup", 'String'>
    readonly latitude: FieldRef<"LayerGroup", 'String'>
    readonly zoom: FieldRef<"LayerGroup", 'Float'>
    readonly bearing: FieldRef<"LayerGroup", 'Float'>
    readonly topLeftBoundLatitude: FieldRef<"LayerGroup", 'Float'>
    readonly topLeftBoundLongitude: FieldRef<"LayerGroup", 'Float'>
    readonly bottomRightBoundLatitude: FieldRef<"LayerGroup", 'Float'>
    readonly bottomRightBoundLongitude: FieldRef<"LayerGroup", 'Float'>
    readonly zoomToBounds: FieldRef<"LayerGroup", 'Boolean'>
    readonly order: FieldRef<"LayerGroup", 'Int'>
    readonly infoId: FieldRef<"LayerGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LayerGroup findUnique
   */
  export type LayerGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    /**
     * Filter, which LayerGroup to fetch.
     */
    where: LayerGroupWhereUniqueInput
  }

  /**
   * LayerGroup findUniqueOrThrow
   */
  export type LayerGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    /**
     * Filter, which LayerGroup to fetch.
     */
    where: LayerGroupWhereUniqueInput
  }

  /**
   * LayerGroup findFirst
   */
  export type LayerGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    /**
     * Filter, which LayerGroup to fetch.
     */
    where?: LayerGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerGroups to fetch.
     */
    orderBy?: LayerGroupOrderByWithRelationInput | LayerGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayerGroups.
     */
    cursor?: LayerGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayerGroups.
     */
    distinct?: LayerGroupScalarFieldEnum | LayerGroupScalarFieldEnum[]
  }

  /**
   * LayerGroup findFirstOrThrow
   */
  export type LayerGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    /**
     * Filter, which LayerGroup to fetch.
     */
    where?: LayerGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerGroups to fetch.
     */
    orderBy?: LayerGroupOrderByWithRelationInput | LayerGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayerGroups.
     */
    cursor?: LayerGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayerGroups.
     */
    distinct?: LayerGroupScalarFieldEnum | LayerGroupScalarFieldEnum[]
  }

  /**
   * LayerGroup findMany
   */
  export type LayerGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    /**
     * Filter, which LayerGroups to fetch.
     */
    where?: LayerGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerGroups to fetch.
     */
    orderBy?: LayerGroupOrderByWithRelationInput | LayerGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LayerGroups.
     */
    cursor?: LayerGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerGroups.
     */
    skip?: number
    distinct?: LayerGroupScalarFieldEnum | LayerGroupScalarFieldEnum[]
  }

  /**
   * LayerGroup create
   */
  export type LayerGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a LayerGroup.
     */
    data: XOR<LayerGroupCreateInput, LayerGroupUncheckedCreateInput>
  }

  /**
   * LayerGroup createMany
   */
  export type LayerGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LayerGroups.
     */
    data: LayerGroupCreateManyInput | LayerGroupCreateManyInput[]
  }

  /**
   * LayerGroup update
   */
  export type LayerGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a LayerGroup.
     */
    data: XOR<LayerGroupUpdateInput, LayerGroupUncheckedUpdateInput>
    /**
     * Choose, which LayerGroup to update.
     */
    where: LayerGroupWhereUniqueInput
  }

  /**
   * LayerGroup updateMany
   */
  export type LayerGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LayerGroups.
     */
    data: XOR<LayerGroupUpdateManyMutationInput, LayerGroupUncheckedUpdateManyInput>
    /**
     * Filter which LayerGroups to update
     */
    where?: LayerGroupWhereInput
  }

  /**
   * LayerGroup upsert
   */
  export type LayerGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the LayerGroup to update in case it exists.
     */
    where: LayerGroupWhereUniqueInput
    /**
     * In case the LayerGroup found by the `where` argument doesn't exist, create a new LayerGroup with this data.
     */
    create: XOR<LayerGroupCreateInput, LayerGroupUncheckedCreateInput>
    /**
     * In case the LayerGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayerGroupUpdateInput, LayerGroupUncheckedUpdateInput>
  }

  /**
   * LayerGroup delete
   */
  export type LayerGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    /**
     * Filter which LayerGroup to delete.
     */
    where: LayerGroupWhereUniqueInput
  }

  /**
   * LayerGroup deleteMany
   */
  export type LayerGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayerGroups to delete
     */
    where?: LayerGroupWhereInput
  }

  /**
   * LayerGroup findRaw
   */
  export type LayerGroupFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LayerGroup aggregateRaw
   */
  export type LayerGroupAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LayerGroup.layers
   */
  export type LayerGroup$layersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
    where?: LayerDataWhereInput
    orderBy?: LayerDataOrderByWithRelationInput | LayerDataOrderByWithRelationInput[]
    cursor?: LayerDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayerDataScalarFieldEnum | LayerDataScalarFieldEnum[]
  }

  /**
   * LayerGroup without action
   */
  export type LayerGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
  }


  /**
   * Model LayerData
   */

  export type AggregateLayerData = {
    _count: LayerDataCountAggregateOutputType | null
    _avg: LayerDataAvgAggregateOutputType | null
    _sum: LayerDataSumAggregateOutputType | null
    _min: LayerDataMinAggregateOutputType | null
    _max: LayerDataMaxAggregateOutputType | null
  }

  export type LayerDataAvgAggregateOutputType = {
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    order: number | null
    viewOrder: number | null
  }

  export type LayerDataSumAggregateOutputType = {
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    order: number | null
    viewOrder: number | null
  }

  export type LayerDataMinAggregateOutputType = {
    id: string | null
    name: string | null
    iconColor: string | null
    iconType: string | null
    label: string | null
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    enableByDefault: boolean | null
    topLayerClass: string | null
    infoId: string | null
    type: string | null
    sourceType: string | null
    sourceUrl: string | null
    sourceId: string | null
    paint: string | null
    layout: string | null
    sourceLayer: string | null
    hover: boolean | null
    time: boolean | null
    click: boolean | null
    hoverStyle: string | null
    clickStyle: string | null
    clickHeader: string | null
    order: number | null
    viewOrder: number | null
    standalone: boolean | null
    layerSection: string | null
  }

  export type LayerDataMaxAggregateOutputType = {
    id: string | null
    name: string | null
    iconColor: string | null
    iconType: string | null
    label: string | null
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    enableByDefault: boolean | null
    topLayerClass: string | null
    infoId: string | null
    type: string | null
    sourceType: string | null
    sourceUrl: string | null
    sourceId: string | null
    paint: string | null
    layout: string | null
    sourceLayer: string | null
    hover: boolean | null
    time: boolean | null
    click: boolean | null
    hoverStyle: string | null
    clickStyle: string | null
    clickHeader: string | null
    order: number | null
    viewOrder: number | null
    standalone: boolean | null
    layerSection: string | null
  }

  export type LayerDataCountAggregateOutputType = {
    id: number
    name: number
    iconColor: number
    iconType: number
    label: number
    longitude: number
    latitude: number
    zoom: number
    bearing: number
    topLeftBoundLatitude: number
    topLeftBoundLongitude: number
    bottomRightBoundLatitude: number
    bottomRightBoundLongitude: number
    zoomToBounds: number
    enableByDefault: number
    topLayerClass: number
    infoId: number
    type: number
    sourceType: number
    sourceUrl: number
    sourceId: number
    paint: number
    layout: number
    sourceLayer: number
    hover: number
    time: number
    click: number
    hoverStyle: number
    clickStyle: number
    clickHeader: number
    textZoomLevels: number
    zoomLevels: number
    order: number
    viewOrder: number
    standalone: number
    layerSection: number
    _all: number
  }


  export type LayerDataAvgAggregateInputType = {
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    order?: true
    viewOrder?: true
  }

  export type LayerDataSumAggregateInputType = {
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    order?: true
    viewOrder?: true
  }

  export type LayerDataMinAggregateInputType = {
    id?: true
    name?: true
    iconColor?: true
    iconType?: true
    label?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    enableByDefault?: true
    topLayerClass?: true
    infoId?: true
    type?: true
    sourceType?: true
    sourceUrl?: true
    sourceId?: true
    paint?: true
    layout?: true
    sourceLayer?: true
    hover?: true
    time?: true
    click?: true
    hoverStyle?: true
    clickStyle?: true
    clickHeader?: true
    order?: true
    viewOrder?: true
    standalone?: true
    layerSection?: true
  }

  export type LayerDataMaxAggregateInputType = {
    id?: true
    name?: true
    iconColor?: true
    iconType?: true
    label?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    enableByDefault?: true
    topLayerClass?: true
    infoId?: true
    type?: true
    sourceType?: true
    sourceUrl?: true
    sourceId?: true
    paint?: true
    layout?: true
    sourceLayer?: true
    hover?: true
    time?: true
    click?: true
    hoverStyle?: true
    clickStyle?: true
    clickHeader?: true
    order?: true
    viewOrder?: true
    standalone?: true
    layerSection?: true
  }

  export type LayerDataCountAggregateInputType = {
    id?: true
    name?: true
    iconColor?: true
    iconType?: true
    label?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    topLeftBoundLatitude?: true
    topLeftBoundLongitude?: true
    bottomRightBoundLatitude?: true
    bottomRightBoundLongitude?: true
    zoomToBounds?: true
    enableByDefault?: true
    topLayerClass?: true
    infoId?: true
    type?: true
    sourceType?: true
    sourceUrl?: true
    sourceId?: true
    paint?: true
    layout?: true
    sourceLayer?: true
    hover?: true
    time?: true
    click?: true
    hoverStyle?: true
    clickStyle?: true
    clickHeader?: true
    textZoomLevels?: true
    zoomLevels?: true
    order?: true
    viewOrder?: true
    standalone?: true
    layerSection?: true
    _all?: true
  }

  export type LayerDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayerData to aggregate.
     */
    where?: LayerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerData to fetch.
     */
    orderBy?: LayerDataOrderByWithRelationInput | LayerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LayerData
    **/
    _count?: true | LayerDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayerDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayerDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayerDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayerDataMaxAggregateInputType
  }

  export type GetLayerDataAggregateType<T extends LayerDataAggregateArgs> = {
        [P in keyof T & keyof AggregateLayerData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayerData[P]>
      : GetScalarType<T[P], AggregateLayerData[P]>
  }




  export type LayerDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerDataWhereInput
    orderBy?: LayerDataOrderByWithAggregationInput | LayerDataOrderByWithAggregationInput[]
    by: LayerDataScalarFieldEnum[] | LayerDataScalarFieldEnum
    having?: LayerDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayerDataCountAggregateInputType | true
    _avg?: LayerDataAvgAggregateInputType
    _sum?: LayerDataSumAggregateInputType
    _min?: LayerDataMinAggregateInputType
    _max?: LayerDataMaxAggregateInputType
  }

  export type LayerDataGroupByOutputType = {
    id: string
    name: string
    iconColor: string
    iconType: string
    label: string
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    topLeftBoundLatitude: number | null
    topLeftBoundLongitude: number | null
    bottomRightBoundLatitude: number | null
    bottomRightBoundLongitude: number | null
    zoomToBounds: boolean | null
    enableByDefault: boolean | null
    topLayerClass: string | null
    infoId: string | null
    type: string
    sourceType: string
    sourceUrl: string
    sourceId: string
    paint: string | null
    layout: string | null
    sourceLayer: string
    hover: boolean
    time: boolean
    click: boolean
    hoverStyle: string | null
    clickStyle: string | null
    clickHeader: string | null
    textZoomLevels: JsonValue | null
    zoomLevels: JsonValue | null
    order: number
    viewOrder: number | null
    standalone: boolean
    layerSection: string | null
    _count: LayerDataCountAggregateOutputType | null
    _avg: LayerDataAvgAggregateOutputType | null
    _sum: LayerDataSumAggregateOutputType | null
    _min: LayerDataMinAggregateOutputType | null
    _max: LayerDataMaxAggregateOutputType | null
  }

  type GetLayerDataGroupByPayload<T extends LayerDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayerDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayerDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayerDataGroupByOutputType[P]>
            : GetScalarType<T[P], LayerDataGroupByOutputType[P]>
        }
      >
    >


  export type LayerDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconColor?: boolean
    iconType?: boolean
    label?: boolean
    longitude?: boolean
    latitude?: boolean
    zoom?: boolean
    bearing?: boolean
    topLeftBoundLatitude?: boolean
    topLeftBoundLongitude?: boolean
    bottomRightBoundLatitude?: boolean
    bottomRightBoundLongitude?: boolean
    zoomToBounds?: boolean
    enableByDefault?: boolean
    topLayerClass?: boolean
    infoId?: boolean
    type?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    sourceId?: boolean
    paint?: boolean
    layout?: boolean
    sourceLayer?: boolean
    hover?: boolean
    time?: boolean
    click?: boolean
    hoverStyle?: boolean
    clickStyle?: boolean
    clickHeader?: boolean
    hoverContent?: boolean | hoverItemDefaultArgs<ExtArgs>
    textZoomLevels?: boolean
    zoomLevels?: boolean
    order?: boolean
    viewOrder?: boolean
    standalone?: boolean
    layerSection?: boolean
    groupName?: boolean | LayerData$groupNameArgs<ExtArgs>
  }, ExtArgs["result"]["layerData"]>


  export type LayerDataSelectScalar = {
    id?: boolean
    name?: boolean
    iconColor?: boolean
    iconType?: boolean
    label?: boolean
    longitude?: boolean
    latitude?: boolean
    zoom?: boolean
    bearing?: boolean
    topLeftBoundLatitude?: boolean
    topLeftBoundLongitude?: boolean
    bottomRightBoundLatitude?: boolean
    bottomRightBoundLongitude?: boolean
    zoomToBounds?: boolean
    enableByDefault?: boolean
    topLayerClass?: boolean
    infoId?: boolean
    type?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    sourceId?: boolean
    paint?: boolean
    layout?: boolean
    sourceLayer?: boolean
    hover?: boolean
    time?: boolean
    click?: boolean
    hoverStyle?: boolean
    clickStyle?: boolean
    clickHeader?: boolean
    textZoomLevels?: boolean
    zoomLevels?: boolean
    order?: boolean
    viewOrder?: boolean
    standalone?: boolean
    layerSection?: boolean
  }

  export type LayerDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupName?: boolean | LayerData$groupNameArgs<ExtArgs>
  }

  export type $LayerDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LayerData"
    objects: {
      groupName: Prisma.$LayerGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      iconColor: string
      iconType: string
      label: string
      longitude: number | null
      latitude: number | null
      zoom: number | null
      bearing: number | null
      topLeftBoundLatitude: number | null
      topLeftBoundLongitude: number | null
      bottomRightBoundLatitude: number | null
      bottomRightBoundLongitude: number | null
      zoomToBounds: boolean | null
      enableByDefault: boolean | null
      topLayerClass: string | null
      infoId: string | null
      type: string
      sourceType: string
      sourceUrl: string
      sourceId: string
      paint: string | null
      layout: string | null
      sourceLayer: string
      hover: boolean
      time: boolean
      click: boolean
      hoverStyle: string | null
      clickStyle: string | null
      clickHeader: string | null
      textZoomLevels: Prisma.JsonValue | null
      zoomLevels: Prisma.JsonValue | null
      order: number
      viewOrder: number | null
      standalone: boolean
      layerSection: string | null
    }, ExtArgs["result"]["layerData"]>
    composites: {
      hoverContent: Prisma.$hoverItemPayload[]
    }
  }

  type LayerDataGetPayload<S extends boolean | null | undefined | LayerDataDefaultArgs> = $Result.GetResult<Prisma.$LayerDataPayload, S>

  type LayerDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LayerDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LayerDataCountAggregateInputType | true
    }

  export interface LayerDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LayerData'], meta: { name: 'LayerData' } }
    /**
     * Find zero or one LayerData that matches the filter.
     * @param {LayerDataFindUniqueArgs} args - Arguments to find a LayerData
     * @example
     * // Get one LayerData
     * const layerData = await prisma.layerData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayerDataFindUniqueArgs>(args: SelectSubset<T, LayerDataFindUniqueArgs<ExtArgs>>): Prisma__LayerDataClient<$Result.GetResult<Prisma.$LayerDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LayerData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LayerDataFindUniqueOrThrowArgs} args - Arguments to find a LayerData
     * @example
     * // Get one LayerData
     * const layerData = await prisma.layerData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayerDataFindUniqueOrThrowArgs>(args: SelectSubset<T, LayerDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayerDataClient<$Result.GetResult<Prisma.$LayerDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LayerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerDataFindFirstArgs} args - Arguments to find a LayerData
     * @example
     * // Get one LayerData
     * const layerData = await prisma.layerData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayerDataFindFirstArgs>(args?: SelectSubset<T, LayerDataFindFirstArgs<ExtArgs>>): Prisma__LayerDataClient<$Result.GetResult<Prisma.$LayerDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LayerData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerDataFindFirstOrThrowArgs} args - Arguments to find a LayerData
     * @example
     * // Get one LayerData
     * const layerData = await prisma.layerData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayerDataFindFirstOrThrowArgs>(args?: SelectSubset<T, LayerDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayerDataClient<$Result.GetResult<Prisma.$LayerDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LayerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LayerData
     * const layerData = await prisma.layerData.findMany()
     * 
     * // Get first 10 LayerData
     * const layerData = await prisma.layerData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layerDataWithIdOnly = await prisma.layerData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayerDataFindManyArgs>(args?: SelectSubset<T, LayerDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LayerData.
     * @param {LayerDataCreateArgs} args - Arguments to create a LayerData.
     * @example
     * // Create one LayerData
     * const LayerData = await prisma.layerData.create({
     *   data: {
     *     // ... data to create a LayerData
     *   }
     * })
     * 
     */
    create<T extends LayerDataCreateArgs>(args: SelectSubset<T, LayerDataCreateArgs<ExtArgs>>): Prisma__LayerDataClient<$Result.GetResult<Prisma.$LayerDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LayerData.
     * @param {LayerDataCreateManyArgs} args - Arguments to create many LayerData.
     * @example
     * // Create many LayerData
     * const layerData = await prisma.layerData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayerDataCreateManyArgs>(args?: SelectSubset<T, LayerDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LayerData.
     * @param {LayerDataDeleteArgs} args - Arguments to delete one LayerData.
     * @example
     * // Delete one LayerData
     * const LayerData = await prisma.layerData.delete({
     *   where: {
     *     // ... filter to delete one LayerData
     *   }
     * })
     * 
     */
    delete<T extends LayerDataDeleteArgs>(args: SelectSubset<T, LayerDataDeleteArgs<ExtArgs>>): Prisma__LayerDataClient<$Result.GetResult<Prisma.$LayerDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LayerData.
     * @param {LayerDataUpdateArgs} args - Arguments to update one LayerData.
     * @example
     * // Update one LayerData
     * const layerData = await prisma.layerData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayerDataUpdateArgs>(args: SelectSubset<T, LayerDataUpdateArgs<ExtArgs>>): Prisma__LayerDataClient<$Result.GetResult<Prisma.$LayerDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LayerData.
     * @param {LayerDataDeleteManyArgs} args - Arguments to filter LayerData to delete.
     * @example
     * // Delete a few LayerData
     * const { count } = await prisma.layerData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayerDataDeleteManyArgs>(args?: SelectSubset<T, LayerDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LayerData
     * const layerData = await prisma.layerData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayerDataUpdateManyArgs>(args: SelectSubset<T, LayerDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LayerData.
     * @param {LayerDataUpsertArgs} args - Arguments to update or create a LayerData.
     * @example
     * // Update or create a LayerData
     * const layerData = await prisma.layerData.upsert({
     *   create: {
     *     // ... data to create a LayerData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LayerData we want to update
     *   }
     * })
     */
    upsert<T extends LayerDataUpsertArgs>(args: SelectSubset<T, LayerDataUpsertArgs<ExtArgs>>): Prisma__LayerDataClient<$Result.GetResult<Prisma.$LayerDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more LayerData that matches the filter.
     * @param {LayerDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const layerData = await prisma.layerData.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: LayerDataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LayerData.
     * @param {LayerDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const layerData = await prisma.layerData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LayerDataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LayerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerDataCountArgs} args - Arguments to filter LayerData to count.
     * @example
     * // Count the number of LayerData
     * const count = await prisma.layerData.count({
     *   where: {
     *     // ... the filter for the LayerData we want to count
     *   }
     * })
    **/
    count<T extends LayerDataCountArgs>(
      args?: Subset<T, LayerDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayerDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LayerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayerDataAggregateArgs>(args: Subset<T, LayerDataAggregateArgs>): Prisma.PrismaPromise<GetLayerDataAggregateType<T>>

    /**
     * Group by LayerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerDataGroupByArgs} args - Group by arguments.
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
      T extends LayerDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayerDataGroupByArgs['orderBy'] }
        : { orderBy?: LayerDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LayerDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayerDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LayerData model
   */
  readonly fields: LayerDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LayerData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayerDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupName<T extends LayerData$groupNameArgs<ExtArgs> = {}>(args?: Subset<T, LayerData$groupNameArgs<ExtArgs>>): Prisma__LayerGroupClient<$Result.GetResult<Prisma.$LayerGroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the LayerData model
   */ 
  interface LayerDataFieldRefs {
    readonly id: FieldRef<"LayerData", 'String'>
    readonly name: FieldRef<"LayerData", 'String'>
    readonly iconColor: FieldRef<"LayerData", 'String'>
    readonly iconType: FieldRef<"LayerData", 'String'>
    readonly label: FieldRef<"LayerData", 'String'>
    readonly longitude: FieldRef<"LayerData", 'Float'>
    readonly latitude: FieldRef<"LayerData", 'Float'>
    readonly zoom: FieldRef<"LayerData", 'Float'>
    readonly bearing: FieldRef<"LayerData", 'Float'>
    readonly topLeftBoundLatitude: FieldRef<"LayerData", 'Float'>
    readonly topLeftBoundLongitude: FieldRef<"LayerData", 'Float'>
    readonly bottomRightBoundLatitude: FieldRef<"LayerData", 'Float'>
    readonly bottomRightBoundLongitude: FieldRef<"LayerData", 'Float'>
    readonly zoomToBounds: FieldRef<"LayerData", 'Boolean'>
    readonly enableByDefault: FieldRef<"LayerData", 'Boolean'>
    readonly topLayerClass: FieldRef<"LayerData", 'String'>
    readonly infoId: FieldRef<"LayerData", 'String'>
    readonly type: FieldRef<"LayerData", 'String'>
    readonly sourceType: FieldRef<"LayerData", 'String'>
    readonly sourceUrl: FieldRef<"LayerData", 'String'>
    readonly sourceId: FieldRef<"LayerData", 'String'>
    readonly paint: FieldRef<"LayerData", 'String'>
    readonly layout: FieldRef<"LayerData", 'String'>
    readonly sourceLayer: FieldRef<"LayerData", 'String'>
    readonly hover: FieldRef<"LayerData", 'Boolean'>
    readonly time: FieldRef<"LayerData", 'Boolean'>
    readonly click: FieldRef<"LayerData", 'Boolean'>
    readonly hoverStyle: FieldRef<"LayerData", 'String'>
    readonly clickStyle: FieldRef<"LayerData", 'String'>
    readonly clickHeader: FieldRef<"LayerData", 'String'>
    readonly textZoomLevels: FieldRef<"LayerData", 'Json'>
    readonly zoomLevels: FieldRef<"LayerData", 'Json'>
    readonly order: FieldRef<"LayerData", 'Int'>
    readonly viewOrder: FieldRef<"LayerData", 'Int'>
    readonly standalone: FieldRef<"LayerData", 'Boolean'>
    readonly layerSection: FieldRef<"LayerData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LayerData findUnique
   */
  export type LayerDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
    /**
     * Filter, which LayerData to fetch.
     */
    where: LayerDataWhereUniqueInput
  }

  /**
   * LayerData findUniqueOrThrow
   */
  export type LayerDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
    /**
     * Filter, which LayerData to fetch.
     */
    where: LayerDataWhereUniqueInput
  }

  /**
   * LayerData findFirst
   */
  export type LayerDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
    /**
     * Filter, which LayerData to fetch.
     */
    where?: LayerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerData to fetch.
     */
    orderBy?: LayerDataOrderByWithRelationInput | LayerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayerData.
     */
    cursor?: LayerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayerData.
     */
    distinct?: LayerDataScalarFieldEnum | LayerDataScalarFieldEnum[]
  }

  /**
   * LayerData findFirstOrThrow
   */
  export type LayerDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
    /**
     * Filter, which LayerData to fetch.
     */
    where?: LayerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerData to fetch.
     */
    orderBy?: LayerDataOrderByWithRelationInput | LayerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayerData.
     */
    cursor?: LayerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayerData.
     */
    distinct?: LayerDataScalarFieldEnum | LayerDataScalarFieldEnum[]
  }

  /**
   * LayerData findMany
   */
  export type LayerDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
    /**
     * Filter, which LayerData to fetch.
     */
    where?: LayerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerData to fetch.
     */
    orderBy?: LayerDataOrderByWithRelationInput | LayerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LayerData.
     */
    cursor?: LayerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerData.
     */
    skip?: number
    distinct?: LayerDataScalarFieldEnum | LayerDataScalarFieldEnum[]
  }

  /**
   * LayerData create
   */
  export type LayerDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
    /**
     * The data needed to create a LayerData.
     */
    data: XOR<LayerDataCreateInput, LayerDataUncheckedCreateInput>
  }

  /**
   * LayerData createMany
   */
  export type LayerDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LayerData.
     */
    data: LayerDataCreateManyInput | LayerDataCreateManyInput[]
  }

  /**
   * LayerData update
   */
  export type LayerDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
    /**
     * The data needed to update a LayerData.
     */
    data: XOR<LayerDataUpdateInput, LayerDataUncheckedUpdateInput>
    /**
     * Choose, which LayerData to update.
     */
    where: LayerDataWhereUniqueInput
  }

  /**
   * LayerData updateMany
   */
  export type LayerDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LayerData.
     */
    data: XOR<LayerDataUpdateManyMutationInput, LayerDataUncheckedUpdateManyInput>
    /**
     * Filter which LayerData to update
     */
    where?: LayerDataWhereInput
  }

  /**
   * LayerData upsert
   */
  export type LayerDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
    /**
     * The filter to search for the LayerData to update in case it exists.
     */
    where: LayerDataWhereUniqueInput
    /**
     * In case the LayerData found by the `where` argument doesn't exist, create a new LayerData with this data.
     */
    create: XOR<LayerDataCreateInput, LayerDataUncheckedCreateInput>
    /**
     * In case the LayerData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayerDataUpdateInput, LayerDataUncheckedUpdateInput>
  }

  /**
   * LayerData delete
   */
  export type LayerDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
    /**
     * Filter which LayerData to delete.
     */
    where: LayerDataWhereUniqueInput
  }

  /**
   * LayerData deleteMany
   */
  export type LayerDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayerData to delete
     */
    where?: LayerDataWhereInput
  }

  /**
   * LayerData findRaw
   */
  export type LayerDataFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LayerData aggregateRaw
   */
  export type LayerDataAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LayerData.groupName
   */
  export type LayerData$groupNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerGroup
     */
    select?: LayerGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerGroupInclude<ExtArgs> | null
    where?: LayerGroupWhereInput
  }

  /**
   * LayerData without action
   */
  export type LayerDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerData
     */
    select?: LayerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerDataInclude<ExtArgs> | null
  }


  /**
   * Model ViewOrderCounter
   */

  export type AggregateViewOrderCounter = {
    _count: ViewOrderCounterCountAggregateOutputType | null
    _min: ViewOrderCounterMinAggregateOutputType | null
    _max: ViewOrderCounterMaxAggregateOutputType | null
  }

  export type ViewOrderCounterMinAggregateOutputType = {
    id: string | null
  }

  export type ViewOrderCounterMaxAggregateOutputType = {
    id: string | null
  }

  export type ViewOrderCounterCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ViewOrderCounterMinAggregateInputType = {
    id?: true
  }

  export type ViewOrderCounterMaxAggregateInputType = {
    id?: true
  }

  export type ViewOrderCounterCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ViewOrderCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewOrderCounter to aggregate.
     */
    where?: ViewOrderCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewOrderCounters to fetch.
     */
    orderBy?: ViewOrderCounterOrderByWithRelationInput | ViewOrderCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewOrderCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewOrderCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewOrderCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewOrderCounters
    **/
    _count?: true | ViewOrderCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewOrderCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewOrderCounterMaxAggregateInputType
  }

  export type GetViewOrderCounterAggregateType<T extends ViewOrderCounterAggregateArgs> = {
        [P in keyof T & keyof AggregateViewOrderCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewOrderCounter[P]>
      : GetScalarType<T[P], AggregateViewOrderCounter[P]>
  }




  export type ViewOrderCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewOrderCounterWhereInput
    orderBy?: ViewOrderCounterOrderByWithAggregationInput | ViewOrderCounterOrderByWithAggregationInput[]
    by: ViewOrderCounterScalarFieldEnum[] | ViewOrderCounterScalarFieldEnum
    having?: ViewOrderCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewOrderCounterCountAggregateInputType | true
    _min?: ViewOrderCounterMinAggregateInputType
    _max?: ViewOrderCounterMaxAggregateInputType
  }

  export type ViewOrderCounterGroupByOutputType = {
    id: string
    _count: ViewOrderCounterCountAggregateOutputType | null
    _min: ViewOrderCounterMinAggregateOutputType | null
    _max: ViewOrderCounterMaxAggregateOutputType | null
  }

  type GetViewOrderCounterGroupByPayload<T extends ViewOrderCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewOrderCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewOrderCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewOrderCounterGroupByOutputType[P]>
            : GetScalarType<T[P], ViewOrderCounterGroupByOutputType[P]>
        }
      >
    >


  export type ViewOrderCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["viewOrderCounter"]>


  export type ViewOrderCounterSelectScalar = {
    id?: boolean
  }


  export type $ViewOrderCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewOrderCounter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["viewOrderCounter"]>
    composites: {}
  }

  type ViewOrderCounterGetPayload<S extends boolean | null | undefined | ViewOrderCounterDefaultArgs> = $Result.GetResult<Prisma.$ViewOrderCounterPayload, S>

  type ViewOrderCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ViewOrderCounterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ViewOrderCounterCountAggregateInputType | true
    }

  export interface ViewOrderCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewOrderCounter'], meta: { name: 'ViewOrderCounter' } }
    /**
     * Find zero or one ViewOrderCounter that matches the filter.
     * @param {ViewOrderCounterFindUniqueArgs} args - Arguments to find a ViewOrderCounter
     * @example
     * // Get one ViewOrderCounter
     * const viewOrderCounter = await prisma.viewOrderCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewOrderCounterFindUniqueArgs>(args: SelectSubset<T, ViewOrderCounterFindUniqueArgs<ExtArgs>>): Prisma__ViewOrderCounterClient<$Result.GetResult<Prisma.$ViewOrderCounterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ViewOrderCounter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ViewOrderCounterFindUniqueOrThrowArgs} args - Arguments to find a ViewOrderCounter
     * @example
     * // Get one ViewOrderCounter
     * const viewOrderCounter = await prisma.viewOrderCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewOrderCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewOrderCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewOrderCounterClient<$Result.GetResult<Prisma.$ViewOrderCounterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ViewOrderCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewOrderCounterFindFirstArgs} args - Arguments to find a ViewOrderCounter
     * @example
     * // Get one ViewOrderCounter
     * const viewOrderCounter = await prisma.viewOrderCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewOrderCounterFindFirstArgs>(args?: SelectSubset<T, ViewOrderCounterFindFirstArgs<ExtArgs>>): Prisma__ViewOrderCounterClient<$Result.GetResult<Prisma.$ViewOrderCounterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ViewOrderCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewOrderCounterFindFirstOrThrowArgs} args - Arguments to find a ViewOrderCounter
     * @example
     * // Get one ViewOrderCounter
     * const viewOrderCounter = await prisma.viewOrderCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewOrderCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewOrderCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewOrderCounterClient<$Result.GetResult<Prisma.$ViewOrderCounterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ViewOrderCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewOrderCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewOrderCounters
     * const viewOrderCounters = await prisma.viewOrderCounter.findMany()
     * 
     * // Get first 10 ViewOrderCounters
     * const viewOrderCounters = await prisma.viewOrderCounter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewOrderCounterWithIdOnly = await prisma.viewOrderCounter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewOrderCounterFindManyArgs>(args?: SelectSubset<T, ViewOrderCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewOrderCounterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ViewOrderCounter.
     * @param {ViewOrderCounterCreateArgs} args - Arguments to create a ViewOrderCounter.
     * @example
     * // Create one ViewOrderCounter
     * const ViewOrderCounter = await prisma.viewOrderCounter.create({
     *   data: {
     *     // ... data to create a ViewOrderCounter
     *   }
     * })
     * 
     */
    create<T extends ViewOrderCounterCreateArgs>(args: SelectSubset<T, ViewOrderCounterCreateArgs<ExtArgs>>): Prisma__ViewOrderCounterClient<$Result.GetResult<Prisma.$ViewOrderCounterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ViewOrderCounters.
     * @param {ViewOrderCounterCreateManyArgs} args - Arguments to create many ViewOrderCounters.
     * @example
     * // Create many ViewOrderCounters
     * const viewOrderCounter = await prisma.viewOrderCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewOrderCounterCreateManyArgs>(args?: SelectSubset<T, ViewOrderCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ViewOrderCounter.
     * @param {ViewOrderCounterDeleteArgs} args - Arguments to delete one ViewOrderCounter.
     * @example
     * // Delete one ViewOrderCounter
     * const ViewOrderCounter = await prisma.viewOrderCounter.delete({
     *   where: {
     *     // ... filter to delete one ViewOrderCounter
     *   }
     * })
     * 
     */
    delete<T extends ViewOrderCounterDeleteArgs>(args: SelectSubset<T, ViewOrderCounterDeleteArgs<ExtArgs>>): Prisma__ViewOrderCounterClient<$Result.GetResult<Prisma.$ViewOrderCounterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ViewOrderCounter.
     * @param {ViewOrderCounterUpdateArgs} args - Arguments to update one ViewOrderCounter.
     * @example
     * // Update one ViewOrderCounter
     * const viewOrderCounter = await prisma.viewOrderCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewOrderCounterUpdateArgs>(args: SelectSubset<T, ViewOrderCounterUpdateArgs<ExtArgs>>): Prisma__ViewOrderCounterClient<$Result.GetResult<Prisma.$ViewOrderCounterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ViewOrderCounters.
     * @param {ViewOrderCounterDeleteManyArgs} args - Arguments to filter ViewOrderCounters to delete.
     * @example
     * // Delete a few ViewOrderCounters
     * const { count } = await prisma.viewOrderCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewOrderCounterDeleteManyArgs>(args?: SelectSubset<T, ViewOrderCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewOrderCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewOrderCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewOrderCounters
     * const viewOrderCounter = await prisma.viewOrderCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewOrderCounterUpdateManyArgs>(args: SelectSubset<T, ViewOrderCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ViewOrderCounter.
     * @param {ViewOrderCounterUpsertArgs} args - Arguments to update or create a ViewOrderCounter.
     * @example
     * // Update or create a ViewOrderCounter
     * const viewOrderCounter = await prisma.viewOrderCounter.upsert({
     *   create: {
     *     // ... data to create a ViewOrderCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewOrderCounter we want to update
     *   }
     * })
     */
    upsert<T extends ViewOrderCounterUpsertArgs>(args: SelectSubset<T, ViewOrderCounterUpsertArgs<ExtArgs>>): Prisma__ViewOrderCounterClient<$Result.GetResult<Prisma.$ViewOrderCounterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more ViewOrderCounters that matches the filter.
     * @param {ViewOrderCounterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const viewOrderCounter = await prisma.viewOrderCounter.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ViewOrderCounterFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ViewOrderCounter.
     * @param {ViewOrderCounterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const viewOrderCounter = await prisma.viewOrderCounter.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ViewOrderCounterAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ViewOrderCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewOrderCounterCountArgs} args - Arguments to filter ViewOrderCounters to count.
     * @example
     * // Count the number of ViewOrderCounters
     * const count = await prisma.viewOrderCounter.count({
     *   where: {
     *     // ... the filter for the ViewOrderCounters we want to count
     *   }
     * })
    **/
    count<T extends ViewOrderCounterCountArgs>(
      args?: Subset<T, ViewOrderCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewOrderCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewOrderCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewOrderCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewOrderCounterAggregateArgs>(args: Subset<T, ViewOrderCounterAggregateArgs>): Prisma.PrismaPromise<GetViewOrderCounterAggregateType<T>>

    /**
     * Group by ViewOrderCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewOrderCounterGroupByArgs} args - Group by arguments.
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
      T extends ViewOrderCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewOrderCounterGroupByArgs['orderBy'] }
        : { orderBy?: ViewOrderCounterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewOrderCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewOrderCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewOrderCounter model
   */
  readonly fields: ViewOrderCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewOrderCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewOrderCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ViewOrderCounter model
   */ 
  interface ViewOrderCounterFieldRefs {
    readonly id: FieldRef<"ViewOrderCounter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ViewOrderCounter findUnique
   */
  export type ViewOrderCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewOrderCounter
     */
    select?: ViewOrderCounterSelect<ExtArgs> | null
    /**
     * Filter, which ViewOrderCounter to fetch.
     */
    where: ViewOrderCounterWhereUniqueInput
  }

  /**
   * ViewOrderCounter findUniqueOrThrow
   */
  export type ViewOrderCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewOrderCounter
     */
    select?: ViewOrderCounterSelect<ExtArgs> | null
    /**
     * Filter, which ViewOrderCounter to fetch.
     */
    where: ViewOrderCounterWhereUniqueInput
  }

  /**
   * ViewOrderCounter findFirst
   */
  export type ViewOrderCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewOrderCounter
     */
    select?: ViewOrderCounterSelect<ExtArgs> | null
    /**
     * Filter, which ViewOrderCounter to fetch.
     */
    where?: ViewOrderCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewOrderCounters to fetch.
     */
    orderBy?: ViewOrderCounterOrderByWithRelationInput | ViewOrderCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewOrderCounters.
     */
    cursor?: ViewOrderCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewOrderCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewOrderCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewOrderCounters.
     */
    distinct?: ViewOrderCounterScalarFieldEnum | ViewOrderCounterScalarFieldEnum[]
  }

  /**
   * ViewOrderCounter findFirstOrThrow
   */
  export type ViewOrderCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewOrderCounter
     */
    select?: ViewOrderCounterSelect<ExtArgs> | null
    /**
     * Filter, which ViewOrderCounter to fetch.
     */
    where?: ViewOrderCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewOrderCounters to fetch.
     */
    orderBy?: ViewOrderCounterOrderByWithRelationInput | ViewOrderCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewOrderCounters.
     */
    cursor?: ViewOrderCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewOrderCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewOrderCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewOrderCounters.
     */
    distinct?: ViewOrderCounterScalarFieldEnum | ViewOrderCounterScalarFieldEnum[]
  }

  /**
   * ViewOrderCounter findMany
   */
  export type ViewOrderCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewOrderCounter
     */
    select?: ViewOrderCounterSelect<ExtArgs> | null
    /**
     * Filter, which ViewOrderCounters to fetch.
     */
    where?: ViewOrderCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewOrderCounters to fetch.
     */
    orderBy?: ViewOrderCounterOrderByWithRelationInput | ViewOrderCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewOrderCounters.
     */
    cursor?: ViewOrderCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewOrderCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewOrderCounters.
     */
    skip?: number
    distinct?: ViewOrderCounterScalarFieldEnum | ViewOrderCounterScalarFieldEnum[]
  }

  /**
   * ViewOrderCounter create
   */
  export type ViewOrderCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewOrderCounter
     */
    select?: ViewOrderCounterSelect<ExtArgs> | null
    /**
     * The data needed to create a ViewOrderCounter.
     */
    data?: XOR<ViewOrderCounterCreateInput, ViewOrderCounterUncheckedCreateInput>
  }

  /**
   * ViewOrderCounter createMany
   */
  export type ViewOrderCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewOrderCounters.
     */
    data: ViewOrderCounterCreateManyInput | ViewOrderCounterCreateManyInput[]
  }

  /**
   * ViewOrderCounter update
   */
  export type ViewOrderCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewOrderCounter
     */
    select?: ViewOrderCounterSelect<ExtArgs> | null
    /**
     * The data needed to update a ViewOrderCounter.
     */
    data: XOR<ViewOrderCounterUpdateInput, ViewOrderCounterUncheckedUpdateInput>
    /**
     * Choose, which ViewOrderCounter to update.
     */
    where: ViewOrderCounterWhereUniqueInput
  }

  /**
   * ViewOrderCounter updateMany
   */
  export type ViewOrderCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewOrderCounters.
     */
    data: XOR<ViewOrderCounterUpdateManyMutationInput, ViewOrderCounterUncheckedUpdateManyInput>
    /**
     * Filter which ViewOrderCounters to update
     */
    where?: ViewOrderCounterWhereInput
  }

  /**
   * ViewOrderCounter upsert
   */
  export type ViewOrderCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewOrderCounter
     */
    select?: ViewOrderCounterSelect<ExtArgs> | null
    /**
     * The filter to search for the ViewOrderCounter to update in case it exists.
     */
    where: ViewOrderCounterWhereUniqueInput
    /**
     * In case the ViewOrderCounter found by the `where` argument doesn't exist, create a new ViewOrderCounter with this data.
     */
    create: XOR<ViewOrderCounterCreateInput, ViewOrderCounterUncheckedCreateInput>
    /**
     * In case the ViewOrderCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewOrderCounterUpdateInput, ViewOrderCounterUncheckedUpdateInput>
  }

  /**
   * ViewOrderCounter delete
   */
  export type ViewOrderCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewOrderCounter
     */
    select?: ViewOrderCounterSelect<ExtArgs> | null
    /**
     * Filter which ViewOrderCounter to delete.
     */
    where: ViewOrderCounterWhereUniqueInput
  }

  /**
   * ViewOrderCounter deleteMany
   */
  export type ViewOrderCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewOrderCounters to delete
     */
    where?: ViewOrderCounterWhereInput
  }

  /**
   * ViewOrderCounter findRaw
   */
  export type ViewOrderCounterFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ViewOrderCounter aggregateRaw
   */
  export type ViewOrderCounterAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ViewOrderCounter without action
   */
  export type ViewOrderCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewOrderCounter
     */
    select?: ViewOrderCounterSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MapGroupScalarFieldEnum: {
    id: 'id',
    groupName: 'groupName',
    label: 'label'
  };

  export type MapGroupScalarFieldEnum = (typeof MapGroupScalarFieldEnum)[keyof typeof MapGroupScalarFieldEnum]


  export const MapScalarFieldEnum: {
    id: 'id',
    mapId: 'mapId',
    longitude: 'longitude',
    latitude: 'latitude',
    mapName: 'mapName',
    zoom: 'zoom',
    bearing: 'bearing',
    topLeftBoundLatitude: 'topLeftBoundLatitude',
    topLeftBoundLongitude: 'topLeftBoundLongitude',
    bottomRightBoundLatitude: 'bottomRightBoundLatitude',
    bottomRightBoundLongitude: 'bottomRightBoundLongitude',
    zoomToBounds: 'zoomToBounds',
    styleId: 'styleId',
    groupId: 'groupId',
    zoomLabelId: 'zoomLabelId',
    infoId: 'infoId'
  };

  export type MapScalarFieldEnum = (typeof MapScalarFieldEnum)[keyof typeof MapScalarFieldEnum]


  export const ZoomLabelScalarFieldEnum: {
    id: 'id',
    title: 'title',
    minZoom: 'minZoom',
    zoom: 'zoom',
    bearing: 'bearing',
    centerLatitude: 'centerLatitude',
    centerLongitude: 'centerLongitude',
    topLeftBoundLatitude: 'topLeftBoundLatitude',
    topLeftBoundLongitude: 'topLeftBoundLongitude',
    bottomRightBoundLatitude: 'bottomRightBoundLatitude',
    bottomRightBoundLongitude: 'bottomRightBoundLongitude',
    zoomToBounds: 'zoomToBounds',
    useTextSizeZoomStyling: 'useTextSizeZoomStyling',
    textSizeDefault: 'textSizeDefault',
    textSizeStopsZoom1: 'textSizeStopsZoom1',
    textSizeStopsVal1: 'textSizeStopsVal1',
    textSizeStopsZoom2: 'textSizeStopsZoom2',
    textSizeStopsVal2: 'textSizeStopsVal2',
    useTextColorZoomStyling: 'useTextColorZoomStyling',
    textColorDefault: 'textColorDefault',
    textColorStopsZoom1: 'textColorStopsZoom1',
    textColorStopsVal1: 'textColorStopsVal1',
    textColorStopsZoom2: 'textColorStopsZoom2',
    textColorStopsVal2: 'textColorStopsVal2',
    useTextHaloWidthZoomStyling: 'useTextHaloWidthZoomStyling',
    textHaloWidthDefault: 'textHaloWidthDefault',
    textHaloWidthStopsZoom1: 'textHaloWidthStopsZoom1',
    textHaloWidthStopsVal1: 'textHaloWidthStopsVal1',
    textHaloWidthStopsZoom2: 'textHaloWidthStopsZoom2',
    textHaloWidthStopsVal2: 'textHaloWidthStopsVal2',
    useTextHaloBlurZoomStyling: 'useTextHaloBlurZoomStyling',
    textHaloBlurDefault: 'textHaloBlurDefault',
    textHaloBlurStopsZoom1: 'textHaloBlurStopsZoom1',
    textHaloBlurStopsVal1: 'textHaloBlurStopsVal1',
    textHaloBlurStopsZoom2: 'textHaloBlurStopsZoom2',
    textHaloBlurStopsVal2: 'textHaloBlurStopsVal2',
    useTextHaloColorZoomStyling: 'useTextHaloColorZoomStyling',
    textHaloColorDefault: 'textHaloColorDefault',
    textHaloColorStopsZoom1: 'textHaloColorStopsZoom1',
    textHaloColorStopsVal1: 'textHaloColorStopsVal1',
    textHaloColorStopsZoom2: 'textHaloColorStopsZoom2',
    textHaloColorStopsVal2: 'textHaloColorStopsVal2',
    useTextOpacityZoomStyling: 'useTextOpacityZoomStyling',
    textOpacityDefault: 'textOpacityDefault',
    textOpacityStopsZoom1: 'textOpacityStopsZoom1',
    textOpacityStopsVal1: 'textOpacityStopsVal1',
    textOpacityStopsZoom2: 'textOpacityStopsZoom2',
    textOpacityStopsVal2: 'textOpacityStopsVal2'
  };

  export type ZoomLabelScalarFieldEnum = (typeof ZoomLabelScalarFieldEnum)[keyof typeof ZoomLabelScalarFieldEnum]


  export const ButtonLinkScalarFieldEnum: {
    id: 'id',
    label: 'label',
    url: 'url'
  };

  export type ButtonLinkScalarFieldEnum = (typeof ButtonLinkScalarFieldEnum)[keyof typeof ButtonLinkScalarFieldEnum]


  export const LayerSectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order'
  };

  export type LayerSectionScalarFieldEnum = (typeof LayerSectionScalarFieldEnum)[keyof typeof LayerSectionScalarFieldEnum]


  export const LayerGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    layerSectionId: 'layerSectionId',
    longitude: 'longitude',
    latitude: 'latitude',
    zoom: 'zoom',
    bearing: 'bearing',
    topLeftBoundLatitude: 'topLeftBoundLatitude',
    topLeftBoundLongitude: 'topLeftBoundLongitude',
    bottomRightBoundLatitude: 'bottomRightBoundLatitude',
    bottomRightBoundLongitude: 'bottomRightBoundLongitude',
    zoomToBounds: 'zoomToBounds',
    order: 'order',
    infoId: 'infoId'
  };

  export type LayerGroupScalarFieldEnum = (typeof LayerGroupScalarFieldEnum)[keyof typeof LayerGroupScalarFieldEnum]


  export const LayerDataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    iconColor: 'iconColor',
    iconType: 'iconType',
    label: 'label',
    longitude: 'longitude',
    latitude: 'latitude',
    zoom: 'zoom',
    bearing: 'bearing',
    topLeftBoundLatitude: 'topLeftBoundLatitude',
    topLeftBoundLongitude: 'topLeftBoundLongitude',
    bottomRightBoundLatitude: 'bottomRightBoundLatitude',
    bottomRightBoundLongitude: 'bottomRightBoundLongitude',
    zoomToBounds: 'zoomToBounds',
    enableByDefault: 'enableByDefault',
    topLayerClass: 'topLayerClass',
    infoId: 'infoId',
    type: 'type',
    sourceType: 'sourceType',
    sourceUrl: 'sourceUrl',
    sourceId: 'sourceId',
    paint: 'paint',
    layout: 'layout',
    sourceLayer: 'sourceLayer',
    hover: 'hover',
    time: 'time',
    click: 'click',
    hoverStyle: 'hoverStyle',
    clickStyle: 'clickStyle',
    clickHeader: 'clickHeader',
    textZoomLevels: 'textZoomLevels',
    zoomLevels: 'zoomLevels',
    order: 'order',
    viewOrder: 'viewOrder',
    standalone: 'standalone',
    layerSection: 'layerSection'
  };

  export type LayerDataScalarFieldEnum = (typeof LayerDataScalarFieldEnum)[keyof typeof LayerDataScalarFieldEnum]


  export const ViewOrderCounterScalarFieldEnum: {
    id: 'id'
  };

  export type ViewOrderCounterScalarFieldEnum = (typeof ViewOrderCounterScalarFieldEnum)[keyof typeof ViewOrderCounterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type MapGroupWhereInput = {
    AND?: MapGroupWhereInput | MapGroupWhereInput[]
    OR?: MapGroupWhereInput[]
    NOT?: MapGroupWhereInput | MapGroupWhereInput[]
    id?: StringFilter<"MapGroup"> | string
    groupName?: StringFilter<"MapGroup"> | string
    label?: StringFilter<"MapGroup"> | string
    maps?: MapListRelationFilter
  }

  export type MapGroupOrderByWithRelationInput = {
    id?: SortOrder
    groupName?: SortOrder
    label?: SortOrder
    maps?: MapOrderByRelationAggregateInput
  }

  export type MapGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapGroupWhereInput | MapGroupWhereInput[]
    OR?: MapGroupWhereInput[]
    NOT?: MapGroupWhereInput | MapGroupWhereInput[]
    groupName?: StringFilter<"MapGroup"> | string
    label?: StringFilter<"MapGroup"> | string
    maps?: MapListRelationFilter
  }, "id">

  export type MapGroupOrderByWithAggregationInput = {
    id?: SortOrder
    groupName?: SortOrder
    label?: SortOrder
    _count?: MapGroupCountOrderByAggregateInput
    _max?: MapGroupMaxOrderByAggregateInput
    _min?: MapGroupMinOrderByAggregateInput
  }

  export type MapGroupScalarWhereWithAggregatesInput = {
    AND?: MapGroupScalarWhereWithAggregatesInput | MapGroupScalarWhereWithAggregatesInput[]
    OR?: MapGroupScalarWhereWithAggregatesInput[]
    NOT?: MapGroupScalarWhereWithAggregatesInput | MapGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapGroup"> | string
    groupName?: StringWithAggregatesFilter<"MapGroup"> | string
    label?: StringWithAggregatesFilter<"MapGroup"> | string
  }

  export type MapWhereInput = {
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    id?: StringFilter<"Map"> | string
    mapId?: StringFilter<"Map"> | string
    longitude?: FloatNullableFilter<"Map"> | number | null
    latitude?: FloatNullableFilter<"Map"> | number | null
    mapName?: StringFilter<"Map"> | string
    zoom?: FloatFilter<"Map"> | number
    bearing?: FloatFilter<"Map"> | number
    topLeftBoundLatitude?: FloatNullableFilter<"Map"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"Map"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"Map"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"Map"> | number | null
    zoomToBounds?: BoolNullableFilter<"Map"> | boolean | null
    styleId?: StringFilter<"Map"> | string
    groupId?: StringFilter<"Map"> | string
    zoomLabelId?: StringNullableFilter<"Map"> | string | null
    infoId?: StringNullableFilter<"Map"> | string | null
    zoomLabel?: XOR<ZoomLabelNullableRelationFilter, ZoomLabelWhereInput> | null
    MapGroup?: XOR<MapGroupNullableRelationFilter, MapGroupWhereInput> | null
  }

  export type MapOrderByWithRelationInput = {
    id?: SortOrder
    mapId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    mapName?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    styleId?: SortOrder
    groupId?: SortOrder
    zoomLabelId?: SortOrder
    infoId?: SortOrder
    zoomLabel?: ZoomLabelOrderByWithRelationInput
    MapGroup?: MapGroupOrderByWithRelationInput
  }

  export type MapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mapId?: string
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    longitude?: FloatNullableFilter<"Map"> | number | null
    latitude?: FloatNullableFilter<"Map"> | number | null
    mapName?: StringFilter<"Map"> | string
    zoom?: FloatFilter<"Map"> | number
    bearing?: FloatFilter<"Map"> | number
    topLeftBoundLatitude?: FloatNullableFilter<"Map"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"Map"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"Map"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"Map"> | number | null
    zoomToBounds?: BoolNullableFilter<"Map"> | boolean | null
    styleId?: StringFilter<"Map"> | string
    groupId?: StringFilter<"Map"> | string
    zoomLabelId?: StringNullableFilter<"Map"> | string | null
    infoId?: StringNullableFilter<"Map"> | string | null
    zoomLabel?: XOR<ZoomLabelNullableRelationFilter, ZoomLabelWhereInput> | null
    MapGroup?: XOR<MapGroupNullableRelationFilter, MapGroupWhereInput> | null
  }, "id" | "mapId">

  export type MapOrderByWithAggregationInput = {
    id?: SortOrder
    mapId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    mapName?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    styleId?: SortOrder
    groupId?: SortOrder
    zoomLabelId?: SortOrder
    infoId?: SortOrder
    _count?: MapCountOrderByAggregateInput
    _avg?: MapAvgOrderByAggregateInput
    _max?: MapMaxOrderByAggregateInput
    _min?: MapMinOrderByAggregateInput
    _sum?: MapSumOrderByAggregateInput
  }

  export type MapScalarWhereWithAggregatesInput = {
    AND?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    OR?: MapScalarWhereWithAggregatesInput[]
    NOT?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Map"> | string
    mapId?: StringWithAggregatesFilter<"Map"> | string
    longitude?: FloatNullableWithAggregatesFilter<"Map"> | number | null
    latitude?: FloatNullableWithAggregatesFilter<"Map"> | number | null
    mapName?: StringWithAggregatesFilter<"Map"> | string
    zoom?: FloatWithAggregatesFilter<"Map"> | number
    bearing?: FloatWithAggregatesFilter<"Map"> | number
    topLeftBoundLatitude?: FloatNullableWithAggregatesFilter<"Map"> | number | null
    topLeftBoundLongitude?: FloatNullableWithAggregatesFilter<"Map"> | number | null
    bottomRightBoundLatitude?: FloatNullableWithAggregatesFilter<"Map"> | number | null
    bottomRightBoundLongitude?: FloatNullableWithAggregatesFilter<"Map"> | number | null
    zoomToBounds?: BoolNullableWithAggregatesFilter<"Map"> | boolean | null
    styleId?: StringWithAggregatesFilter<"Map"> | string
    groupId?: StringWithAggregatesFilter<"Map"> | string
    zoomLabelId?: StringNullableWithAggregatesFilter<"Map"> | string | null
    infoId?: StringNullableWithAggregatesFilter<"Map"> | string | null
  }

  export type ZoomLabelWhereInput = {
    AND?: ZoomLabelWhereInput | ZoomLabelWhereInput[]
    OR?: ZoomLabelWhereInput[]
    NOT?: ZoomLabelWhereInput | ZoomLabelWhereInput[]
    id?: StringFilter<"ZoomLabel"> | string
    title?: StringFilter<"ZoomLabel"> | string
    minZoom?: FloatNullableFilter<"ZoomLabel"> | number | null
    zoom?: FloatNullableFilter<"ZoomLabel"> | number | null
    bearing?: FloatNullableFilter<"ZoomLabel"> | number | null
    centerLatitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    centerLongitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    topLeftBoundLatitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    zoomToBounds?: BoolFilter<"ZoomLabel"> | boolean
    useTextSizeZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textSizeDefault?: FloatFilter<"ZoomLabel"> | number
    textSizeStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textSizeStopsVal1?: FloatFilter<"ZoomLabel"> | number
    textSizeStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textSizeStopsVal2?: FloatFilter<"ZoomLabel"> | number
    useTextColorZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textColorDefault?: StringFilter<"ZoomLabel"> | string
    textColorStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textColorStopsVal1?: StringFilter<"ZoomLabel"> | string
    textColorStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textColorStopsVal2?: StringFilter<"ZoomLabel"> | string
    useTextHaloWidthZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textHaloWidthDefault?: FloatFilter<"ZoomLabel"> | number
    textHaloWidthStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textHaloWidthStopsVal1?: FloatFilter<"ZoomLabel"> | number
    textHaloWidthStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textHaloWidthStopsVal2?: FloatFilter<"ZoomLabel"> | number
    useTextHaloBlurZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textHaloBlurDefault?: FloatFilter<"ZoomLabel"> | number
    textHaloBlurStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textHaloBlurStopsVal1?: FloatFilter<"ZoomLabel"> | number
    textHaloBlurStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textHaloBlurStopsVal2?: FloatFilter<"ZoomLabel"> | number
    useTextHaloColorZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textHaloColorDefault?: StringFilter<"ZoomLabel"> | string
    textHaloColorStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textHaloColorStopsVal1?: StringFilter<"ZoomLabel"> | string
    textHaloColorStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textHaloColorStopsVal2?: StringFilter<"ZoomLabel"> | string
    useTextOpacityZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textOpacityDefault?: FloatFilter<"ZoomLabel"> | number
    textOpacityStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textOpacityStopsVal1?: FloatFilter<"ZoomLabel"> | number
    textOpacityStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textOpacityStopsVal2?: FloatFilter<"ZoomLabel"> | number
    Map?: MapListRelationFilter
  }

  export type ZoomLabelOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    minZoom?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    centerLatitude?: SortOrder
    centerLongitude?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    useTextSizeZoomStyling?: SortOrder
    textSizeDefault?: SortOrder
    textSizeStopsZoom1?: SortOrder
    textSizeStopsVal1?: SortOrder
    textSizeStopsZoom2?: SortOrder
    textSizeStopsVal2?: SortOrder
    useTextColorZoomStyling?: SortOrder
    textColorDefault?: SortOrder
    textColorStopsZoom1?: SortOrder
    textColorStopsVal1?: SortOrder
    textColorStopsZoom2?: SortOrder
    textColorStopsVal2?: SortOrder
    useTextHaloWidthZoomStyling?: SortOrder
    textHaloWidthDefault?: SortOrder
    textHaloWidthStopsZoom1?: SortOrder
    textHaloWidthStopsVal1?: SortOrder
    textHaloWidthStopsZoom2?: SortOrder
    textHaloWidthStopsVal2?: SortOrder
    useTextHaloBlurZoomStyling?: SortOrder
    textHaloBlurDefault?: SortOrder
    textHaloBlurStopsZoom1?: SortOrder
    textHaloBlurStopsVal1?: SortOrder
    textHaloBlurStopsZoom2?: SortOrder
    textHaloBlurStopsVal2?: SortOrder
    useTextHaloColorZoomStyling?: SortOrder
    textHaloColorDefault?: SortOrder
    textHaloColorStopsZoom1?: SortOrder
    textHaloColorStopsVal1?: SortOrder
    textHaloColorStopsZoom2?: SortOrder
    textHaloColorStopsVal2?: SortOrder
    useTextOpacityZoomStyling?: SortOrder
    textOpacityDefault?: SortOrder
    textOpacityStopsZoom1?: SortOrder
    textOpacityStopsVal1?: SortOrder
    textOpacityStopsZoom2?: SortOrder
    textOpacityStopsVal2?: SortOrder
    Map?: MapOrderByRelationAggregateInput
  }

  export type ZoomLabelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZoomLabelWhereInput | ZoomLabelWhereInput[]
    OR?: ZoomLabelWhereInput[]
    NOT?: ZoomLabelWhereInput | ZoomLabelWhereInput[]
    title?: StringFilter<"ZoomLabel"> | string
    minZoom?: FloatNullableFilter<"ZoomLabel"> | number | null
    zoom?: FloatNullableFilter<"ZoomLabel"> | number | null
    bearing?: FloatNullableFilter<"ZoomLabel"> | number | null
    centerLatitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    centerLongitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    topLeftBoundLatitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"ZoomLabel"> | number | null
    zoomToBounds?: BoolFilter<"ZoomLabel"> | boolean
    useTextSizeZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textSizeDefault?: FloatFilter<"ZoomLabel"> | number
    textSizeStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textSizeStopsVal1?: FloatFilter<"ZoomLabel"> | number
    textSizeStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textSizeStopsVal2?: FloatFilter<"ZoomLabel"> | number
    useTextColorZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textColorDefault?: StringFilter<"ZoomLabel"> | string
    textColorStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textColorStopsVal1?: StringFilter<"ZoomLabel"> | string
    textColorStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textColorStopsVal2?: StringFilter<"ZoomLabel"> | string
    useTextHaloWidthZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textHaloWidthDefault?: FloatFilter<"ZoomLabel"> | number
    textHaloWidthStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textHaloWidthStopsVal1?: FloatFilter<"ZoomLabel"> | number
    textHaloWidthStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textHaloWidthStopsVal2?: FloatFilter<"ZoomLabel"> | number
    useTextHaloBlurZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textHaloBlurDefault?: FloatFilter<"ZoomLabel"> | number
    textHaloBlurStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textHaloBlurStopsVal1?: FloatFilter<"ZoomLabel"> | number
    textHaloBlurStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textHaloBlurStopsVal2?: FloatFilter<"ZoomLabel"> | number
    useTextHaloColorZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textHaloColorDefault?: StringFilter<"ZoomLabel"> | string
    textHaloColorStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textHaloColorStopsVal1?: StringFilter<"ZoomLabel"> | string
    textHaloColorStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textHaloColorStopsVal2?: StringFilter<"ZoomLabel"> | string
    useTextOpacityZoomStyling?: BoolFilter<"ZoomLabel"> | boolean
    textOpacityDefault?: FloatFilter<"ZoomLabel"> | number
    textOpacityStopsZoom1?: IntFilter<"ZoomLabel"> | number
    textOpacityStopsVal1?: FloatFilter<"ZoomLabel"> | number
    textOpacityStopsZoom2?: IntFilter<"ZoomLabel"> | number
    textOpacityStopsVal2?: FloatFilter<"ZoomLabel"> | number
    Map?: MapListRelationFilter
  }, "id">

  export type ZoomLabelOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    minZoom?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    centerLatitude?: SortOrder
    centerLongitude?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    useTextSizeZoomStyling?: SortOrder
    textSizeDefault?: SortOrder
    textSizeStopsZoom1?: SortOrder
    textSizeStopsVal1?: SortOrder
    textSizeStopsZoom2?: SortOrder
    textSizeStopsVal2?: SortOrder
    useTextColorZoomStyling?: SortOrder
    textColorDefault?: SortOrder
    textColorStopsZoom1?: SortOrder
    textColorStopsVal1?: SortOrder
    textColorStopsZoom2?: SortOrder
    textColorStopsVal2?: SortOrder
    useTextHaloWidthZoomStyling?: SortOrder
    textHaloWidthDefault?: SortOrder
    textHaloWidthStopsZoom1?: SortOrder
    textHaloWidthStopsVal1?: SortOrder
    textHaloWidthStopsZoom2?: SortOrder
    textHaloWidthStopsVal2?: SortOrder
    useTextHaloBlurZoomStyling?: SortOrder
    textHaloBlurDefault?: SortOrder
    textHaloBlurStopsZoom1?: SortOrder
    textHaloBlurStopsVal1?: SortOrder
    textHaloBlurStopsZoom2?: SortOrder
    textHaloBlurStopsVal2?: SortOrder
    useTextHaloColorZoomStyling?: SortOrder
    textHaloColorDefault?: SortOrder
    textHaloColorStopsZoom1?: SortOrder
    textHaloColorStopsVal1?: SortOrder
    textHaloColorStopsZoom2?: SortOrder
    textHaloColorStopsVal2?: SortOrder
    useTextOpacityZoomStyling?: SortOrder
    textOpacityDefault?: SortOrder
    textOpacityStopsZoom1?: SortOrder
    textOpacityStopsVal1?: SortOrder
    textOpacityStopsZoom2?: SortOrder
    textOpacityStopsVal2?: SortOrder
    _count?: ZoomLabelCountOrderByAggregateInput
    _avg?: ZoomLabelAvgOrderByAggregateInput
    _max?: ZoomLabelMaxOrderByAggregateInput
    _min?: ZoomLabelMinOrderByAggregateInput
    _sum?: ZoomLabelSumOrderByAggregateInput
  }

  export type ZoomLabelScalarWhereWithAggregatesInput = {
    AND?: ZoomLabelScalarWhereWithAggregatesInput | ZoomLabelScalarWhereWithAggregatesInput[]
    OR?: ZoomLabelScalarWhereWithAggregatesInput[]
    NOT?: ZoomLabelScalarWhereWithAggregatesInput | ZoomLabelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZoomLabel"> | string
    title?: StringWithAggregatesFilter<"ZoomLabel"> | string
    minZoom?: FloatNullableWithAggregatesFilter<"ZoomLabel"> | number | null
    zoom?: FloatNullableWithAggregatesFilter<"ZoomLabel"> | number | null
    bearing?: FloatNullableWithAggregatesFilter<"ZoomLabel"> | number | null
    centerLatitude?: FloatNullableWithAggregatesFilter<"ZoomLabel"> | number | null
    centerLongitude?: FloatNullableWithAggregatesFilter<"ZoomLabel"> | number | null
    topLeftBoundLatitude?: FloatNullableWithAggregatesFilter<"ZoomLabel"> | number | null
    topLeftBoundLongitude?: FloatNullableWithAggregatesFilter<"ZoomLabel"> | number | null
    bottomRightBoundLatitude?: FloatNullableWithAggregatesFilter<"ZoomLabel"> | number | null
    bottomRightBoundLongitude?: FloatNullableWithAggregatesFilter<"ZoomLabel"> | number | null
    zoomToBounds?: BoolWithAggregatesFilter<"ZoomLabel"> | boolean
    useTextSizeZoomStyling?: BoolWithAggregatesFilter<"ZoomLabel"> | boolean
    textSizeDefault?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    textSizeStopsZoom1?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textSizeStopsVal1?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    textSizeStopsZoom2?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textSizeStopsVal2?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    useTextColorZoomStyling?: BoolWithAggregatesFilter<"ZoomLabel"> | boolean
    textColorDefault?: StringWithAggregatesFilter<"ZoomLabel"> | string
    textColorStopsZoom1?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textColorStopsVal1?: StringWithAggregatesFilter<"ZoomLabel"> | string
    textColorStopsZoom2?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textColorStopsVal2?: StringWithAggregatesFilter<"ZoomLabel"> | string
    useTextHaloWidthZoomStyling?: BoolWithAggregatesFilter<"ZoomLabel"> | boolean
    textHaloWidthDefault?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    textHaloWidthStopsZoom1?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textHaloWidthStopsVal1?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    textHaloWidthStopsZoom2?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textHaloWidthStopsVal2?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    useTextHaloBlurZoomStyling?: BoolWithAggregatesFilter<"ZoomLabel"> | boolean
    textHaloBlurDefault?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    textHaloBlurStopsZoom1?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textHaloBlurStopsVal1?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    textHaloBlurStopsZoom2?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textHaloBlurStopsVal2?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    useTextHaloColorZoomStyling?: BoolWithAggregatesFilter<"ZoomLabel"> | boolean
    textHaloColorDefault?: StringWithAggregatesFilter<"ZoomLabel"> | string
    textHaloColorStopsZoom1?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textHaloColorStopsVal1?: StringWithAggregatesFilter<"ZoomLabel"> | string
    textHaloColorStopsZoom2?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textHaloColorStopsVal2?: StringWithAggregatesFilter<"ZoomLabel"> | string
    useTextOpacityZoomStyling?: BoolWithAggregatesFilter<"ZoomLabel"> | boolean
    textOpacityDefault?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    textOpacityStopsZoom1?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textOpacityStopsVal1?: FloatWithAggregatesFilter<"ZoomLabel"> | number
    textOpacityStopsZoom2?: IntWithAggregatesFilter<"ZoomLabel"> | number
    textOpacityStopsVal2?: FloatWithAggregatesFilter<"ZoomLabel"> | number
  }

  export type ButtonLinkWhereInput = {
    AND?: ButtonLinkWhereInput | ButtonLinkWhereInput[]
    OR?: ButtonLinkWhereInput[]
    NOT?: ButtonLinkWhereInput | ButtonLinkWhereInput[]
    id?: StringFilter<"ButtonLink"> | string
    label?: StringFilter<"ButtonLink"> | string
    url?: StringFilter<"ButtonLink"> | string
  }

  export type ButtonLinkOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
  }

  export type ButtonLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ButtonLinkWhereInput | ButtonLinkWhereInput[]
    OR?: ButtonLinkWhereInput[]
    NOT?: ButtonLinkWhereInput | ButtonLinkWhereInput[]
    label?: StringFilter<"ButtonLink"> | string
    url?: StringFilter<"ButtonLink"> | string
  }, "id">

  export type ButtonLinkOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    _count?: ButtonLinkCountOrderByAggregateInput
    _max?: ButtonLinkMaxOrderByAggregateInput
    _min?: ButtonLinkMinOrderByAggregateInput
  }

  export type ButtonLinkScalarWhereWithAggregatesInput = {
    AND?: ButtonLinkScalarWhereWithAggregatesInput | ButtonLinkScalarWhereWithAggregatesInput[]
    OR?: ButtonLinkScalarWhereWithAggregatesInput[]
    NOT?: ButtonLinkScalarWhereWithAggregatesInput | ButtonLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ButtonLink"> | string
    label?: StringWithAggregatesFilter<"ButtonLink"> | string
    url?: StringWithAggregatesFilter<"ButtonLink"> | string
  }

  export type LayerSectionWhereInput = {
    AND?: LayerSectionWhereInput | LayerSectionWhereInput[]
    OR?: LayerSectionWhereInput[]
    NOT?: LayerSectionWhereInput | LayerSectionWhereInput[]
    id?: StringFilter<"LayerSection"> | string
    name?: StringFilter<"LayerSection"> | string
    order?: IntFilter<"LayerSection"> | number
    layerGroups?: LayerGroupListRelationFilter
  }

  export type LayerSectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    layerGroups?: LayerGroupOrderByRelationAggregateInput
  }

  export type LayerSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LayerSectionWhereInput | LayerSectionWhereInput[]
    OR?: LayerSectionWhereInput[]
    NOT?: LayerSectionWhereInput | LayerSectionWhereInput[]
    order?: IntFilter<"LayerSection"> | number
    layerGroups?: LayerGroupListRelationFilter
  }, "id" | "name">

  export type LayerSectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    _count?: LayerSectionCountOrderByAggregateInput
    _avg?: LayerSectionAvgOrderByAggregateInput
    _max?: LayerSectionMaxOrderByAggregateInput
    _min?: LayerSectionMinOrderByAggregateInput
    _sum?: LayerSectionSumOrderByAggregateInput
  }

  export type LayerSectionScalarWhereWithAggregatesInput = {
    AND?: LayerSectionScalarWhereWithAggregatesInput | LayerSectionScalarWhereWithAggregatesInput[]
    OR?: LayerSectionScalarWhereWithAggregatesInput[]
    NOT?: LayerSectionScalarWhereWithAggregatesInput | LayerSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LayerSection"> | string
    name?: StringWithAggregatesFilter<"LayerSection"> | string
    order?: IntWithAggregatesFilter<"LayerSection"> | number
  }

  export type LayerGroupWhereInput = {
    AND?: LayerGroupWhereInput | LayerGroupWhereInput[]
    OR?: LayerGroupWhereInput[]
    NOT?: LayerGroupWhereInput | LayerGroupWhereInput[]
    id?: StringFilter<"LayerGroup"> | string
    name?: StringFilter<"LayerGroup"> | string
    layerSectionId?: StringFilter<"LayerGroup"> | string
    longitude?: StringNullableFilter<"LayerGroup"> | string | null
    latitude?: StringNullableFilter<"LayerGroup"> | string | null
    zoom?: FloatNullableFilter<"LayerGroup"> | number | null
    bearing?: FloatNullableFilter<"LayerGroup"> | number | null
    topLeftBoundLatitude?: FloatNullableFilter<"LayerGroup"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"LayerGroup"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"LayerGroup"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"LayerGroup"> | number | null
    zoomToBounds?: BoolNullableFilter<"LayerGroup"> | boolean | null
    order?: IntFilter<"LayerGroup"> | number
    infoId?: StringNullableFilter<"LayerGroup"> | string | null
    layers?: LayerDataListRelationFilter
    layerSection?: XOR<LayerSectionRelationFilter, LayerSectionWhereInput>
  }

  export type LayerGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    layerSectionId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    order?: SortOrder
    infoId?: SortOrder
    layers?: LayerDataOrderByRelationAggregateInput
    layerSection?: LayerSectionOrderByWithRelationInput
  }

  export type LayerGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LayerGroupWhereInput | LayerGroupWhereInput[]
    OR?: LayerGroupWhereInput[]
    NOT?: LayerGroupWhereInput | LayerGroupWhereInput[]
    layerSectionId?: StringFilter<"LayerGroup"> | string
    longitude?: StringNullableFilter<"LayerGroup"> | string | null
    latitude?: StringNullableFilter<"LayerGroup"> | string | null
    zoom?: FloatNullableFilter<"LayerGroup"> | number | null
    bearing?: FloatNullableFilter<"LayerGroup"> | number | null
    topLeftBoundLatitude?: FloatNullableFilter<"LayerGroup"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"LayerGroup"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"LayerGroup"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"LayerGroup"> | number | null
    zoomToBounds?: BoolNullableFilter<"LayerGroup"> | boolean | null
    order?: IntFilter<"LayerGroup"> | number
    infoId?: StringNullableFilter<"LayerGroup"> | string | null
    layers?: LayerDataListRelationFilter
    layerSection?: XOR<LayerSectionRelationFilter, LayerSectionWhereInput>
  }, "id" | "name">

  export type LayerGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    layerSectionId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    order?: SortOrder
    infoId?: SortOrder
    _count?: LayerGroupCountOrderByAggregateInput
    _avg?: LayerGroupAvgOrderByAggregateInput
    _max?: LayerGroupMaxOrderByAggregateInput
    _min?: LayerGroupMinOrderByAggregateInput
    _sum?: LayerGroupSumOrderByAggregateInput
  }

  export type LayerGroupScalarWhereWithAggregatesInput = {
    AND?: LayerGroupScalarWhereWithAggregatesInput | LayerGroupScalarWhereWithAggregatesInput[]
    OR?: LayerGroupScalarWhereWithAggregatesInput[]
    NOT?: LayerGroupScalarWhereWithAggregatesInput | LayerGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LayerGroup"> | string
    name?: StringWithAggregatesFilter<"LayerGroup"> | string
    layerSectionId?: StringWithAggregatesFilter<"LayerGroup"> | string
    longitude?: StringNullableWithAggregatesFilter<"LayerGroup"> | string | null
    latitude?: StringNullableWithAggregatesFilter<"LayerGroup"> | string | null
    zoom?: FloatNullableWithAggregatesFilter<"LayerGroup"> | number | null
    bearing?: FloatNullableWithAggregatesFilter<"LayerGroup"> | number | null
    topLeftBoundLatitude?: FloatNullableWithAggregatesFilter<"LayerGroup"> | number | null
    topLeftBoundLongitude?: FloatNullableWithAggregatesFilter<"LayerGroup"> | number | null
    bottomRightBoundLatitude?: FloatNullableWithAggregatesFilter<"LayerGroup"> | number | null
    bottomRightBoundLongitude?: FloatNullableWithAggregatesFilter<"LayerGroup"> | number | null
    zoomToBounds?: BoolNullableWithAggregatesFilter<"LayerGroup"> | boolean | null
    order?: IntWithAggregatesFilter<"LayerGroup"> | number
    infoId?: StringNullableWithAggregatesFilter<"LayerGroup"> | string | null
  }

  export type LayerDataWhereInput = {
    AND?: LayerDataWhereInput | LayerDataWhereInput[]
    OR?: LayerDataWhereInput[]
    NOT?: LayerDataWhereInput | LayerDataWhereInput[]
    id?: StringFilter<"LayerData"> | string
    name?: StringFilter<"LayerData"> | string
    iconColor?: StringFilter<"LayerData"> | string
    iconType?: StringFilter<"LayerData"> | string
    label?: StringFilter<"LayerData"> | string
    longitude?: FloatNullableFilter<"LayerData"> | number | null
    latitude?: FloatNullableFilter<"LayerData"> | number | null
    zoom?: FloatNullableFilter<"LayerData"> | number | null
    bearing?: FloatNullableFilter<"LayerData"> | number | null
    topLeftBoundLatitude?: FloatNullableFilter<"LayerData"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"LayerData"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"LayerData"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"LayerData"> | number | null
    zoomToBounds?: BoolNullableFilter<"LayerData"> | boolean | null
    enableByDefault?: BoolNullableFilter<"LayerData"> | boolean | null
    topLayerClass?: StringNullableFilter<"LayerData"> | string | null
    infoId?: StringNullableFilter<"LayerData"> | string | null
    type?: StringFilter<"LayerData"> | string
    sourceType?: StringFilter<"LayerData"> | string
    sourceUrl?: StringFilter<"LayerData"> | string
    sourceId?: StringFilter<"LayerData"> | string
    paint?: StringNullableFilter<"LayerData"> | string | null
    layout?: StringNullableFilter<"LayerData"> | string | null
    sourceLayer?: StringFilter<"LayerData"> | string
    hover?: BoolFilter<"LayerData"> | boolean
    time?: BoolFilter<"LayerData"> | boolean
    click?: BoolFilter<"LayerData"> | boolean
    hoverStyle?: StringNullableFilter<"LayerData"> | string | null
    clickStyle?: StringNullableFilter<"LayerData"> | string | null
    clickHeader?: StringNullableFilter<"LayerData"> | string | null
    hoverContent?: HoverItemCompositeListFilter | hoverItemObjectEqualityInput[]
    textZoomLevels?: JsonNullableFilter<"LayerData">
    zoomLevels?: JsonNullableFilter<"LayerData">
    order?: IntFilter<"LayerData"> | number
    viewOrder?: IntNullableFilter<"LayerData"> | number | null
    standalone?: BoolFilter<"LayerData"> | boolean
    layerSection?: StringNullableFilter<"LayerData"> | string | null
    groupName?: XOR<LayerGroupNullableRelationFilter, LayerGroupWhereInput> | null
  }

  export type LayerDataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    iconColor?: SortOrder
    iconType?: SortOrder
    label?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    enableByDefault?: SortOrder
    topLayerClass?: SortOrder
    infoId?: SortOrder
    type?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    sourceId?: SortOrder
    paint?: SortOrder
    layout?: SortOrder
    sourceLayer?: SortOrder
    hover?: SortOrder
    time?: SortOrder
    click?: SortOrder
    hoverStyle?: SortOrder
    clickStyle?: SortOrder
    clickHeader?: SortOrder
    hoverContent?: hoverItemOrderByCompositeAggregateInput
    textZoomLevels?: SortOrder
    zoomLevels?: SortOrder
    order?: SortOrder
    viewOrder?: SortOrder
    standalone?: SortOrder
    layerSection?: SortOrder
    groupName?: LayerGroupOrderByWithRelationInput
  }

  export type LayerDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LayerDataWhereInput | LayerDataWhereInput[]
    OR?: LayerDataWhereInput[]
    NOT?: LayerDataWhereInput | LayerDataWhereInput[]
    iconColor?: StringFilter<"LayerData"> | string
    iconType?: StringFilter<"LayerData"> | string
    label?: StringFilter<"LayerData"> | string
    longitude?: FloatNullableFilter<"LayerData"> | number | null
    latitude?: FloatNullableFilter<"LayerData"> | number | null
    zoom?: FloatNullableFilter<"LayerData"> | number | null
    bearing?: FloatNullableFilter<"LayerData"> | number | null
    topLeftBoundLatitude?: FloatNullableFilter<"LayerData"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"LayerData"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"LayerData"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"LayerData"> | number | null
    zoomToBounds?: BoolNullableFilter<"LayerData"> | boolean | null
    enableByDefault?: BoolNullableFilter<"LayerData"> | boolean | null
    topLayerClass?: StringNullableFilter<"LayerData"> | string | null
    infoId?: StringNullableFilter<"LayerData"> | string | null
    type?: StringFilter<"LayerData"> | string
    sourceType?: StringFilter<"LayerData"> | string
    sourceUrl?: StringFilter<"LayerData"> | string
    sourceId?: StringFilter<"LayerData"> | string
    paint?: StringNullableFilter<"LayerData"> | string | null
    layout?: StringNullableFilter<"LayerData"> | string | null
    sourceLayer?: StringFilter<"LayerData"> | string
    hover?: BoolFilter<"LayerData"> | boolean
    time?: BoolFilter<"LayerData"> | boolean
    click?: BoolFilter<"LayerData"> | boolean
    hoverStyle?: StringNullableFilter<"LayerData"> | string | null
    clickStyle?: StringNullableFilter<"LayerData"> | string | null
    clickHeader?: StringNullableFilter<"LayerData"> | string | null
    hoverContent?: HoverItemCompositeListFilter | hoverItemObjectEqualityInput[]
    textZoomLevels?: JsonNullableFilter<"LayerData">
    zoomLevels?: JsonNullableFilter<"LayerData">
    order?: IntFilter<"LayerData"> | number
    viewOrder?: IntNullableFilter<"LayerData"> | number | null
    standalone?: BoolFilter<"LayerData"> | boolean
    layerSection?: StringNullableFilter<"LayerData"> | string | null
    groupName?: XOR<LayerGroupNullableRelationFilter, LayerGroupWhereInput> | null
  }, "id" | "name">

  export type LayerDataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    iconColor?: SortOrder
    iconType?: SortOrder
    label?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    enableByDefault?: SortOrder
    topLayerClass?: SortOrder
    infoId?: SortOrder
    type?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    sourceId?: SortOrder
    paint?: SortOrder
    layout?: SortOrder
    sourceLayer?: SortOrder
    hover?: SortOrder
    time?: SortOrder
    click?: SortOrder
    hoverStyle?: SortOrder
    clickStyle?: SortOrder
    clickHeader?: SortOrder
    textZoomLevels?: SortOrder
    zoomLevels?: SortOrder
    order?: SortOrder
    viewOrder?: SortOrder
    standalone?: SortOrder
    layerSection?: SortOrder
    _count?: LayerDataCountOrderByAggregateInput
    _avg?: LayerDataAvgOrderByAggregateInput
    _max?: LayerDataMaxOrderByAggregateInput
    _min?: LayerDataMinOrderByAggregateInput
    _sum?: LayerDataSumOrderByAggregateInput
  }

  export type LayerDataScalarWhereWithAggregatesInput = {
    AND?: LayerDataScalarWhereWithAggregatesInput | LayerDataScalarWhereWithAggregatesInput[]
    OR?: LayerDataScalarWhereWithAggregatesInput[]
    NOT?: LayerDataScalarWhereWithAggregatesInput | LayerDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LayerData"> | string
    name?: StringWithAggregatesFilter<"LayerData"> | string
    iconColor?: StringWithAggregatesFilter<"LayerData"> | string
    iconType?: StringWithAggregatesFilter<"LayerData"> | string
    label?: StringWithAggregatesFilter<"LayerData"> | string
    longitude?: FloatNullableWithAggregatesFilter<"LayerData"> | number | null
    latitude?: FloatNullableWithAggregatesFilter<"LayerData"> | number | null
    zoom?: FloatNullableWithAggregatesFilter<"LayerData"> | number | null
    bearing?: FloatNullableWithAggregatesFilter<"LayerData"> | number | null
    topLeftBoundLatitude?: FloatNullableWithAggregatesFilter<"LayerData"> | number | null
    topLeftBoundLongitude?: FloatNullableWithAggregatesFilter<"LayerData"> | number | null
    bottomRightBoundLatitude?: FloatNullableWithAggregatesFilter<"LayerData"> | number | null
    bottomRightBoundLongitude?: FloatNullableWithAggregatesFilter<"LayerData"> | number | null
    zoomToBounds?: BoolNullableWithAggregatesFilter<"LayerData"> | boolean | null
    enableByDefault?: BoolNullableWithAggregatesFilter<"LayerData"> | boolean | null
    topLayerClass?: StringNullableWithAggregatesFilter<"LayerData"> | string | null
    infoId?: StringNullableWithAggregatesFilter<"LayerData"> | string | null
    type?: StringWithAggregatesFilter<"LayerData"> | string
    sourceType?: StringWithAggregatesFilter<"LayerData"> | string
    sourceUrl?: StringWithAggregatesFilter<"LayerData"> | string
    sourceId?: StringWithAggregatesFilter<"LayerData"> | string
    paint?: StringNullableWithAggregatesFilter<"LayerData"> | string | null
    layout?: StringNullableWithAggregatesFilter<"LayerData"> | string | null
    sourceLayer?: StringWithAggregatesFilter<"LayerData"> | string
    hover?: BoolWithAggregatesFilter<"LayerData"> | boolean
    time?: BoolWithAggregatesFilter<"LayerData"> | boolean
    click?: BoolWithAggregatesFilter<"LayerData"> | boolean
    hoverStyle?: StringNullableWithAggregatesFilter<"LayerData"> | string | null
    clickStyle?: StringNullableWithAggregatesFilter<"LayerData"> | string | null
    clickHeader?: StringNullableWithAggregatesFilter<"LayerData"> | string | null
    textZoomLevels?: JsonNullableWithAggregatesFilter<"LayerData">
    zoomLevels?: JsonNullableWithAggregatesFilter<"LayerData">
    order?: IntWithAggregatesFilter<"LayerData"> | number
    viewOrder?: IntNullableWithAggregatesFilter<"LayerData"> | number | null
    standalone?: BoolWithAggregatesFilter<"LayerData"> | boolean
    layerSection?: StringNullableWithAggregatesFilter<"LayerData"> | string | null
  }

  export type ViewOrderCounterWhereInput = {
    AND?: ViewOrderCounterWhereInput | ViewOrderCounterWhereInput[]
    OR?: ViewOrderCounterWhereInput[]
    NOT?: ViewOrderCounterWhereInput | ViewOrderCounterWhereInput[]
    id?: StringFilter<"ViewOrderCounter"> | string
  }

  export type ViewOrderCounterOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type ViewOrderCounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewOrderCounterWhereInput | ViewOrderCounterWhereInput[]
    OR?: ViewOrderCounterWhereInput[]
    NOT?: ViewOrderCounterWhereInput | ViewOrderCounterWhereInput[]
  }, "id">

  export type ViewOrderCounterOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ViewOrderCounterCountOrderByAggregateInput
    _max?: ViewOrderCounterMaxOrderByAggregateInput
    _min?: ViewOrderCounterMinOrderByAggregateInput
  }

  export type ViewOrderCounterScalarWhereWithAggregatesInput = {
    AND?: ViewOrderCounterScalarWhereWithAggregatesInput | ViewOrderCounterScalarWhereWithAggregatesInput[]
    OR?: ViewOrderCounterScalarWhereWithAggregatesInput[]
    NOT?: ViewOrderCounterScalarWhereWithAggregatesInput | ViewOrderCounterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViewOrderCounter"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type MapGroupCreateInput = {
    id?: string
    groupName: string
    label: string
    maps?: MapCreateNestedManyWithoutMapGroupInput
  }

  export type MapGroupUncheckedCreateInput = {
    id?: string
    groupName: string
    label: string
    maps?: MapUncheckedCreateNestedManyWithoutMapGroupInput
  }

  export type MapGroupUpdateInput = {
    groupName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    maps?: MapUpdateManyWithoutMapGroupNestedInput
  }

  export type MapGroupUncheckedUpdateInput = {
    groupName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    maps?: MapUncheckedUpdateManyWithoutMapGroupNestedInput
  }

  export type MapGroupCreateManyInput = {
    id?: string
    groupName: string
    label: string
  }

  export type MapGroupUpdateManyMutationInput = {
    groupName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MapGroupUncheckedUpdateManyInput = {
    groupName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MapCreateInput = {
    id?: string
    mapId: string
    longitude?: number | null
    latitude?: number | null
    mapName: string
    zoom: number
    bearing: number
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    styleId: string
    infoId?: string | null
    zoomLabel?: ZoomLabelCreateNestedOneWithoutMapInput
    MapGroup?: MapGroupCreateNestedOneWithoutMapsInput
  }

  export type MapUncheckedCreateInput = {
    id?: string
    mapId: string
    longitude?: number | null
    latitude?: number | null
    mapName: string
    zoom: number
    bearing: number
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    styleId: string
    groupId: string
    zoomLabelId?: string | null
    infoId?: string | null
  }

  export type MapUpdateInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mapName?: StringFieldUpdateOperationsInput | string
    zoom?: FloatFieldUpdateOperationsInput | number
    bearing?: FloatFieldUpdateOperationsInput | number
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    styleId?: StringFieldUpdateOperationsInput | string
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    zoomLabel?: ZoomLabelUpdateOneWithoutMapNestedInput
    MapGroup?: MapGroupUpdateOneWithoutMapsNestedInput
  }

  export type MapUncheckedUpdateInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mapName?: StringFieldUpdateOperationsInput | string
    zoom?: FloatFieldUpdateOperationsInput | number
    bearing?: FloatFieldUpdateOperationsInput | number
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    styleId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    zoomLabelId?: NullableStringFieldUpdateOperationsInput | string | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapCreateManyInput = {
    id?: string
    mapId: string
    longitude?: number | null
    latitude?: number | null
    mapName: string
    zoom: number
    bearing: number
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    styleId: string
    groupId: string
    zoomLabelId?: string | null
    infoId?: string | null
  }

  export type MapUpdateManyMutationInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mapName?: StringFieldUpdateOperationsInput | string
    zoom?: FloatFieldUpdateOperationsInput | number
    bearing?: FloatFieldUpdateOperationsInput | number
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    styleId?: StringFieldUpdateOperationsInput | string
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapUncheckedUpdateManyInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mapName?: StringFieldUpdateOperationsInput | string
    zoom?: FloatFieldUpdateOperationsInput | number
    bearing?: FloatFieldUpdateOperationsInput | number
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    styleId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    zoomLabelId?: NullableStringFieldUpdateOperationsInput | string | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ZoomLabelCreateInput = {
    id?: string
    title: string
    minZoom?: number | null
    zoom?: number | null
    bearing?: number | null
    centerLatitude?: number | null
    centerLongitude?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds: boolean
    useTextSizeZoomStyling: boolean
    textSizeDefault: number
    textSizeStopsZoom1: number
    textSizeStopsVal1: number
    textSizeStopsZoom2: number
    textSizeStopsVal2: number
    useTextColorZoomStyling: boolean
    textColorDefault: string
    textColorStopsZoom1: number
    textColorStopsVal1: string
    textColorStopsZoom2: number
    textColorStopsVal2: string
    useTextHaloWidthZoomStyling: boolean
    textHaloWidthDefault: number
    textHaloWidthStopsZoom1: number
    textHaloWidthStopsVal1: number
    textHaloWidthStopsZoom2: number
    textHaloWidthStopsVal2: number
    useTextHaloBlurZoomStyling: boolean
    textHaloBlurDefault: number
    textHaloBlurStopsZoom1: number
    textHaloBlurStopsVal1: number
    textHaloBlurStopsZoom2: number
    textHaloBlurStopsVal2: number
    useTextHaloColorZoomStyling: boolean
    textHaloColorDefault: string
    textHaloColorStopsZoom1: number
    textHaloColorStopsVal1: string
    textHaloColorStopsZoom2: number
    textHaloColorStopsVal2: string
    useTextOpacityZoomStyling: boolean
    textOpacityDefault: number
    textOpacityStopsZoom1: number
    textOpacityStopsVal1: number
    textOpacityStopsZoom2: number
    textOpacityStopsVal2: number
    Map?: MapCreateNestedManyWithoutZoomLabelInput
  }

  export type ZoomLabelUncheckedCreateInput = {
    id?: string
    title: string
    minZoom?: number | null
    zoom?: number | null
    bearing?: number | null
    centerLatitude?: number | null
    centerLongitude?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds: boolean
    useTextSizeZoomStyling: boolean
    textSizeDefault: number
    textSizeStopsZoom1: number
    textSizeStopsVal1: number
    textSizeStopsZoom2: number
    textSizeStopsVal2: number
    useTextColorZoomStyling: boolean
    textColorDefault: string
    textColorStopsZoom1: number
    textColorStopsVal1: string
    textColorStopsZoom2: number
    textColorStopsVal2: string
    useTextHaloWidthZoomStyling: boolean
    textHaloWidthDefault: number
    textHaloWidthStopsZoom1: number
    textHaloWidthStopsVal1: number
    textHaloWidthStopsZoom2: number
    textHaloWidthStopsVal2: number
    useTextHaloBlurZoomStyling: boolean
    textHaloBlurDefault: number
    textHaloBlurStopsZoom1: number
    textHaloBlurStopsVal1: number
    textHaloBlurStopsZoom2: number
    textHaloBlurStopsVal2: number
    useTextHaloColorZoomStyling: boolean
    textHaloColorDefault: string
    textHaloColorStopsZoom1: number
    textHaloColorStopsVal1: string
    textHaloColorStopsZoom2: number
    textHaloColorStopsVal2: string
    useTextOpacityZoomStyling: boolean
    textOpacityDefault: number
    textOpacityStopsZoom1: number
    textOpacityStopsVal1: number
    textOpacityStopsZoom2: number
    textOpacityStopsVal2: number
    Map?: MapUncheckedCreateNestedManyWithoutZoomLabelInput
  }

  export type ZoomLabelUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    minZoom?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: BoolFieldUpdateOperationsInput | boolean
    useTextSizeZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textSizeDefault?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom1?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal1?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom2?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textColorDefault?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextHaloWidthZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloWidthDefault?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloBlurZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloBlurDefault?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloColorDefault?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextOpacityZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textOpacityDefault?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom1?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal1?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom2?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal2?: FloatFieldUpdateOperationsInput | number
    Map?: MapUpdateManyWithoutZoomLabelNestedInput
  }

  export type ZoomLabelUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    minZoom?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: BoolFieldUpdateOperationsInput | boolean
    useTextSizeZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textSizeDefault?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom1?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal1?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom2?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textColorDefault?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextHaloWidthZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloWidthDefault?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloBlurZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloBlurDefault?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloColorDefault?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextOpacityZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textOpacityDefault?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom1?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal1?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom2?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal2?: FloatFieldUpdateOperationsInput | number
    Map?: MapUncheckedUpdateManyWithoutZoomLabelNestedInput
  }

  export type ZoomLabelCreateManyInput = {
    id?: string
    title: string
    minZoom?: number | null
    zoom?: number | null
    bearing?: number | null
    centerLatitude?: number | null
    centerLongitude?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds: boolean
    useTextSizeZoomStyling: boolean
    textSizeDefault: number
    textSizeStopsZoom1: number
    textSizeStopsVal1: number
    textSizeStopsZoom2: number
    textSizeStopsVal2: number
    useTextColorZoomStyling: boolean
    textColorDefault: string
    textColorStopsZoom1: number
    textColorStopsVal1: string
    textColorStopsZoom2: number
    textColorStopsVal2: string
    useTextHaloWidthZoomStyling: boolean
    textHaloWidthDefault: number
    textHaloWidthStopsZoom1: number
    textHaloWidthStopsVal1: number
    textHaloWidthStopsZoom2: number
    textHaloWidthStopsVal2: number
    useTextHaloBlurZoomStyling: boolean
    textHaloBlurDefault: number
    textHaloBlurStopsZoom1: number
    textHaloBlurStopsVal1: number
    textHaloBlurStopsZoom2: number
    textHaloBlurStopsVal2: number
    useTextHaloColorZoomStyling: boolean
    textHaloColorDefault: string
    textHaloColorStopsZoom1: number
    textHaloColorStopsVal1: string
    textHaloColorStopsZoom2: number
    textHaloColorStopsVal2: string
    useTextOpacityZoomStyling: boolean
    textOpacityDefault: number
    textOpacityStopsZoom1: number
    textOpacityStopsVal1: number
    textOpacityStopsZoom2: number
    textOpacityStopsVal2: number
  }

  export type ZoomLabelUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    minZoom?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: BoolFieldUpdateOperationsInput | boolean
    useTextSizeZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textSizeDefault?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom1?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal1?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom2?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textColorDefault?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextHaloWidthZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloWidthDefault?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloBlurZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloBlurDefault?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloColorDefault?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextOpacityZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textOpacityDefault?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom1?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal1?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom2?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal2?: FloatFieldUpdateOperationsInput | number
  }

  export type ZoomLabelUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    minZoom?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: BoolFieldUpdateOperationsInput | boolean
    useTextSizeZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textSizeDefault?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom1?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal1?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom2?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textColorDefault?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextHaloWidthZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloWidthDefault?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloBlurZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloBlurDefault?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloColorDefault?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextOpacityZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textOpacityDefault?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom1?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal1?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom2?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal2?: FloatFieldUpdateOperationsInput | number
  }

  export type ButtonLinkCreateInput = {
    id?: string
    label: string
    url: string
  }

  export type ButtonLinkUncheckedCreateInput = {
    id?: string
    label: string
    url: string
  }

  export type ButtonLinkUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ButtonLinkUncheckedUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ButtonLinkCreateManyInput = {
    id?: string
    label: string
    url: string
  }

  export type ButtonLinkUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ButtonLinkUncheckedUpdateManyInput = {
    label?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LayerSectionCreateInput = {
    id?: string
    name: string
    order: number
    layerGroups?: LayerGroupCreateNestedManyWithoutLayerSectionInput
  }

  export type LayerSectionUncheckedCreateInput = {
    id?: string
    name: string
    order: number
    layerGroups?: LayerGroupUncheckedCreateNestedManyWithoutLayerSectionInput
  }

  export type LayerSectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    layerGroups?: LayerGroupUpdateManyWithoutLayerSectionNestedInput
  }

  export type LayerSectionUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    layerGroups?: LayerGroupUncheckedUpdateManyWithoutLayerSectionNestedInput
  }

  export type LayerSectionCreateManyInput = {
    id?: string
    name: string
    order: number
  }

  export type LayerSectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LayerSectionUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LayerGroupCreateInput = {
    id?: string
    name: string
    longitude?: string | null
    latitude?: string | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    order: number
    infoId?: string | null
    layers?: LayerDataCreateNestedManyWithoutGroupNameInput
    layerSection: LayerSectionCreateNestedOneWithoutLayerGroupsInput
  }

  export type LayerGroupUncheckedCreateInput = {
    id?: string
    name: string
    layerSectionId: string
    longitude?: string | null
    latitude?: string | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    order: number
    infoId?: string | null
    layers?: LayerDataUncheckedCreateNestedManyWithoutGroupNameInput
  }

  export type LayerGroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order?: IntFieldUpdateOperationsInput | number
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    layers?: LayerDataUpdateManyWithoutGroupNameNestedInput
    layerSection?: LayerSectionUpdateOneRequiredWithoutLayerGroupsNestedInput
  }

  export type LayerGroupUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    layerSectionId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order?: IntFieldUpdateOperationsInput | number
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    layers?: LayerDataUncheckedUpdateManyWithoutGroupNameNestedInput
  }

  export type LayerGroupCreateManyInput = {
    id?: string
    name: string
    layerSectionId: string
    longitude?: string | null
    latitude?: string | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    order: number
    infoId?: string | null
  }

  export type LayerGroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order?: IntFieldUpdateOperationsInput | number
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayerGroupUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    layerSectionId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order?: IntFieldUpdateOperationsInput | number
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayerDataCreateInput = {
    id?: string
    name: string
    iconColor: string
    iconType: string
    label: string
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    enableByDefault?: boolean | null
    infoId?: string | null
    type: string
    sourceType: string
    sourceUrl: string
    sourceId: string
    paint?: string | null
    layout?: string | null
    sourceLayer: string
    hover: boolean
    time: boolean
    click: boolean
    hoverStyle?: string | null
    clickStyle?: string | null
    clickHeader?: string | null
    hoverContent?: XOR<hoverItemListCreateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | null
    zoomLevels?: InputJsonValue | null
    order: number
    viewOrder?: number | null
    standalone?: boolean
    layerSection?: string | null
    groupName?: LayerGroupCreateNestedOneWithoutLayersInput
  }

  export type LayerDataUncheckedCreateInput = {
    id?: string
    name: string
    iconColor: string
    iconType: string
    label: string
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    enableByDefault?: boolean | null
    topLayerClass?: string | null
    infoId?: string | null
    type: string
    sourceType: string
    sourceUrl: string
    sourceId: string
    paint?: string | null
    layout?: string | null
    sourceLayer: string
    hover: boolean
    time: boolean
    click: boolean
    hoverStyle?: string | null
    clickStyle?: string | null
    clickHeader?: string | null
    hoverContent?: XOR<hoverItemListCreateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | null
    zoomLevels?: InputJsonValue | null
    order: number
    viewOrder?: number | null
    standalone?: boolean
    layerSection?: string | null
  }

  export type LayerDataUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconType?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enableByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    paint?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLayer?: StringFieldUpdateOperationsInput | string
    hover?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    click?: BoolFieldUpdateOperationsInput | boolean
    hoverStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickHeader?: NullableStringFieldUpdateOperationsInput | string | null
    hoverContent?: XOR<hoverItemListUpdateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | InputJsonValue | null
    zoomLevels?: InputJsonValue | InputJsonValue | null
    order?: IntFieldUpdateOperationsInput | number
    viewOrder?: NullableIntFieldUpdateOperationsInput | number | null
    standalone?: BoolFieldUpdateOperationsInput | boolean
    layerSection?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: LayerGroupUpdateOneWithoutLayersNestedInput
  }

  export type LayerDataUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconType?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enableByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    topLayerClass?: NullableStringFieldUpdateOperationsInput | string | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    paint?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLayer?: StringFieldUpdateOperationsInput | string
    hover?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    click?: BoolFieldUpdateOperationsInput | boolean
    hoverStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickHeader?: NullableStringFieldUpdateOperationsInput | string | null
    hoverContent?: XOR<hoverItemListUpdateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | InputJsonValue | null
    zoomLevels?: InputJsonValue | InputJsonValue | null
    order?: IntFieldUpdateOperationsInput | number
    viewOrder?: NullableIntFieldUpdateOperationsInput | number | null
    standalone?: BoolFieldUpdateOperationsInput | boolean
    layerSection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayerDataCreateManyInput = {
    id?: string
    name: string
    iconColor: string
    iconType: string
    label: string
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    enableByDefault?: boolean | null
    topLayerClass?: string | null
    infoId?: string | null
    type: string
    sourceType: string
    sourceUrl: string
    sourceId: string
    paint?: string | null
    layout?: string | null
    sourceLayer: string
    hover: boolean
    time: boolean
    click: boolean
    hoverStyle?: string | null
    clickStyle?: string | null
    clickHeader?: string | null
    hoverContent?: XOR<hoverItemListCreateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | null
    zoomLevels?: InputJsonValue | null
    order: number
    viewOrder?: number | null
    standalone?: boolean
    layerSection?: string | null
  }

  export type LayerDataUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconType?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enableByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    paint?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLayer?: StringFieldUpdateOperationsInput | string
    hover?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    click?: BoolFieldUpdateOperationsInput | boolean
    hoverStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickHeader?: NullableStringFieldUpdateOperationsInput | string | null
    hoverContent?: XOR<hoverItemListUpdateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | InputJsonValue | null
    zoomLevels?: InputJsonValue | InputJsonValue | null
    order?: IntFieldUpdateOperationsInput | number
    viewOrder?: NullableIntFieldUpdateOperationsInput | number | null
    standalone?: BoolFieldUpdateOperationsInput | boolean
    layerSection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayerDataUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconType?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enableByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    topLayerClass?: NullableStringFieldUpdateOperationsInput | string | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    paint?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLayer?: StringFieldUpdateOperationsInput | string
    hover?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    click?: BoolFieldUpdateOperationsInput | boolean
    hoverStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickHeader?: NullableStringFieldUpdateOperationsInput | string | null
    hoverContent?: XOR<hoverItemListUpdateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | InputJsonValue | null
    zoomLevels?: InputJsonValue | InputJsonValue | null
    order?: IntFieldUpdateOperationsInput | number
    viewOrder?: NullableIntFieldUpdateOperationsInput | number | null
    standalone?: BoolFieldUpdateOperationsInput | boolean
    layerSection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViewOrderCounterCreateInput = {
    id?: string
  }

  export type ViewOrderCounterUncheckedCreateInput = {
    id?: string
  }

  export type ViewOrderCounterUpdateInput = {

  }

  export type ViewOrderCounterUncheckedUpdateInput = {

  }

  export type ViewOrderCounterCreateManyInput = {
    id?: string
  }

  export type ViewOrderCounterUpdateManyMutationInput = {

  }

  export type ViewOrderCounterUncheckedUpdateManyInput = {

  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MapListRelationFilter = {
    every?: MapWhereInput
    some?: MapWhereInput
    none?: MapWhereInput
  }

  export type MapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapGroupCountOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    label?: SortOrder
  }

  export type MapGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    label?: SortOrder
  }

  export type MapGroupMinOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    label?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ZoomLabelNullableRelationFilter = {
    is?: ZoomLabelWhereInput | null
    isNot?: ZoomLabelWhereInput | null
  }

  export type MapGroupNullableRelationFilter = {
    is?: MapGroupWhereInput | null
    isNot?: MapGroupWhereInput | null
  }

  export type MapCountOrderByAggregateInput = {
    id?: SortOrder
    mapId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    mapName?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    styleId?: SortOrder
    groupId?: SortOrder
    zoomLabelId?: SortOrder
    infoId?: SortOrder
  }

  export type MapAvgOrderByAggregateInput = {
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
  }

  export type MapMaxOrderByAggregateInput = {
    id?: SortOrder
    mapId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    mapName?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    styleId?: SortOrder
    groupId?: SortOrder
    zoomLabelId?: SortOrder
    infoId?: SortOrder
  }

  export type MapMinOrderByAggregateInput = {
    id?: SortOrder
    mapId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    mapName?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    styleId?: SortOrder
    groupId?: SortOrder
    zoomLabelId?: SortOrder
    infoId?: SortOrder
  }

  export type MapSumOrderByAggregateInput = {
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ZoomLabelCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    minZoom?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    centerLatitude?: SortOrder
    centerLongitude?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    useTextSizeZoomStyling?: SortOrder
    textSizeDefault?: SortOrder
    textSizeStopsZoom1?: SortOrder
    textSizeStopsVal1?: SortOrder
    textSizeStopsZoom2?: SortOrder
    textSizeStopsVal2?: SortOrder
    useTextColorZoomStyling?: SortOrder
    textColorDefault?: SortOrder
    textColorStopsZoom1?: SortOrder
    textColorStopsVal1?: SortOrder
    textColorStopsZoom2?: SortOrder
    textColorStopsVal2?: SortOrder
    useTextHaloWidthZoomStyling?: SortOrder
    textHaloWidthDefault?: SortOrder
    textHaloWidthStopsZoom1?: SortOrder
    textHaloWidthStopsVal1?: SortOrder
    textHaloWidthStopsZoom2?: SortOrder
    textHaloWidthStopsVal2?: SortOrder
    useTextHaloBlurZoomStyling?: SortOrder
    textHaloBlurDefault?: SortOrder
    textHaloBlurStopsZoom1?: SortOrder
    textHaloBlurStopsVal1?: SortOrder
    textHaloBlurStopsZoom2?: SortOrder
    textHaloBlurStopsVal2?: SortOrder
    useTextHaloColorZoomStyling?: SortOrder
    textHaloColorDefault?: SortOrder
    textHaloColorStopsZoom1?: SortOrder
    textHaloColorStopsVal1?: SortOrder
    textHaloColorStopsZoom2?: SortOrder
    textHaloColorStopsVal2?: SortOrder
    useTextOpacityZoomStyling?: SortOrder
    textOpacityDefault?: SortOrder
    textOpacityStopsZoom1?: SortOrder
    textOpacityStopsVal1?: SortOrder
    textOpacityStopsZoom2?: SortOrder
    textOpacityStopsVal2?: SortOrder
  }

  export type ZoomLabelAvgOrderByAggregateInput = {
    minZoom?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    centerLatitude?: SortOrder
    centerLongitude?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    textSizeDefault?: SortOrder
    textSizeStopsZoom1?: SortOrder
    textSizeStopsVal1?: SortOrder
    textSizeStopsZoom2?: SortOrder
    textSizeStopsVal2?: SortOrder
    textColorStopsZoom1?: SortOrder
    textColorStopsZoom2?: SortOrder
    textHaloWidthDefault?: SortOrder
    textHaloWidthStopsZoom1?: SortOrder
    textHaloWidthStopsVal1?: SortOrder
    textHaloWidthStopsZoom2?: SortOrder
    textHaloWidthStopsVal2?: SortOrder
    textHaloBlurDefault?: SortOrder
    textHaloBlurStopsZoom1?: SortOrder
    textHaloBlurStopsVal1?: SortOrder
    textHaloBlurStopsZoom2?: SortOrder
    textHaloBlurStopsVal2?: SortOrder
    textHaloColorStopsZoom1?: SortOrder
    textHaloColorStopsZoom2?: SortOrder
    textOpacityDefault?: SortOrder
    textOpacityStopsZoom1?: SortOrder
    textOpacityStopsVal1?: SortOrder
    textOpacityStopsZoom2?: SortOrder
    textOpacityStopsVal2?: SortOrder
  }

  export type ZoomLabelMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    minZoom?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    centerLatitude?: SortOrder
    centerLongitude?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    useTextSizeZoomStyling?: SortOrder
    textSizeDefault?: SortOrder
    textSizeStopsZoom1?: SortOrder
    textSizeStopsVal1?: SortOrder
    textSizeStopsZoom2?: SortOrder
    textSizeStopsVal2?: SortOrder
    useTextColorZoomStyling?: SortOrder
    textColorDefault?: SortOrder
    textColorStopsZoom1?: SortOrder
    textColorStopsVal1?: SortOrder
    textColorStopsZoom2?: SortOrder
    textColorStopsVal2?: SortOrder
    useTextHaloWidthZoomStyling?: SortOrder
    textHaloWidthDefault?: SortOrder
    textHaloWidthStopsZoom1?: SortOrder
    textHaloWidthStopsVal1?: SortOrder
    textHaloWidthStopsZoom2?: SortOrder
    textHaloWidthStopsVal2?: SortOrder
    useTextHaloBlurZoomStyling?: SortOrder
    textHaloBlurDefault?: SortOrder
    textHaloBlurStopsZoom1?: SortOrder
    textHaloBlurStopsVal1?: SortOrder
    textHaloBlurStopsZoom2?: SortOrder
    textHaloBlurStopsVal2?: SortOrder
    useTextHaloColorZoomStyling?: SortOrder
    textHaloColorDefault?: SortOrder
    textHaloColorStopsZoom1?: SortOrder
    textHaloColorStopsVal1?: SortOrder
    textHaloColorStopsZoom2?: SortOrder
    textHaloColorStopsVal2?: SortOrder
    useTextOpacityZoomStyling?: SortOrder
    textOpacityDefault?: SortOrder
    textOpacityStopsZoom1?: SortOrder
    textOpacityStopsVal1?: SortOrder
    textOpacityStopsZoom2?: SortOrder
    textOpacityStopsVal2?: SortOrder
  }

  export type ZoomLabelMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    minZoom?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    centerLatitude?: SortOrder
    centerLongitude?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    useTextSizeZoomStyling?: SortOrder
    textSizeDefault?: SortOrder
    textSizeStopsZoom1?: SortOrder
    textSizeStopsVal1?: SortOrder
    textSizeStopsZoom2?: SortOrder
    textSizeStopsVal2?: SortOrder
    useTextColorZoomStyling?: SortOrder
    textColorDefault?: SortOrder
    textColorStopsZoom1?: SortOrder
    textColorStopsVal1?: SortOrder
    textColorStopsZoom2?: SortOrder
    textColorStopsVal2?: SortOrder
    useTextHaloWidthZoomStyling?: SortOrder
    textHaloWidthDefault?: SortOrder
    textHaloWidthStopsZoom1?: SortOrder
    textHaloWidthStopsVal1?: SortOrder
    textHaloWidthStopsZoom2?: SortOrder
    textHaloWidthStopsVal2?: SortOrder
    useTextHaloBlurZoomStyling?: SortOrder
    textHaloBlurDefault?: SortOrder
    textHaloBlurStopsZoom1?: SortOrder
    textHaloBlurStopsVal1?: SortOrder
    textHaloBlurStopsZoom2?: SortOrder
    textHaloBlurStopsVal2?: SortOrder
    useTextHaloColorZoomStyling?: SortOrder
    textHaloColorDefault?: SortOrder
    textHaloColorStopsZoom1?: SortOrder
    textHaloColorStopsVal1?: SortOrder
    textHaloColorStopsZoom2?: SortOrder
    textHaloColorStopsVal2?: SortOrder
    useTextOpacityZoomStyling?: SortOrder
    textOpacityDefault?: SortOrder
    textOpacityStopsZoom1?: SortOrder
    textOpacityStopsVal1?: SortOrder
    textOpacityStopsZoom2?: SortOrder
    textOpacityStopsVal2?: SortOrder
  }

  export type ZoomLabelSumOrderByAggregateInput = {
    minZoom?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    centerLatitude?: SortOrder
    centerLongitude?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    textSizeDefault?: SortOrder
    textSizeStopsZoom1?: SortOrder
    textSizeStopsVal1?: SortOrder
    textSizeStopsZoom2?: SortOrder
    textSizeStopsVal2?: SortOrder
    textColorStopsZoom1?: SortOrder
    textColorStopsZoom2?: SortOrder
    textHaloWidthDefault?: SortOrder
    textHaloWidthStopsZoom1?: SortOrder
    textHaloWidthStopsVal1?: SortOrder
    textHaloWidthStopsZoom2?: SortOrder
    textHaloWidthStopsVal2?: SortOrder
    textHaloBlurDefault?: SortOrder
    textHaloBlurStopsZoom1?: SortOrder
    textHaloBlurStopsVal1?: SortOrder
    textHaloBlurStopsZoom2?: SortOrder
    textHaloBlurStopsVal2?: SortOrder
    textHaloColorStopsZoom1?: SortOrder
    textHaloColorStopsZoom2?: SortOrder
    textOpacityDefault?: SortOrder
    textOpacityStopsZoom1?: SortOrder
    textOpacityStopsVal1?: SortOrder
    textOpacityStopsZoom2?: SortOrder
    textOpacityStopsVal2?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type ButtonLinkCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
  }

  export type ButtonLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
  }

  export type ButtonLinkMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
  }

  export type LayerGroupListRelationFilter = {
    every?: LayerGroupWhereInput
    some?: LayerGroupWhereInput
    none?: LayerGroupWhereInput
  }

  export type LayerGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LayerSectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
  }

  export type LayerSectionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LayerSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
  }

  export type LayerSectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
  }

  export type LayerSectionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LayerDataListRelationFilter = {
    every?: LayerDataWhereInput
    some?: LayerDataWhereInput
    none?: LayerDataWhereInput
  }

  export type LayerSectionRelationFilter = {
    is?: LayerSectionWhereInput
    isNot?: LayerSectionWhereInput
  }

  export type LayerDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LayerGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    layerSectionId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    order?: SortOrder
    infoId?: SortOrder
  }

  export type LayerGroupAvgOrderByAggregateInput = {
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    order?: SortOrder
  }

  export type LayerGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    layerSectionId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    order?: SortOrder
    infoId?: SortOrder
  }

  export type LayerGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    layerSectionId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    order?: SortOrder
    infoId?: SortOrder
  }

  export type LayerGroupSumOrderByAggregateInput = {
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    order?: SortOrder
  }

  export type HoverItemCompositeListFilter = {
    equals?: hoverItemObjectEqualityInput[]
    every?: hoverItemWhereInput
    some?: hoverItemWhereInput
    none?: hoverItemWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type hoverItemObjectEqualityInput = {
    label: string
    type: string
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type LayerGroupNullableRelationFilter = {
    is?: LayerGroupWhereInput | null
    isNot?: LayerGroupWhereInput | null
  }

  export type hoverItemOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type LayerDataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconColor?: SortOrder
    iconType?: SortOrder
    label?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    enableByDefault?: SortOrder
    topLayerClass?: SortOrder
    infoId?: SortOrder
    type?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    sourceId?: SortOrder
    paint?: SortOrder
    layout?: SortOrder
    sourceLayer?: SortOrder
    hover?: SortOrder
    time?: SortOrder
    click?: SortOrder
    hoverStyle?: SortOrder
    clickStyle?: SortOrder
    clickHeader?: SortOrder
    textZoomLevels?: SortOrder
    zoomLevels?: SortOrder
    order?: SortOrder
    viewOrder?: SortOrder
    standalone?: SortOrder
    layerSection?: SortOrder
  }

  export type LayerDataAvgOrderByAggregateInput = {
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    order?: SortOrder
    viewOrder?: SortOrder
  }

  export type LayerDataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconColor?: SortOrder
    iconType?: SortOrder
    label?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    enableByDefault?: SortOrder
    topLayerClass?: SortOrder
    infoId?: SortOrder
    type?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    sourceId?: SortOrder
    paint?: SortOrder
    layout?: SortOrder
    sourceLayer?: SortOrder
    hover?: SortOrder
    time?: SortOrder
    click?: SortOrder
    hoverStyle?: SortOrder
    clickStyle?: SortOrder
    clickHeader?: SortOrder
    order?: SortOrder
    viewOrder?: SortOrder
    standalone?: SortOrder
    layerSection?: SortOrder
  }

  export type LayerDataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconColor?: SortOrder
    iconType?: SortOrder
    label?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    zoomToBounds?: SortOrder
    enableByDefault?: SortOrder
    topLayerClass?: SortOrder
    infoId?: SortOrder
    type?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    sourceId?: SortOrder
    paint?: SortOrder
    layout?: SortOrder
    sourceLayer?: SortOrder
    hover?: SortOrder
    time?: SortOrder
    click?: SortOrder
    hoverStyle?: SortOrder
    clickStyle?: SortOrder
    clickHeader?: SortOrder
    order?: SortOrder
    viewOrder?: SortOrder
    standalone?: SortOrder
    layerSection?: SortOrder
  }

  export type LayerDataSumOrderByAggregateInput = {
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    topLeftBoundLatitude?: SortOrder
    topLeftBoundLongitude?: SortOrder
    bottomRightBoundLatitude?: SortOrder
    bottomRightBoundLongitude?: SortOrder
    order?: SortOrder
    viewOrder?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ViewOrderCounterCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ViewOrderCounterMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ViewOrderCounterMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MapCreateNestedManyWithoutMapGroupInput = {
    create?: XOR<MapCreateWithoutMapGroupInput, MapUncheckedCreateWithoutMapGroupInput> | MapCreateWithoutMapGroupInput[] | MapUncheckedCreateWithoutMapGroupInput[]
    connectOrCreate?: MapCreateOrConnectWithoutMapGroupInput | MapCreateOrConnectWithoutMapGroupInput[]
    createMany?: MapCreateManyMapGroupInputEnvelope
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
  }

  export type MapUncheckedCreateNestedManyWithoutMapGroupInput = {
    create?: XOR<MapCreateWithoutMapGroupInput, MapUncheckedCreateWithoutMapGroupInput> | MapCreateWithoutMapGroupInput[] | MapUncheckedCreateWithoutMapGroupInput[]
    connectOrCreate?: MapCreateOrConnectWithoutMapGroupInput | MapCreateOrConnectWithoutMapGroupInput[]
    createMany?: MapCreateManyMapGroupInputEnvelope
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
  }

  export type MapUpdateManyWithoutMapGroupNestedInput = {
    create?: XOR<MapCreateWithoutMapGroupInput, MapUncheckedCreateWithoutMapGroupInput> | MapCreateWithoutMapGroupInput[] | MapUncheckedCreateWithoutMapGroupInput[]
    connectOrCreate?: MapCreateOrConnectWithoutMapGroupInput | MapCreateOrConnectWithoutMapGroupInput[]
    upsert?: MapUpsertWithWhereUniqueWithoutMapGroupInput | MapUpsertWithWhereUniqueWithoutMapGroupInput[]
    createMany?: MapCreateManyMapGroupInputEnvelope
    set?: MapWhereUniqueInput | MapWhereUniqueInput[]
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[]
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    update?: MapUpdateWithWhereUniqueWithoutMapGroupInput | MapUpdateWithWhereUniqueWithoutMapGroupInput[]
    updateMany?: MapUpdateManyWithWhereWithoutMapGroupInput | MapUpdateManyWithWhereWithoutMapGroupInput[]
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[]
  }

  export type MapUncheckedUpdateManyWithoutMapGroupNestedInput = {
    create?: XOR<MapCreateWithoutMapGroupInput, MapUncheckedCreateWithoutMapGroupInput> | MapCreateWithoutMapGroupInput[] | MapUncheckedCreateWithoutMapGroupInput[]
    connectOrCreate?: MapCreateOrConnectWithoutMapGroupInput | MapCreateOrConnectWithoutMapGroupInput[]
    upsert?: MapUpsertWithWhereUniqueWithoutMapGroupInput | MapUpsertWithWhereUniqueWithoutMapGroupInput[]
    createMany?: MapCreateManyMapGroupInputEnvelope
    set?: MapWhereUniqueInput | MapWhereUniqueInput[]
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[]
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    update?: MapUpdateWithWhereUniqueWithoutMapGroupInput | MapUpdateWithWhereUniqueWithoutMapGroupInput[]
    updateMany?: MapUpdateManyWithWhereWithoutMapGroupInput | MapUpdateManyWithWhereWithoutMapGroupInput[]
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[]
  }

  export type ZoomLabelCreateNestedOneWithoutMapInput = {
    create?: XOR<ZoomLabelCreateWithoutMapInput, ZoomLabelUncheckedCreateWithoutMapInput>
    connectOrCreate?: ZoomLabelCreateOrConnectWithoutMapInput
    connect?: ZoomLabelWhereUniqueInput
  }

  export type MapGroupCreateNestedOneWithoutMapsInput = {
    create?: XOR<MapGroupCreateWithoutMapsInput, MapGroupUncheckedCreateWithoutMapsInput>
    connectOrCreate?: MapGroupCreateOrConnectWithoutMapsInput
    connect?: MapGroupWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ZoomLabelUpdateOneWithoutMapNestedInput = {
    create?: XOR<ZoomLabelCreateWithoutMapInput, ZoomLabelUncheckedCreateWithoutMapInput>
    connectOrCreate?: ZoomLabelCreateOrConnectWithoutMapInput
    upsert?: ZoomLabelUpsertWithoutMapInput
    disconnect?: boolean
    delete?: ZoomLabelWhereInput | boolean
    connect?: ZoomLabelWhereUniqueInput
    update?: XOR<XOR<ZoomLabelUpdateToOneWithWhereWithoutMapInput, ZoomLabelUpdateWithoutMapInput>, ZoomLabelUncheckedUpdateWithoutMapInput>
  }

  export type MapGroupUpdateOneWithoutMapsNestedInput = {
    create?: XOR<MapGroupCreateWithoutMapsInput, MapGroupUncheckedCreateWithoutMapsInput>
    connectOrCreate?: MapGroupCreateOrConnectWithoutMapsInput
    upsert?: MapGroupUpsertWithoutMapsInput
    disconnect?: boolean
    delete?: MapGroupWhereInput | boolean
    connect?: MapGroupWhereUniqueInput
    update?: XOR<XOR<MapGroupUpdateToOneWithWhereWithoutMapsInput, MapGroupUpdateWithoutMapsInput>, MapGroupUncheckedUpdateWithoutMapsInput>
  }

  export type MapCreateNestedManyWithoutZoomLabelInput = {
    create?: XOR<MapCreateWithoutZoomLabelInput, MapUncheckedCreateWithoutZoomLabelInput> | MapCreateWithoutZoomLabelInput[] | MapUncheckedCreateWithoutZoomLabelInput[]
    connectOrCreate?: MapCreateOrConnectWithoutZoomLabelInput | MapCreateOrConnectWithoutZoomLabelInput[]
    createMany?: MapCreateManyZoomLabelInputEnvelope
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
  }

  export type MapUncheckedCreateNestedManyWithoutZoomLabelInput = {
    create?: XOR<MapCreateWithoutZoomLabelInput, MapUncheckedCreateWithoutZoomLabelInput> | MapCreateWithoutZoomLabelInput[] | MapUncheckedCreateWithoutZoomLabelInput[]
    connectOrCreate?: MapCreateOrConnectWithoutZoomLabelInput | MapCreateOrConnectWithoutZoomLabelInput[]
    createMany?: MapCreateManyZoomLabelInputEnvelope
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MapUpdateManyWithoutZoomLabelNestedInput = {
    create?: XOR<MapCreateWithoutZoomLabelInput, MapUncheckedCreateWithoutZoomLabelInput> | MapCreateWithoutZoomLabelInput[] | MapUncheckedCreateWithoutZoomLabelInput[]
    connectOrCreate?: MapCreateOrConnectWithoutZoomLabelInput | MapCreateOrConnectWithoutZoomLabelInput[]
    upsert?: MapUpsertWithWhereUniqueWithoutZoomLabelInput | MapUpsertWithWhereUniqueWithoutZoomLabelInput[]
    createMany?: MapCreateManyZoomLabelInputEnvelope
    set?: MapWhereUniqueInput | MapWhereUniqueInput[]
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[]
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    update?: MapUpdateWithWhereUniqueWithoutZoomLabelInput | MapUpdateWithWhereUniqueWithoutZoomLabelInput[]
    updateMany?: MapUpdateManyWithWhereWithoutZoomLabelInput | MapUpdateManyWithWhereWithoutZoomLabelInput[]
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[]
  }

  export type MapUncheckedUpdateManyWithoutZoomLabelNestedInput = {
    create?: XOR<MapCreateWithoutZoomLabelInput, MapUncheckedCreateWithoutZoomLabelInput> | MapCreateWithoutZoomLabelInput[] | MapUncheckedCreateWithoutZoomLabelInput[]
    connectOrCreate?: MapCreateOrConnectWithoutZoomLabelInput | MapCreateOrConnectWithoutZoomLabelInput[]
    upsert?: MapUpsertWithWhereUniqueWithoutZoomLabelInput | MapUpsertWithWhereUniqueWithoutZoomLabelInput[]
    createMany?: MapCreateManyZoomLabelInputEnvelope
    set?: MapWhereUniqueInput | MapWhereUniqueInput[]
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[]
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    update?: MapUpdateWithWhereUniqueWithoutZoomLabelInput | MapUpdateWithWhereUniqueWithoutZoomLabelInput[]
    updateMany?: MapUpdateManyWithWhereWithoutZoomLabelInput | MapUpdateManyWithWhereWithoutZoomLabelInput[]
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[]
  }

  export type LayerGroupCreateNestedManyWithoutLayerSectionInput = {
    create?: XOR<LayerGroupCreateWithoutLayerSectionInput, LayerGroupUncheckedCreateWithoutLayerSectionInput> | LayerGroupCreateWithoutLayerSectionInput[] | LayerGroupUncheckedCreateWithoutLayerSectionInput[]
    connectOrCreate?: LayerGroupCreateOrConnectWithoutLayerSectionInput | LayerGroupCreateOrConnectWithoutLayerSectionInput[]
    createMany?: LayerGroupCreateManyLayerSectionInputEnvelope
    connect?: LayerGroupWhereUniqueInput | LayerGroupWhereUniqueInput[]
  }

  export type LayerGroupUncheckedCreateNestedManyWithoutLayerSectionInput = {
    create?: XOR<LayerGroupCreateWithoutLayerSectionInput, LayerGroupUncheckedCreateWithoutLayerSectionInput> | LayerGroupCreateWithoutLayerSectionInput[] | LayerGroupUncheckedCreateWithoutLayerSectionInput[]
    connectOrCreate?: LayerGroupCreateOrConnectWithoutLayerSectionInput | LayerGroupCreateOrConnectWithoutLayerSectionInput[]
    createMany?: LayerGroupCreateManyLayerSectionInputEnvelope
    connect?: LayerGroupWhereUniqueInput | LayerGroupWhereUniqueInput[]
  }

  export type LayerGroupUpdateManyWithoutLayerSectionNestedInput = {
    create?: XOR<LayerGroupCreateWithoutLayerSectionInput, LayerGroupUncheckedCreateWithoutLayerSectionInput> | LayerGroupCreateWithoutLayerSectionInput[] | LayerGroupUncheckedCreateWithoutLayerSectionInput[]
    connectOrCreate?: LayerGroupCreateOrConnectWithoutLayerSectionInput | LayerGroupCreateOrConnectWithoutLayerSectionInput[]
    upsert?: LayerGroupUpsertWithWhereUniqueWithoutLayerSectionInput | LayerGroupUpsertWithWhereUniqueWithoutLayerSectionInput[]
    createMany?: LayerGroupCreateManyLayerSectionInputEnvelope
    set?: LayerGroupWhereUniqueInput | LayerGroupWhereUniqueInput[]
    disconnect?: LayerGroupWhereUniqueInput | LayerGroupWhereUniqueInput[]
    delete?: LayerGroupWhereUniqueInput | LayerGroupWhereUniqueInput[]
    connect?: LayerGroupWhereUniqueInput | LayerGroupWhereUniqueInput[]
    update?: LayerGroupUpdateWithWhereUniqueWithoutLayerSectionInput | LayerGroupUpdateWithWhereUniqueWithoutLayerSectionInput[]
    updateMany?: LayerGroupUpdateManyWithWhereWithoutLayerSectionInput | LayerGroupUpdateManyWithWhereWithoutLayerSectionInput[]
    deleteMany?: LayerGroupScalarWhereInput | LayerGroupScalarWhereInput[]
  }

  export type LayerGroupUncheckedUpdateManyWithoutLayerSectionNestedInput = {
    create?: XOR<LayerGroupCreateWithoutLayerSectionInput, LayerGroupUncheckedCreateWithoutLayerSectionInput> | LayerGroupCreateWithoutLayerSectionInput[] | LayerGroupUncheckedCreateWithoutLayerSectionInput[]
    connectOrCreate?: LayerGroupCreateOrConnectWithoutLayerSectionInput | LayerGroupCreateOrConnectWithoutLayerSectionInput[]
    upsert?: LayerGroupUpsertWithWhereUniqueWithoutLayerSectionInput | LayerGroupUpsertWithWhereUniqueWithoutLayerSectionInput[]
    createMany?: LayerGroupCreateManyLayerSectionInputEnvelope
    set?: LayerGroupWhereUniqueInput | LayerGroupWhereUniqueInput[]
    disconnect?: LayerGroupWhereUniqueInput | LayerGroupWhereUniqueInput[]
    delete?: LayerGroupWhereUniqueInput | LayerGroupWhereUniqueInput[]
    connect?: LayerGroupWhereUniqueInput | LayerGroupWhereUniqueInput[]
    update?: LayerGroupUpdateWithWhereUniqueWithoutLayerSectionInput | LayerGroupUpdateWithWhereUniqueWithoutLayerSectionInput[]
    updateMany?: LayerGroupUpdateManyWithWhereWithoutLayerSectionInput | LayerGroupUpdateManyWithWhereWithoutLayerSectionInput[]
    deleteMany?: LayerGroupScalarWhereInput | LayerGroupScalarWhereInput[]
  }

  export type LayerDataCreateNestedManyWithoutGroupNameInput = {
    create?: XOR<LayerDataCreateWithoutGroupNameInput, LayerDataUncheckedCreateWithoutGroupNameInput> | LayerDataCreateWithoutGroupNameInput[] | LayerDataUncheckedCreateWithoutGroupNameInput[]
    connectOrCreate?: LayerDataCreateOrConnectWithoutGroupNameInput | LayerDataCreateOrConnectWithoutGroupNameInput[]
    createMany?: LayerDataCreateManyGroupNameInputEnvelope
    connect?: LayerDataWhereUniqueInput | LayerDataWhereUniqueInput[]
  }

  export type LayerSectionCreateNestedOneWithoutLayerGroupsInput = {
    create?: XOR<LayerSectionCreateWithoutLayerGroupsInput, LayerSectionUncheckedCreateWithoutLayerGroupsInput>
    connectOrCreate?: LayerSectionCreateOrConnectWithoutLayerGroupsInput
    connect?: LayerSectionWhereUniqueInput
  }

  export type LayerDataUncheckedCreateNestedManyWithoutGroupNameInput = {
    create?: XOR<LayerDataCreateWithoutGroupNameInput, LayerDataUncheckedCreateWithoutGroupNameInput> | LayerDataCreateWithoutGroupNameInput[] | LayerDataUncheckedCreateWithoutGroupNameInput[]
    connectOrCreate?: LayerDataCreateOrConnectWithoutGroupNameInput | LayerDataCreateOrConnectWithoutGroupNameInput[]
    createMany?: LayerDataCreateManyGroupNameInputEnvelope
    connect?: LayerDataWhereUniqueInput | LayerDataWhereUniqueInput[]
  }

  export type LayerDataUpdateManyWithoutGroupNameNestedInput = {
    create?: XOR<LayerDataCreateWithoutGroupNameInput, LayerDataUncheckedCreateWithoutGroupNameInput> | LayerDataCreateWithoutGroupNameInput[] | LayerDataUncheckedCreateWithoutGroupNameInput[]
    connectOrCreate?: LayerDataCreateOrConnectWithoutGroupNameInput | LayerDataCreateOrConnectWithoutGroupNameInput[]
    upsert?: LayerDataUpsertWithWhereUniqueWithoutGroupNameInput | LayerDataUpsertWithWhereUniqueWithoutGroupNameInput[]
    createMany?: LayerDataCreateManyGroupNameInputEnvelope
    set?: LayerDataWhereUniqueInput | LayerDataWhereUniqueInput[]
    disconnect?: LayerDataWhereUniqueInput | LayerDataWhereUniqueInput[]
    delete?: LayerDataWhereUniqueInput | LayerDataWhereUniqueInput[]
    connect?: LayerDataWhereUniqueInput | LayerDataWhereUniqueInput[]
    update?: LayerDataUpdateWithWhereUniqueWithoutGroupNameInput | LayerDataUpdateWithWhereUniqueWithoutGroupNameInput[]
    updateMany?: LayerDataUpdateManyWithWhereWithoutGroupNameInput | LayerDataUpdateManyWithWhereWithoutGroupNameInput[]
    deleteMany?: LayerDataScalarWhereInput | LayerDataScalarWhereInput[]
  }

  export type LayerSectionUpdateOneRequiredWithoutLayerGroupsNestedInput = {
    create?: XOR<LayerSectionCreateWithoutLayerGroupsInput, LayerSectionUncheckedCreateWithoutLayerGroupsInput>
    connectOrCreate?: LayerSectionCreateOrConnectWithoutLayerGroupsInput
    upsert?: LayerSectionUpsertWithoutLayerGroupsInput
    connect?: LayerSectionWhereUniqueInput
    update?: XOR<XOR<LayerSectionUpdateToOneWithWhereWithoutLayerGroupsInput, LayerSectionUpdateWithoutLayerGroupsInput>, LayerSectionUncheckedUpdateWithoutLayerGroupsInput>
  }

  export type LayerDataUncheckedUpdateManyWithoutGroupNameNestedInput = {
    create?: XOR<LayerDataCreateWithoutGroupNameInput, LayerDataUncheckedCreateWithoutGroupNameInput> | LayerDataCreateWithoutGroupNameInput[] | LayerDataUncheckedCreateWithoutGroupNameInput[]
    connectOrCreate?: LayerDataCreateOrConnectWithoutGroupNameInput | LayerDataCreateOrConnectWithoutGroupNameInput[]
    upsert?: LayerDataUpsertWithWhereUniqueWithoutGroupNameInput | LayerDataUpsertWithWhereUniqueWithoutGroupNameInput[]
    createMany?: LayerDataCreateManyGroupNameInputEnvelope
    set?: LayerDataWhereUniqueInput | LayerDataWhereUniqueInput[]
    disconnect?: LayerDataWhereUniqueInput | LayerDataWhereUniqueInput[]
    delete?: LayerDataWhereUniqueInput | LayerDataWhereUniqueInput[]
    connect?: LayerDataWhereUniqueInput | LayerDataWhereUniqueInput[]
    update?: LayerDataUpdateWithWhereUniqueWithoutGroupNameInput | LayerDataUpdateWithWhereUniqueWithoutGroupNameInput[]
    updateMany?: LayerDataUpdateManyWithWhereWithoutGroupNameInput | LayerDataUpdateManyWithWhereWithoutGroupNameInput[]
    deleteMany?: LayerDataScalarWhereInput | LayerDataScalarWhereInput[]
  }

  export type hoverItemListCreateEnvelopeInput = {
    set?: hoverItemCreateInput | hoverItemCreateInput[]
  }

  export type hoverItemCreateInput = {
    label: string
    type: string
  }

  export type LayerGroupCreateNestedOneWithoutLayersInput = {
    create?: XOR<LayerGroupCreateWithoutLayersInput, LayerGroupUncheckedCreateWithoutLayersInput>
    connectOrCreate?: LayerGroupCreateOrConnectWithoutLayersInput
    connect?: LayerGroupWhereUniqueInput
  }

  export type hoverItemListUpdateEnvelopeInput = {
    set?: hoverItemCreateInput | hoverItemCreateInput[]
    push?: hoverItemCreateInput | hoverItemCreateInput[]
    updateMany?: hoverItemUpdateManyInput
    deleteMany?: hoverItemDeleteManyInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type LayerGroupUpdateOneWithoutLayersNestedInput = {
    create?: XOR<LayerGroupCreateWithoutLayersInput, LayerGroupUncheckedCreateWithoutLayersInput>
    connectOrCreate?: LayerGroupCreateOrConnectWithoutLayersInput
    upsert?: LayerGroupUpsertWithoutLayersInput
    disconnect?: boolean
    delete?: LayerGroupWhereInput | boolean
    connect?: LayerGroupWhereUniqueInput
    update?: XOR<XOR<LayerGroupUpdateToOneWithWhereWithoutLayersInput, LayerGroupUpdateWithoutLayersInput>, LayerGroupUncheckedUpdateWithoutLayersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type hoverItemWhereInput = {
    AND?: hoverItemWhereInput | hoverItemWhereInput[]
    OR?: hoverItemWhereInput[]
    NOT?: hoverItemWhereInput | hoverItemWhereInput[]
    label?: StringFilter<"hoverItem"> | string
    type?: StringFilter<"hoverItem"> | string
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type MapCreateWithoutMapGroupInput = {
    id?: string
    mapId: string
    longitude?: number | null
    latitude?: number | null
    mapName: string
    zoom: number
    bearing: number
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    styleId: string
    infoId?: string | null
    zoomLabel?: ZoomLabelCreateNestedOneWithoutMapInput
  }

  export type MapUncheckedCreateWithoutMapGroupInput = {
    id?: string
    mapId: string
    longitude?: number | null
    latitude?: number | null
    mapName: string
    zoom: number
    bearing: number
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    styleId: string
    zoomLabelId?: string | null
    infoId?: string | null
  }

  export type MapCreateOrConnectWithoutMapGroupInput = {
    where: MapWhereUniqueInput
    create: XOR<MapCreateWithoutMapGroupInput, MapUncheckedCreateWithoutMapGroupInput>
  }

  export type MapCreateManyMapGroupInputEnvelope = {
    data: MapCreateManyMapGroupInput | MapCreateManyMapGroupInput[]
  }

  export type MapUpsertWithWhereUniqueWithoutMapGroupInput = {
    where: MapWhereUniqueInput
    update: XOR<MapUpdateWithoutMapGroupInput, MapUncheckedUpdateWithoutMapGroupInput>
    create: XOR<MapCreateWithoutMapGroupInput, MapUncheckedCreateWithoutMapGroupInput>
  }

  export type MapUpdateWithWhereUniqueWithoutMapGroupInput = {
    where: MapWhereUniqueInput
    data: XOR<MapUpdateWithoutMapGroupInput, MapUncheckedUpdateWithoutMapGroupInput>
  }

  export type MapUpdateManyWithWhereWithoutMapGroupInput = {
    where: MapScalarWhereInput
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyWithoutMapGroupInput>
  }

  export type MapScalarWhereInput = {
    AND?: MapScalarWhereInput | MapScalarWhereInput[]
    OR?: MapScalarWhereInput[]
    NOT?: MapScalarWhereInput | MapScalarWhereInput[]
    id?: StringFilter<"Map"> | string
    mapId?: StringFilter<"Map"> | string
    longitude?: FloatNullableFilter<"Map"> | number | null
    latitude?: FloatNullableFilter<"Map"> | number | null
    mapName?: StringFilter<"Map"> | string
    zoom?: FloatFilter<"Map"> | number
    bearing?: FloatFilter<"Map"> | number
    topLeftBoundLatitude?: FloatNullableFilter<"Map"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"Map"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"Map"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"Map"> | number | null
    zoomToBounds?: BoolNullableFilter<"Map"> | boolean | null
    styleId?: StringFilter<"Map"> | string
    groupId?: StringFilter<"Map"> | string
    zoomLabelId?: StringNullableFilter<"Map"> | string | null
    infoId?: StringNullableFilter<"Map"> | string | null
  }

  export type ZoomLabelCreateWithoutMapInput = {
    id?: string
    title: string
    minZoom?: number | null
    zoom?: number | null
    bearing?: number | null
    centerLatitude?: number | null
    centerLongitude?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds: boolean
    useTextSizeZoomStyling: boolean
    textSizeDefault: number
    textSizeStopsZoom1: number
    textSizeStopsVal1: number
    textSizeStopsZoom2: number
    textSizeStopsVal2: number
    useTextColorZoomStyling: boolean
    textColorDefault: string
    textColorStopsZoom1: number
    textColorStopsVal1: string
    textColorStopsZoom2: number
    textColorStopsVal2: string
    useTextHaloWidthZoomStyling: boolean
    textHaloWidthDefault: number
    textHaloWidthStopsZoom1: number
    textHaloWidthStopsVal1: number
    textHaloWidthStopsZoom2: number
    textHaloWidthStopsVal2: number
    useTextHaloBlurZoomStyling: boolean
    textHaloBlurDefault: number
    textHaloBlurStopsZoom1: number
    textHaloBlurStopsVal1: number
    textHaloBlurStopsZoom2: number
    textHaloBlurStopsVal2: number
    useTextHaloColorZoomStyling: boolean
    textHaloColorDefault: string
    textHaloColorStopsZoom1: number
    textHaloColorStopsVal1: string
    textHaloColorStopsZoom2: number
    textHaloColorStopsVal2: string
    useTextOpacityZoomStyling: boolean
    textOpacityDefault: number
    textOpacityStopsZoom1: number
    textOpacityStopsVal1: number
    textOpacityStopsZoom2: number
    textOpacityStopsVal2: number
  }

  export type ZoomLabelUncheckedCreateWithoutMapInput = {
    id?: string
    title: string
    minZoom?: number | null
    zoom?: number | null
    bearing?: number | null
    centerLatitude?: number | null
    centerLongitude?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds: boolean
    useTextSizeZoomStyling: boolean
    textSizeDefault: number
    textSizeStopsZoom1: number
    textSizeStopsVal1: number
    textSizeStopsZoom2: number
    textSizeStopsVal2: number
    useTextColorZoomStyling: boolean
    textColorDefault: string
    textColorStopsZoom1: number
    textColorStopsVal1: string
    textColorStopsZoom2: number
    textColorStopsVal2: string
    useTextHaloWidthZoomStyling: boolean
    textHaloWidthDefault: number
    textHaloWidthStopsZoom1: number
    textHaloWidthStopsVal1: number
    textHaloWidthStopsZoom2: number
    textHaloWidthStopsVal2: number
    useTextHaloBlurZoomStyling: boolean
    textHaloBlurDefault: number
    textHaloBlurStopsZoom1: number
    textHaloBlurStopsVal1: number
    textHaloBlurStopsZoom2: number
    textHaloBlurStopsVal2: number
    useTextHaloColorZoomStyling: boolean
    textHaloColorDefault: string
    textHaloColorStopsZoom1: number
    textHaloColorStopsVal1: string
    textHaloColorStopsZoom2: number
    textHaloColorStopsVal2: string
    useTextOpacityZoomStyling: boolean
    textOpacityDefault: number
    textOpacityStopsZoom1: number
    textOpacityStopsVal1: number
    textOpacityStopsZoom2: number
    textOpacityStopsVal2: number
  }

  export type ZoomLabelCreateOrConnectWithoutMapInput = {
    where: ZoomLabelWhereUniqueInput
    create: XOR<ZoomLabelCreateWithoutMapInput, ZoomLabelUncheckedCreateWithoutMapInput>
  }

  export type MapGroupCreateWithoutMapsInput = {
    id?: string
    groupName: string
    label: string
  }

  export type MapGroupUncheckedCreateWithoutMapsInput = {
    id?: string
    groupName: string
    label: string
  }

  export type MapGroupCreateOrConnectWithoutMapsInput = {
    where: MapGroupWhereUniqueInput
    create: XOR<MapGroupCreateWithoutMapsInput, MapGroupUncheckedCreateWithoutMapsInput>
  }

  export type ZoomLabelUpsertWithoutMapInput = {
    update: XOR<ZoomLabelUpdateWithoutMapInput, ZoomLabelUncheckedUpdateWithoutMapInput>
    create: XOR<ZoomLabelCreateWithoutMapInput, ZoomLabelUncheckedCreateWithoutMapInput>
    where?: ZoomLabelWhereInput
  }

  export type ZoomLabelUpdateToOneWithWhereWithoutMapInput = {
    where?: ZoomLabelWhereInput
    data: XOR<ZoomLabelUpdateWithoutMapInput, ZoomLabelUncheckedUpdateWithoutMapInput>
  }

  export type ZoomLabelUpdateWithoutMapInput = {
    title?: StringFieldUpdateOperationsInput | string
    minZoom?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: BoolFieldUpdateOperationsInput | boolean
    useTextSizeZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textSizeDefault?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom1?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal1?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom2?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textColorDefault?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextHaloWidthZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloWidthDefault?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloBlurZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloBlurDefault?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloColorDefault?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextOpacityZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textOpacityDefault?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom1?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal1?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom2?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal2?: FloatFieldUpdateOperationsInput | number
  }

  export type ZoomLabelUncheckedUpdateWithoutMapInput = {
    title?: StringFieldUpdateOperationsInput | string
    minZoom?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    centerLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: BoolFieldUpdateOperationsInput | boolean
    useTextSizeZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textSizeDefault?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom1?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal1?: FloatFieldUpdateOperationsInput | number
    textSizeStopsZoom2?: IntFieldUpdateOperationsInput | number
    textSizeStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textColorDefault?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextHaloWidthZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloWidthDefault?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloWidthStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloWidthStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloBlurZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloBlurDefault?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal1?: FloatFieldUpdateOperationsInput | number
    textHaloBlurStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloBlurStopsVal2?: FloatFieldUpdateOperationsInput | number
    useTextHaloColorZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textHaloColorDefault?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom1?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal1?: StringFieldUpdateOperationsInput | string
    textHaloColorStopsZoom2?: IntFieldUpdateOperationsInput | number
    textHaloColorStopsVal2?: StringFieldUpdateOperationsInput | string
    useTextOpacityZoomStyling?: BoolFieldUpdateOperationsInput | boolean
    textOpacityDefault?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom1?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal1?: FloatFieldUpdateOperationsInput | number
    textOpacityStopsZoom2?: IntFieldUpdateOperationsInput | number
    textOpacityStopsVal2?: FloatFieldUpdateOperationsInput | number
  }

  export type MapGroupUpsertWithoutMapsInput = {
    update: XOR<MapGroupUpdateWithoutMapsInput, MapGroupUncheckedUpdateWithoutMapsInput>
    create: XOR<MapGroupCreateWithoutMapsInput, MapGroupUncheckedCreateWithoutMapsInput>
    where?: MapGroupWhereInput
  }

  export type MapGroupUpdateToOneWithWhereWithoutMapsInput = {
    where?: MapGroupWhereInput
    data: XOR<MapGroupUpdateWithoutMapsInput, MapGroupUncheckedUpdateWithoutMapsInput>
  }

  export type MapGroupUpdateWithoutMapsInput = {
    groupName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MapGroupUncheckedUpdateWithoutMapsInput = {
    groupName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MapCreateWithoutZoomLabelInput = {
    id?: string
    mapId: string
    longitude?: number | null
    latitude?: number | null
    mapName: string
    zoom: number
    bearing: number
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    styleId: string
    infoId?: string | null
    MapGroup?: MapGroupCreateNestedOneWithoutMapsInput
  }

  export type MapUncheckedCreateWithoutZoomLabelInput = {
    id?: string
    mapId: string
    longitude?: number | null
    latitude?: number | null
    mapName: string
    zoom: number
    bearing: number
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    styleId: string
    groupId: string
    infoId?: string | null
  }

  export type MapCreateOrConnectWithoutZoomLabelInput = {
    where: MapWhereUniqueInput
    create: XOR<MapCreateWithoutZoomLabelInput, MapUncheckedCreateWithoutZoomLabelInput>
  }

  export type MapCreateManyZoomLabelInputEnvelope = {
    data: MapCreateManyZoomLabelInput | MapCreateManyZoomLabelInput[]
  }

  export type MapUpsertWithWhereUniqueWithoutZoomLabelInput = {
    where: MapWhereUniqueInput
    update: XOR<MapUpdateWithoutZoomLabelInput, MapUncheckedUpdateWithoutZoomLabelInput>
    create: XOR<MapCreateWithoutZoomLabelInput, MapUncheckedCreateWithoutZoomLabelInput>
  }

  export type MapUpdateWithWhereUniqueWithoutZoomLabelInput = {
    where: MapWhereUniqueInput
    data: XOR<MapUpdateWithoutZoomLabelInput, MapUncheckedUpdateWithoutZoomLabelInput>
  }

  export type MapUpdateManyWithWhereWithoutZoomLabelInput = {
    where: MapScalarWhereInput
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyWithoutZoomLabelInput>
  }

  export type LayerGroupCreateWithoutLayerSectionInput = {
    id?: string
    name: string
    longitude?: string | null
    latitude?: string | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    order: number
    infoId?: string | null
    layers?: LayerDataCreateNestedManyWithoutGroupNameInput
  }

  export type LayerGroupUncheckedCreateWithoutLayerSectionInput = {
    id?: string
    name: string
    longitude?: string | null
    latitude?: string | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    order: number
    infoId?: string | null
    layers?: LayerDataUncheckedCreateNestedManyWithoutGroupNameInput
  }

  export type LayerGroupCreateOrConnectWithoutLayerSectionInput = {
    where: LayerGroupWhereUniqueInput
    create: XOR<LayerGroupCreateWithoutLayerSectionInput, LayerGroupUncheckedCreateWithoutLayerSectionInput>
  }

  export type LayerGroupCreateManyLayerSectionInputEnvelope = {
    data: LayerGroupCreateManyLayerSectionInput | LayerGroupCreateManyLayerSectionInput[]
  }

  export type LayerGroupUpsertWithWhereUniqueWithoutLayerSectionInput = {
    where: LayerGroupWhereUniqueInput
    update: XOR<LayerGroupUpdateWithoutLayerSectionInput, LayerGroupUncheckedUpdateWithoutLayerSectionInput>
    create: XOR<LayerGroupCreateWithoutLayerSectionInput, LayerGroupUncheckedCreateWithoutLayerSectionInput>
  }

  export type LayerGroupUpdateWithWhereUniqueWithoutLayerSectionInput = {
    where: LayerGroupWhereUniqueInput
    data: XOR<LayerGroupUpdateWithoutLayerSectionInput, LayerGroupUncheckedUpdateWithoutLayerSectionInput>
  }

  export type LayerGroupUpdateManyWithWhereWithoutLayerSectionInput = {
    where: LayerGroupScalarWhereInput
    data: XOR<LayerGroupUpdateManyMutationInput, LayerGroupUncheckedUpdateManyWithoutLayerSectionInput>
  }

  export type LayerGroupScalarWhereInput = {
    AND?: LayerGroupScalarWhereInput | LayerGroupScalarWhereInput[]
    OR?: LayerGroupScalarWhereInput[]
    NOT?: LayerGroupScalarWhereInput | LayerGroupScalarWhereInput[]
    id?: StringFilter<"LayerGroup"> | string
    name?: StringFilter<"LayerGroup"> | string
    layerSectionId?: StringFilter<"LayerGroup"> | string
    longitude?: StringNullableFilter<"LayerGroup"> | string | null
    latitude?: StringNullableFilter<"LayerGroup"> | string | null
    zoom?: FloatNullableFilter<"LayerGroup"> | number | null
    bearing?: FloatNullableFilter<"LayerGroup"> | number | null
    topLeftBoundLatitude?: FloatNullableFilter<"LayerGroup"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"LayerGroup"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"LayerGroup"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"LayerGroup"> | number | null
    zoomToBounds?: BoolNullableFilter<"LayerGroup"> | boolean | null
    order?: IntFilter<"LayerGroup"> | number
    infoId?: StringNullableFilter<"LayerGroup"> | string | null
  }

  export type LayerDataCreateWithoutGroupNameInput = {
    id?: string
    name: string
    iconColor: string
    iconType: string
    label: string
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    enableByDefault?: boolean | null
    infoId?: string | null
    type: string
    sourceType: string
    sourceUrl: string
    sourceId: string
    paint?: string | null
    layout?: string | null
    sourceLayer: string
    hover: boolean
    time: boolean
    click: boolean
    hoverStyle?: string | null
    clickStyle?: string | null
    clickHeader?: string | null
    hoverContent?: XOR<hoverItemListCreateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | null
    zoomLevels?: InputJsonValue | null
    order: number
    viewOrder?: number | null
    standalone?: boolean
    layerSection?: string | null
  }

  export type LayerDataUncheckedCreateWithoutGroupNameInput = {
    id?: string
    name: string
    iconColor: string
    iconType: string
    label: string
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    enableByDefault?: boolean | null
    infoId?: string | null
    type: string
    sourceType: string
    sourceUrl: string
    sourceId: string
    paint?: string | null
    layout?: string | null
    sourceLayer: string
    hover: boolean
    time: boolean
    click: boolean
    hoverStyle?: string | null
    clickStyle?: string | null
    clickHeader?: string | null
    hoverContent?: XOR<hoverItemListCreateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | null
    zoomLevels?: InputJsonValue | null
    order: number
    viewOrder?: number | null
    standalone?: boolean
    layerSection?: string | null
  }

  export type LayerDataCreateOrConnectWithoutGroupNameInput = {
    where: LayerDataWhereUniqueInput
    create: XOR<LayerDataCreateWithoutGroupNameInput, LayerDataUncheckedCreateWithoutGroupNameInput>
  }

  export type LayerDataCreateManyGroupNameInputEnvelope = {
    data: LayerDataCreateManyGroupNameInput | LayerDataCreateManyGroupNameInput[]
  }

  export type LayerSectionCreateWithoutLayerGroupsInput = {
    id?: string
    name: string
    order: number
  }

  export type LayerSectionUncheckedCreateWithoutLayerGroupsInput = {
    id?: string
    name: string
    order: number
  }

  export type LayerSectionCreateOrConnectWithoutLayerGroupsInput = {
    where: LayerSectionWhereUniqueInput
    create: XOR<LayerSectionCreateWithoutLayerGroupsInput, LayerSectionUncheckedCreateWithoutLayerGroupsInput>
  }

  export type LayerDataUpsertWithWhereUniqueWithoutGroupNameInput = {
    where: LayerDataWhereUniqueInput
    update: XOR<LayerDataUpdateWithoutGroupNameInput, LayerDataUncheckedUpdateWithoutGroupNameInput>
    create: XOR<LayerDataCreateWithoutGroupNameInput, LayerDataUncheckedCreateWithoutGroupNameInput>
  }

  export type LayerDataUpdateWithWhereUniqueWithoutGroupNameInput = {
    where: LayerDataWhereUniqueInput
    data: XOR<LayerDataUpdateWithoutGroupNameInput, LayerDataUncheckedUpdateWithoutGroupNameInput>
  }

  export type LayerDataUpdateManyWithWhereWithoutGroupNameInput = {
    where: LayerDataScalarWhereInput
    data: XOR<LayerDataUpdateManyMutationInput, LayerDataUncheckedUpdateManyWithoutGroupNameInput>
  }

  export type LayerDataScalarWhereInput = {
    AND?: LayerDataScalarWhereInput | LayerDataScalarWhereInput[]
    OR?: LayerDataScalarWhereInput[]
    NOT?: LayerDataScalarWhereInput | LayerDataScalarWhereInput[]
    id?: StringFilter<"LayerData"> | string
    name?: StringFilter<"LayerData"> | string
    iconColor?: StringFilter<"LayerData"> | string
    iconType?: StringFilter<"LayerData"> | string
    label?: StringFilter<"LayerData"> | string
    longitude?: FloatNullableFilter<"LayerData"> | number | null
    latitude?: FloatNullableFilter<"LayerData"> | number | null
    zoom?: FloatNullableFilter<"LayerData"> | number | null
    bearing?: FloatNullableFilter<"LayerData"> | number | null
    topLeftBoundLatitude?: FloatNullableFilter<"LayerData"> | number | null
    topLeftBoundLongitude?: FloatNullableFilter<"LayerData"> | number | null
    bottomRightBoundLatitude?: FloatNullableFilter<"LayerData"> | number | null
    bottomRightBoundLongitude?: FloatNullableFilter<"LayerData"> | number | null
    zoomToBounds?: BoolNullableFilter<"LayerData"> | boolean | null
    enableByDefault?: BoolNullableFilter<"LayerData"> | boolean | null
    topLayerClass?: StringNullableFilter<"LayerData"> | string | null
    infoId?: StringNullableFilter<"LayerData"> | string | null
    type?: StringFilter<"LayerData"> | string
    sourceType?: StringFilter<"LayerData"> | string
    sourceUrl?: StringFilter<"LayerData"> | string
    sourceId?: StringFilter<"LayerData"> | string
    paint?: StringNullableFilter<"LayerData"> | string | null
    layout?: StringNullableFilter<"LayerData"> | string | null
    sourceLayer?: StringFilter<"LayerData"> | string
    hover?: BoolFilter<"LayerData"> | boolean
    time?: BoolFilter<"LayerData"> | boolean
    click?: BoolFilter<"LayerData"> | boolean
    hoverStyle?: StringNullableFilter<"LayerData"> | string | null
    clickStyle?: StringNullableFilter<"LayerData"> | string | null
    clickHeader?: StringNullableFilter<"LayerData"> | string | null
    textZoomLevels?: JsonNullableFilter<"LayerData">
    zoomLevels?: JsonNullableFilter<"LayerData">
    order?: IntFilter<"LayerData"> | number
    viewOrder?: IntNullableFilter<"LayerData"> | number | null
    standalone?: BoolFilter<"LayerData"> | boolean
    layerSection?: StringNullableFilter<"LayerData"> | string | null
  }

  export type LayerSectionUpsertWithoutLayerGroupsInput = {
    update: XOR<LayerSectionUpdateWithoutLayerGroupsInput, LayerSectionUncheckedUpdateWithoutLayerGroupsInput>
    create: XOR<LayerSectionCreateWithoutLayerGroupsInput, LayerSectionUncheckedCreateWithoutLayerGroupsInput>
    where?: LayerSectionWhereInput
  }

  export type LayerSectionUpdateToOneWithWhereWithoutLayerGroupsInput = {
    where?: LayerSectionWhereInput
    data: XOR<LayerSectionUpdateWithoutLayerGroupsInput, LayerSectionUncheckedUpdateWithoutLayerGroupsInput>
  }

  export type LayerSectionUpdateWithoutLayerGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LayerSectionUncheckedUpdateWithoutLayerGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LayerGroupCreateWithoutLayersInput = {
    id?: string
    name: string
    longitude?: string | null
    latitude?: string | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    order: number
    infoId?: string | null
    layerSection: LayerSectionCreateNestedOneWithoutLayerGroupsInput
  }

  export type LayerGroupUncheckedCreateWithoutLayersInput = {
    id?: string
    name: string
    layerSectionId: string
    longitude?: string | null
    latitude?: string | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    order: number
    infoId?: string | null
  }

  export type LayerGroupCreateOrConnectWithoutLayersInput = {
    where: LayerGroupWhereUniqueInput
    create: XOR<LayerGroupCreateWithoutLayersInput, LayerGroupUncheckedCreateWithoutLayersInput>
  }

  export type hoverItemUpdateManyInput = {
    where: hoverItemWhereInput
    data: hoverItemUpdateInput
  }

  export type hoverItemDeleteManyInput = {
    where: hoverItemWhereInput
  }

  export type LayerGroupUpsertWithoutLayersInput = {
    update: XOR<LayerGroupUpdateWithoutLayersInput, LayerGroupUncheckedUpdateWithoutLayersInput>
    create: XOR<LayerGroupCreateWithoutLayersInput, LayerGroupUncheckedCreateWithoutLayersInput>
    where?: LayerGroupWhereInput
  }

  export type LayerGroupUpdateToOneWithWhereWithoutLayersInput = {
    where?: LayerGroupWhereInput
    data: XOR<LayerGroupUpdateWithoutLayersInput, LayerGroupUncheckedUpdateWithoutLayersInput>
  }

  export type LayerGroupUpdateWithoutLayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order?: IntFieldUpdateOperationsInput | number
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    layerSection?: LayerSectionUpdateOneRequiredWithoutLayerGroupsNestedInput
  }

  export type LayerGroupUncheckedUpdateWithoutLayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    layerSectionId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order?: IntFieldUpdateOperationsInput | number
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapCreateManyMapGroupInput = {
    id?: string
    mapId: string
    longitude?: number | null
    latitude?: number | null
    mapName: string
    zoom: number
    bearing: number
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    styleId: string
    zoomLabelId?: string | null
    infoId?: string | null
  }

  export type MapUpdateWithoutMapGroupInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mapName?: StringFieldUpdateOperationsInput | string
    zoom?: FloatFieldUpdateOperationsInput | number
    bearing?: FloatFieldUpdateOperationsInput | number
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    styleId?: StringFieldUpdateOperationsInput | string
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    zoomLabel?: ZoomLabelUpdateOneWithoutMapNestedInput
  }

  export type MapUncheckedUpdateWithoutMapGroupInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mapName?: StringFieldUpdateOperationsInput | string
    zoom?: FloatFieldUpdateOperationsInput | number
    bearing?: FloatFieldUpdateOperationsInput | number
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    styleId?: StringFieldUpdateOperationsInput | string
    zoomLabelId?: NullableStringFieldUpdateOperationsInput | string | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapUncheckedUpdateManyWithoutMapGroupInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mapName?: StringFieldUpdateOperationsInput | string
    zoom?: FloatFieldUpdateOperationsInput | number
    bearing?: FloatFieldUpdateOperationsInput | number
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    styleId?: StringFieldUpdateOperationsInput | string
    zoomLabelId?: NullableStringFieldUpdateOperationsInput | string | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapCreateManyZoomLabelInput = {
    id?: string
    mapId: string
    longitude?: number | null
    latitude?: number | null
    mapName: string
    zoom: number
    bearing: number
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    styleId: string
    groupId: string
    infoId?: string | null
  }

  export type MapUpdateWithoutZoomLabelInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mapName?: StringFieldUpdateOperationsInput | string
    zoom?: FloatFieldUpdateOperationsInput | number
    bearing?: FloatFieldUpdateOperationsInput | number
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    styleId?: StringFieldUpdateOperationsInput | string
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    MapGroup?: MapGroupUpdateOneWithoutMapsNestedInput
  }

  export type MapUncheckedUpdateWithoutZoomLabelInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mapName?: StringFieldUpdateOperationsInput | string
    zoom?: FloatFieldUpdateOperationsInput | number
    bearing?: FloatFieldUpdateOperationsInput | number
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    styleId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapUncheckedUpdateManyWithoutZoomLabelInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    mapName?: StringFieldUpdateOperationsInput | string
    zoom?: FloatFieldUpdateOperationsInput | number
    bearing?: FloatFieldUpdateOperationsInput | number
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    styleId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayerGroupCreateManyLayerSectionInput = {
    id?: string
    name: string
    longitude?: string | null
    latitude?: string | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    order: number
    infoId?: string | null
  }

  export type LayerGroupUpdateWithoutLayerSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order?: IntFieldUpdateOperationsInput | number
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    layers?: LayerDataUpdateManyWithoutGroupNameNestedInput
  }

  export type LayerGroupUncheckedUpdateWithoutLayerSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order?: IntFieldUpdateOperationsInput | number
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    layers?: LayerDataUncheckedUpdateManyWithoutGroupNameNestedInput
  }

  export type LayerGroupUncheckedUpdateManyWithoutLayerSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order?: IntFieldUpdateOperationsInput | number
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayerDataCreateManyGroupNameInput = {
    id?: string
    name: string
    iconColor: string
    iconType: string
    label: string
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    topLeftBoundLatitude?: number | null
    topLeftBoundLongitude?: number | null
    bottomRightBoundLatitude?: number | null
    bottomRightBoundLongitude?: number | null
    zoomToBounds?: boolean | null
    enableByDefault?: boolean | null
    infoId?: string | null
    type: string
    sourceType: string
    sourceUrl: string
    sourceId: string
    paint?: string | null
    layout?: string | null
    sourceLayer: string
    hover: boolean
    time: boolean
    click: boolean
    hoverStyle?: string | null
    clickStyle?: string | null
    clickHeader?: string | null
    hoverContent?: XOR<hoverItemListCreateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | null
    zoomLevels?: InputJsonValue | null
    order: number
    viewOrder?: number | null
    standalone?: boolean
    layerSection?: string | null
  }

  export type LayerDataUpdateWithoutGroupNameInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconType?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enableByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    paint?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLayer?: StringFieldUpdateOperationsInput | string
    hover?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    click?: BoolFieldUpdateOperationsInput | boolean
    hoverStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickHeader?: NullableStringFieldUpdateOperationsInput | string | null
    hoverContent?: XOR<hoverItemListUpdateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | InputJsonValue | null
    zoomLevels?: InputJsonValue | InputJsonValue | null
    order?: IntFieldUpdateOperationsInput | number
    viewOrder?: NullableIntFieldUpdateOperationsInput | number | null
    standalone?: BoolFieldUpdateOperationsInput | boolean
    layerSection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayerDataUncheckedUpdateWithoutGroupNameInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconType?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enableByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    paint?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLayer?: StringFieldUpdateOperationsInput | string
    hover?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    click?: BoolFieldUpdateOperationsInput | boolean
    hoverStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickHeader?: NullableStringFieldUpdateOperationsInput | string | null
    hoverContent?: XOR<hoverItemListUpdateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | InputJsonValue | null
    zoomLevels?: InputJsonValue | InputJsonValue | null
    order?: IntFieldUpdateOperationsInput | number
    viewOrder?: NullableIntFieldUpdateOperationsInput | number | null
    standalone?: BoolFieldUpdateOperationsInput | boolean
    layerSection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayerDataUncheckedUpdateManyWithoutGroupNameInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconType?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    topLeftBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bottomRightBoundLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoomToBounds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enableByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    infoId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    paint?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLayer?: StringFieldUpdateOperationsInput | string
    hover?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    click?: BoolFieldUpdateOperationsInput | boolean
    hoverStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickStyle?: NullableStringFieldUpdateOperationsInput | string | null
    clickHeader?: NullableStringFieldUpdateOperationsInput | string | null
    hoverContent?: XOR<hoverItemListUpdateEnvelopeInput, hoverItemCreateInput> | hoverItemCreateInput[]
    textZoomLevels?: InputJsonValue | InputJsonValue | null
    zoomLevels?: InputJsonValue | InputJsonValue | null
    order?: IntFieldUpdateOperationsInput | number
    viewOrder?: NullableIntFieldUpdateOperationsInput | number | null
    standalone?: BoolFieldUpdateOperationsInput | boolean
    layerSection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hoverItemUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MapGroupCountOutputTypeDefaultArgs instead
     */
    export type MapGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MapGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ZoomLabelCountOutputTypeDefaultArgs instead
     */
    export type ZoomLabelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ZoomLabelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LayerSectionCountOutputTypeDefaultArgs instead
     */
    export type LayerSectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LayerSectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LayerGroupCountOutputTypeDefaultArgs instead
     */
    export type LayerGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LayerGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use hoverItemDefaultArgs instead
     */
    export type hoverItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = hoverItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MapGroupDefaultArgs instead
     */
    export type MapGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MapGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MapDefaultArgs instead
     */
    export type MapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MapDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ZoomLabelDefaultArgs instead
     */
    export type ZoomLabelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ZoomLabelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ButtonLinkDefaultArgs instead
     */
    export type ButtonLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ButtonLinkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LayerSectionDefaultArgs instead
     */
    export type LayerSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LayerSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LayerGroupDefaultArgs instead
     */
    export type LayerGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LayerGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LayerDataDefaultArgs instead
     */
    export type LayerDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LayerDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ViewOrderCounterDefaultArgs instead
     */
    export type ViewOrderCounterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ViewOrderCounterDefaultArgs<ExtArgs>

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