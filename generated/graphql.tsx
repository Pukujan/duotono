import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Money: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type ActiveOrderResult = NoActiveOrderError | Order;

export type ActiveSubscriptionResponse = {
  __typename?: 'ActiveSubscriptionResponse';
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  orderId: Scalars['ID']['output'];
  packageId: Scalars['ID']['output'];
  revokedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AddPaymentToOrderResult = IneligiblePaymentMethodError | NoActiveOrderError | Order | OrderPaymentStateError | OrderStateTransitionError | PaymentDeclinedError | PaymentFailedError;

export type Address = Node & {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Country;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']['output']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  type: AdjustmentType;
};

export enum AdjustmentType {
  DistributedOrderPromotion = 'DISTRIBUTED_ORDER_PROMOTION',
  Other = 'OTHER',
  Promotion = 'PROMOTION'
}

/** Returned when attempting to set the Customer for an Order when already logged in. */
export type AlreadyLoggedInError = ErrorResult & {
  __typename?: 'AlreadyLoggedInError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type ApplyCouponCodeResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | Order;

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  fileSize: Scalars['Int']['output'];
  focalPoint?: Maybe<Coordinate>;
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mimeType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  preview: Scalars['String']['output'];
  source: Scalars['String']['output'];
  tags: Array<Tag>;
  type: AssetType;
  updatedAt: Scalars['DateTime']['output'];
  width: Scalars['Int']['output'];
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int']['output'];
};

export enum AssetType {
  Binary = 'BINARY',
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type AuthenticationInput = {
  google?: InputMaybe<GoogleAuthInput>;
  native?: InputMaybe<NativeAuthInput>;
};

export type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  strategy: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError;

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

/** Operators for filtering on a list of Boolean fields */
export type BooleanListOperators = {
  inList: Scalars['Boolean']['input'];
};

/** Operators for filtering on a Boolean field */
export type BooleanOperators = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  availableCurrencyCodes: Array<CurrencyCode>;
  availableLanguageCodes?: Maybe<Array<LanguageCode>>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** @deprecated Use defaultCurrencyCode instead */
  currencyCode: CurrencyCode;
  customFields?: Maybe<ChannelCustomFields>;
  defaultCurrencyCode: CurrencyCode;
  defaultLanguageCode: LanguageCode;
  defaultShippingZone?: Maybe<Zone>;
  defaultTaxZone?: Maybe<Zone>;
  id: Scalars['ID']['output'];
  /** Not yet used - will be implemented in a future release. */
  outOfStockThreshold?: Maybe<Scalars['Int']['output']>;
  pricesIncludeTax: Scalars['Boolean']['output'];
  seller?: Maybe<Seller>;
  token: Scalars['String']['output'];
  /** Not yet used - will be implemented in a future release. */
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ChannelCustomFields = {
  __typename?: 'ChannelCustomFields';
  bannerImage?: Maybe<Array<Asset>>;
  qrPay?: Maybe<Array<Asset>>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  assets: Array<Asset>;
  breadcrumbs: Array<CollectionBreadcrumb>;
  children?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  featuredAsset?: Maybe<Asset>;
  filters: Array<ConfigurableOperation>;
  id: Scalars['ID']['output'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String']['output'];
  parent?: Maybe<Collection>;
  parentId: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  productVariants: ProductVariantList;
  slug: Scalars['String']['output'];
  translations: Array<CollectionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};


export type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CollectionFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  position?: InputMaybe<NumberOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int']['output'];
};

export type CollectionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CollectionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CollectionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
  topLevelOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export type CollectionResult = {
  __typename?: 'CollectionResult';
  collection: Collection;
  count: Scalars['Int']['output'];
};

export type CollectionSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  defaultValue?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type ConfigArgInput = {
  name: Scalars['String']['input'];
  /** A JSON stringified representation of the actual value */
  value: Scalars['String']['input'];
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  args: Array<ConfigArg>;
  code: Scalars['String']['output'];
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type ConfigurableOperationInput = {
  arguments: Array<ConfigArgInput>;
  code: Scalars['String']['input'];
};

export type Contact = Node & {
  __typename?: 'Contact';
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ContactAddInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type Country = Node & Region & {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int']['output'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  limit: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  streetLine1: Scalars['String']['input'];
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerCustomFieldsInput = {
  activeDevices?: InputMaybe<Scalars['String']['input']>;
  customerDownloadableAssetsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  favoritesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CreateCustomerInput = {
  customFields?: InputMaybe<CreateCustomerCustomFieldsInput>;
  emailAddress: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byn = 'BYN',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** Swiss franc */
  Chf = 'CHF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Renminbi (Chinese) yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verde escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mru = 'MRU',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona/kronor */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Stn = 'STN',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikistani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan paʻanga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** United States dollar */
  Usd = 'USD',
  /** Uruguayan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Ves = 'VES',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** CFP franc (franc Pacifique) */
  Xpf = 'XPF',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmw = 'ZMW',
  /** Zimbabwean dollar */
  Zwl = 'ZWL'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  channels: Array<CurrentUserChannel>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<Permission>;
  token: Scalars['String']['output'];
};

export type CustomField = {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type CustomFieldConfig = BooleanCustomFieldConfig | DateTimeCustomFieldConfig | FloatCustomFieldConfig | IntCustomFieldConfig | LocaleStringCustomFieldConfig | LocaleTextCustomFieldConfig | RelationCustomFieldConfig | StringCustomFieldConfig | TextCustomFieldConfig;

export type Customer = Node & {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Address>>;
  allDownloadableAssets: Array<Asset>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<CustomerCustomFields>;
  emailAddress: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  orders: OrderList;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};


export type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export type CustomerCustomFields = {
  __typename?: 'CustomerCustomFields';
  activeDevices?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Asset>;
  customerDownloadableAssets?: Maybe<Array<Asset>>;
  favorites?: Maybe<Array<Product>>;
};

export type CustomerFilterParameter = {
  activeDevices?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  lastName?: InputMaybe<StringOperators>;
  phoneNumber?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  customers: CustomerList;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int']['output'];
};

export type CustomerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerSortParameter = {
  activeDevices?: InputMaybe<SortOrder>;
  avatar?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Operators for filtering on a list of Date fields */
export type DateListOperators = {
  inList: Scalars['DateTime']['input'];
};

/** Operators for filtering on a DateTime field */
export type DateOperators = {
  after?: InputMaybe<Scalars['DateTime']['input']>;
  before?: InputMaybe<Scalars['DateTime']['input']>;
  between?: InputMaybe<DateRange>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateRange = {
  end: Scalars['DateTime']['input'];
  start: Scalars['DateTime']['input'];
};

/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['String']['output']>;
  min?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  step?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  message?: Maybe<Scalars['String']['output']>;
  result: DeletionResult;
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  Deleted = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NotDeleted = 'NOT_DELETED'
}

export type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  amountWithTax: Scalars['Money']['output'];
  description: Scalars['String']['output'];
  type: AdjustmentType;
};

/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export enum ErrorCode {
  AlreadyLoggedInError = 'ALREADY_LOGGED_IN_ERROR',
  CouponCodeExpiredError = 'COUPON_CODE_EXPIRED_ERROR',
  CouponCodeInvalidError = 'COUPON_CODE_INVALID_ERROR',
  CouponCodeLimitError = 'COUPON_CODE_LIMIT_ERROR',
  EmailAddressConflictError = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  GuestCheckoutError = 'GUEST_CHECKOUT_ERROR',
  IdentifierChangeTokenExpiredError = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
  IdentifierChangeTokenInvalidError = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
  IneligiblePaymentMethodError = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
  IneligibleShippingMethodError = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  InsufficientStockError = 'INSUFFICIENT_STOCK_ERROR',
  InvalidCredentialsError = 'INVALID_CREDENTIALS_ERROR',
  MissingPasswordError = 'MISSING_PASSWORD_ERROR',
  NativeAuthStrategyError = 'NATIVE_AUTH_STRATEGY_ERROR',
  NegativeQuantityError = 'NEGATIVE_QUANTITY_ERROR',
  NotVerifiedError = 'NOT_VERIFIED_ERROR',
  NoActiveOrderError = 'NO_ACTIVE_ORDER_ERROR',
  OrderLimitError = 'ORDER_LIMIT_ERROR',
  OrderModificationError = 'ORDER_MODIFICATION_ERROR',
  OrderPaymentStateError = 'ORDER_PAYMENT_STATE_ERROR',
  OrderStateTransitionError = 'ORDER_STATE_TRANSITION_ERROR',
  PasswordAlreadySetError = 'PASSWORD_ALREADY_SET_ERROR',
  PasswordResetTokenExpiredError = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
  PasswordResetTokenInvalidError = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
  PasswordValidationError = 'PASSWORD_VALIDATION_ERROR',
  PaymentDeclinedError = 'PAYMENT_DECLINED_ERROR',
  PaymentFailedError = 'PAYMENT_FAILED_ERROR',
  UnknownError = 'UNKNOWN_ERROR',
  VerificationTokenExpiredError = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
  VerificationTokenInvalidError = 'VERIFICATION_TOKEN_INVALID_ERROR'
}

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Esewa = {
  __typename?: 'Esewa';
  MERCHANTID?: Maybe<Scalars['String']['output']>;
};

export type Facet = Node & {
  __typename?: 'Facet';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<FacetTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  values: Array<FacetValue>;
};

export type FacetFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int']['output'];
};

export type FacetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type FacetSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  facet: Facet;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<FacetValueTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export type FacetValueFilterInput = {
  and?: InputMaybe<Scalars['ID']['input']>;
  or?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  count: Scalars['Int']['output'];
  facetValue: FacetValue;
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  step?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lines: Array<FulfillmentLine>;
  method: Scalars['String']['output'];
  state: Scalars['String']['output'];
  /** @deprecated Use the `lines` field instead */
  summary: Array<FulfillmentLine>;
  trackingCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type FulfillmentLine = {
  __typename?: 'FulfillmentLine';
  fulfillment: Fulfillment;
  fulfillmentId: Scalars['ID']['output'];
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
};

export enum GlobalFlag {
  False = 'FALSE',
  Inherit = 'INHERIT',
  True = 'TRUE'
}

export type GoogleAuthInput = {
  token: Scalars['String']['input'];
};

/** Returned when attempting to set the Customer on a guest checkout when the configured GuestCheckoutStrategy does not allow it. */
export type GuestCheckoutError = ErrorResult & {
  __typename?: 'GuestCheckoutError';
  errorCode: ErrorCode;
  errorDetail: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  type: HistoryEntryType;
  updatedAt: Scalars['DateTime']['output'];
};

export type HistoryEntryFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int']['output'];
};

export type HistoryEntryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HistoryEntryFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HistoryEntrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type HistoryEntrySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum HistoryEntryType {
  CustomerAddedToGroup = 'CUSTOMER_ADDED_TO_GROUP',
  CustomerAddressCreated = 'CUSTOMER_ADDRESS_CREATED',
  CustomerAddressDeleted = 'CUSTOMER_ADDRESS_DELETED',
  CustomerAddressUpdated = 'CUSTOMER_ADDRESS_UPDATED',
  CustomerDetailUpdated = 'CUSTOMER_DETAIL_UPDATED',
  CustomerEmailUpdateRequested = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CustomerEmailUpdateVerified = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CustomerNote = 'CUSTOMER_NOTE',
  CustomerPasswordResetRequested = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CustomerPasswordResetVerified = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CustomerPasswordUpdated = 'CUSTOMER_PASSWORD_UPDATED',
  CustomerRegistered = 'CUSTOMER_REGISTERED',
  CustomerRemovedFromGroup = 'CUSTOMER_REMOVED_FROM_GROUP',
  CustomerVerified = 'CUSTOMER_VERIFIED',
  OrderCancellation = 'ORDER_CANCELLATION',
  OrderCouponApplied = 'ORDER_COUPON_APPLIED',
  OrderCouponRemoved = 'ORDER_COUPON_REMOVED',
  OrderFulfillment = 'ORDER_FULFILLMENT',
  OrderFulfillmentTransition = 'ORDER_FULFILLMENT_TRANSITION',
  OrderModified = 'ORDER_MODIFIED',
  OrderNote = 'ORDER_NOTE',
  OrderPaymentTransition = 'ORDER_PAYMENT_TRANSITION',
  OrderRefundTransition = 'ORDER_REFUND_TRANSITION',
  OrderStateTransition = 'ORDER_STATE_TRANSITION'
}

/** Operators for filtering on a list of ID fields */
export type IdListOperators = {
  inList: Scalars['ID']['input'];
};

/** Operators for filtering on an ID field */
export type IdOperators = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Returned if the token used to change a Customer's email address is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type IdentifierChangeTokenExpiredError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned if the token used to change a Customer's email address is either
 * invalid or does not match any expected tokens.
 */
export type IdentifierChangeTokenInvalidError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to add a Payment using a PaymentMethod for which the Order is not eligible. */
export type IneligiblePaymentMethodError = ErrorResult & {
  __typename?: 'IneligiblePaymentMethodError';
  eligibilityCheckerMessage?: Maybe<Scalars['String']['output']>;
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  order: Order;
  quantityAvailable: Scalars['Int']['output'];
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  step?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  authenticationError: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export enum LanguageCode {
  /** Afrikaans */
  Af = 'af',
  /** Akan */
  Ak = 'ak',
  /** Amharic */
  Am = 'am',
  /** Arabic */
  Ar = 'ar',
  /** Assamese */
  As = 'as',
  /** Azerbaijani */
  Az = 'az',
  /** Belarusian */
  Be = 'be',
  /** Bulgarian */
  Bg = 'bg',
  /** Bambara */
  Bm = 'bm',
  /** Bangla */
  Bn = 'bn',
  /** Tibetan */
  Bo = 'bo',
  /** Breton */
  Br = 'br',
  /** Bosnian */
  Bs = 'bs',
  /** Catalan */
  Ca = 'ca',
  /** Chechen */
  Ce = 'ce',
  /** Corsican */
  Co = 'co',
  /** Czech */
  Cs = 'cs',
  /** Church Slavic */
  Cu = 'cu',
  /** Welsh */
  Cy = 'cy',
  /** Danish */
  Da = 'da',
  /** German */
  De = 'de',
  /** Austrian German */
  DeAt = 'de_AT',
  /** Swiss High German */
  DeCh = 'de_CH',
  /** Dzongkha */
  Dz = 'dz',
  /** Ewe */
  Ee = 'ee',
  /** Greek */
  El = 'el',
  /** English */
  En = 'en',
  /** Australian English */
  EnAu = 'en_AU',
  /** Canadian English */
  EnCa = 'en_CA',
  /** British English */
  EnGb = 'en_GB',
  /** American English */
  EnUs = 'en_US',
  /** Esperanto */
  Eo = 'eo',
  /** Spanish */
  Es = 'es',
  /** European Spanish */
  EsEs = 'es_ES',
  /** Mexican Spanish */
  EsMx = 'es_MX',
  /** Estonian */
  Et = 'et',
  /** Basque */
  Eu = 'eu',
  /** Persian */
  Fa = 'fa',
  /** Dari */
  FaAf = 'fa_AF',
  /** Fulah */
  Ff = 'ff',
  /** Finnish */
  Fi = 'fi',
  /** Faroese */
  Fo = 'fo',
  /** French */
  Fr = 'fr',
  /** Canadian French */
  FrCa = 'fr_CA',
  /** Swiss French */
  FrCh = 'fr_CH',
  /** Western Frisian */
  Fy = 'fy',
  /** Irish */
  Ga = 'ga',
  /** Scottish Gaelic */
  Gd = 'gd',
  /** Galician */
  Gl = 'gl',
  /** Gujarati */
  Gu = 'gu',
  /** Manx */
  Gv = 'gv',
  /** Hausa */
  Ha = 'ha',
  /** Hebrew */
  He = 'he',
  /** Hindi */
  Hi = 'hi',
  /** Croatian */
  Hr = 'hr',
  /** Haitian Creole */
  Ht = 'ht',
  /** Hungarian */
  Hu = 'hu',
  /** Armenian */
  Hy = 'hy',
  /** Interlingua */
  Ia = 'ia',
  /** Indonesian */
  Id = 'id',
  /** Igbo */
  Ig = 'ig',
  /** Sichuan Yi */
  Ii = 'ii',
  /** Icelandic */
  Is = 'is',
  /** Italian */
  It = 'it',
  /** Japanese */
  Ja = 'ja',
  /** Javanese */
  Jv = 'jv',
  /** Georgian */
  Ka = 'ka',
  /** Kikuyu */
  Ki = 'ki',
  /** Kazakh */
  Kk = 'kk',
  /** Kalaallisut */
  Kl = 'kl',
  /** Khmer */
  Km = 'km',
  /** Kannada */
  Kn = 'kn',
  /** Korean */
  Ko = 'ko',
  /** Kashmiri */
  Ks = 'ks',
  /** Kurdish */
  Ku = 'ku',
  /** Cornish */
  Kw = 'kw',
  /** Kyrgyz */
  Ky = 'ky',
  /** Latin */
  La = 'la',
  /** Luxembourgish */
  Lb = 'lb',
  /** Ganda */
  Lg = 'lg',
  /** Lingala */
  Ln = 'ln',
  /** Lao */
  Lo = 'lo',
  /** Lithuanian */
  Lt = 'lt',
  /** Luba-Katanga */
  Lu = 'lu',
  /** Latvian */
  Lv = 'lv',
  /** Malagasy */
  Mg = 'mg',
  /** Maori */
  Mi = 'mi',
  /** Macedonian */
  Mk = 'mk',
  /** Malayalam */
  Ml = 'ml',
  /** Mongolian */
  Mn = 'mn',
  /** Marathi */
  Mr = 'mr',
  /** Malay */
  Ms = 'ms',
  /** Maltese */
  Mt = 'mt',
  /** Burmese */
  My = 'my',
  /** Norwegian Bokmål */
  Nb = 'nb',
  /** North Ndebele */
  Nd = 'nd',
  /** Nepali */
  Ne = 'ne',
  /** Dutch */
  Nl = 'nl',
  /** Flemish */
  NlBe = 'nl_BE',
  /** Norwegian Nynorsk */
  Nn = 'nn',
  /** Nyanja */
  Ny = 'ny',
  /** Oromo */
  Om = 'om',
  /** Odia */
  Or = 'or',
  /** Ossetic */
  Os = 'os',
  /** Punjabi */
  Pa = 'pa',
  /** Polish */
  Pl = 'pl',
  /** Pashto */
  Ps = 'ps',
  /** Portuguese */
  Pt = 'pt',
  /** Brazilian Portuguese */
  PtBr = 'pt_BR',
  /** European Portuguese */
  PtPt = 'pt_PT',
  /** Quechua */
  Qu = 'qu',
  /** Romansh */
  Rm = 'rm',
  /** Rundi */
  Rn = 'rn',
  /** Romanian */
  Ro = 'ro',
  /** Moldavian */
  RoMd = 'ro_MD',
  /** Russian */
  Ru = 'ru',
  /** Kinyarwanda */
  Rw = 'rw',
  /** Sanskrit */
  Sa = 'sa',
  /** Sindhi */
  Sd = 'sd',
  /** Northern Sami */
  Se = 'se',
  /** Sango */
  Sg = 'sg',
  /** Sinhala */
  Si = 'si',
  /** Slovak */
  Sk = 'sk',
  /** Slovenian */
  Sl = 'sl',
  /** Samoan */
  Sm = 'sm',
  /** Shona */
  Sn = 'sn',
  /** Somali */
  So = 'so',
  /** Albanian */
  Sq = 'sq',
  /** Serbian */
  Sr = 'sr',
  /** Southern Sotho */
  St = 'st',
  /** Sundanese */
  Su = 'su',
  /** Swedish */
  Sv = 'sv',
  /** Swahili */
  Sw = 'sw',
  /** Congo Swahili */
  SwCd = 'sw_CD',
  /** Tamil */
  Ta = 'ta',
  /** Telugu */
  Te = 'te',
  /** Tajik */
  Tg = 'tg',
  /** Thai */
  Th = 'th',
  /** Tigrinya */
  Ti = 'ti',
  /** Turkmen */
  Tk = 'tk',
  /** Tongan */
  To = 'to',
  /** Turkish */
  Tr = 'tr',
  /** Tatar */
  Tt = 'tt',
  /** Uyghur */
  Ug = 'ug',
  /** Ukrainian */
  Uk = 'uk',
  /** Urdu */
  Ur = 'ur',
  /** Uzbek */
  Uz = 'uz',
  /** Vietnamese */
  Vi = 'vi',
  /** Volapük */
  Vo = 'vo',
  /** Wolof */
  Wo = 'wo',
  /** Xhosa */
  Xh = 'xh',
  /** Yiddish */
  Yi = 'yi',
  /** Yoruba */
  Yo = 'yo',
  /** Chinese */
  Zh = 'zh',
  /** Simplified Chinese */
  ZhHans = 'zh_Hans',
  /** Traditional Chinese */
  ZhHant = 'zh_Hant',
  /** Zulu */
  Zu = 'zu'
}

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  pattern?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type LocaleTextCustomFieldConfig = CustomField & {
  __typename?: 'LocaleTextCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String']['output'];
};

export enum LogicalOperator {
  And = 'AND',
  Or = 'OR'
}

/** Returned when attempting to register or verify a customer account without a password, when one is required. */
export type MissingPasswordError = ErrorResult & {
  __typename?: 'MissingPasswordError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addActiveDevices?: Maybe<Customer>;
  addContact: Contact;
  /** Adds an item to the order. If custom fields are defined on the OrderLine entity, a third argument 'customFields' will be available. */
  addItemToOrder: UpdateOrderItemsResult;
  /** Add a Payment to the Order */
  addPaymentToOrder: AddPaymentToOrderResult;
  addSubscriptionToOrder?: Maybe<UpdateOrderItemsResult>;
  /** Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
  adjustOrderLine: UpdateOrderItemsResult;
  /** Applies the given coupon code to the active Order */
  applyCouponCode: ApplyCouponCodeResult;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  /** Create a new Customer Address */
  createCustomerAddress: Address;
  /** Delete an existing Address */
  deleteCustomerAddress: Success;
  /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
  login: NativeAuthenticationResult;
  /** End the current authenticated session */
  logout: Success;
  /** Regenerate and send a verification token for a new Customer registration. Only applicable if `authOptions.requireVerification` is set to true. */
  refreshCustomerVerification: RefreshCustomerVerificationResult;
  /**
   * Register a Customer account with the given credentials. There are three possible registration flows:
   *
   * _If `authOptions.requireVerification` is set to `true`:_
   *
   * 1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then
   *    verified and authenticated in one step.
   * 2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosen password of the Customer. The Customer is then
   *    verified and authenticated in one step.
   *
   * _If `authOptions.requireVerification` is set to `false`:_
   *
   * 3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.
   */
  registerCustomerAccount: RegisterCustomerAccountResult;
  removeActiveDevices?: Maybe<Customer>;
  /** Remove all OrderLine from the Order */
  removeAllOrderLines: RemoveOrderItemsResult;
  /** Removes the given coupon code from the active Order */
  removeCouponCode?: Maybe<Order>;
  /** Remove an OrderLine from the Order */
  removeOrderLine: RemoveOrderItemsResult;
  /** Requests a password reset email to be sent */
  requestPasswordReset?: Maybe<RequestPasswordResetResult>;
  /**
   * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
   * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
   * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
   * that verification token to the Customer, which is then used to verify the change of email address.
   */
  requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
  /** Resets a Customer's password based on the provided token */
  resetPassword: ResetPasswordResult;
  revokeSubscription?: Maybe<Scalars['Boolean']['output']>;
  /** Set the Customer for the Order. Required only if the Customer is not currently logged in */
  setCustomerForOrder: SetCustomerForOrderResult;
  setGooglePassword: User;
  /** Sets the billing address for this order */
  setOrderBillingAddress: ActiveOrderResult;
  /** Allows any custom fields to be set for the active order */
  setOrderCustomFields: ActiveOrderResult;
  /** Sets the shipping address for this order */
  setOrderShippingAddress: ActiveOrderResult;
  /**
   * Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query.
   * An Order can have multiple shipping methods, in which case you can pass an array of ids. In this case,
   * you should configure a custom ShippingLineAssignmentStrategy in order to know which OrderLines each
   * shipping method will apply to.
   */
  setOrderShippingMethod: SetOrderShippingMethodResult;
  /** Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates` */
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  /** Update an existing Customer */
  updateCustomer: Customer;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /**
   * Confirm the update of the emailAddress with the provided token, which has been generated by the
   * `requestUpdateCustomerEmailAddress` mutation.
   */
  updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
  /** Update the password of the active Customer */
  updateCustomerPassword: UpdateCustomerPasswordResult;
  /**
   * Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.
   *
   * If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the password _must_ be
   * provided here.
   */
  verifyCustomerAccount: VerifyCustomerAccountResult;
};


export type MutationAddActiveDevicesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddContactArgs = {
  input: ContactAddInput;
};


export type MutationAddItemToOrderArgs = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};


export type MutationAddSubscriptionToOrderArgs = {
  subscriptionPackageId: Scalars['ID']['input'];
};


export type MutationAdjustOrderLineArgs = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  orderLineId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationApplyCouponCodeArgs = {
  couponCode: Scalars['String']['input'];
};


export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};


export type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String']['input'];
};


export type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};


export type MutationRemoveActiveDevicesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRemoveCouponCodeArgs = {
  couponCode: Scalars['String']['input'];
};


export type MutationRemoveOrderLineArgs = {
  orderLineId: Scalars['ID']['input'];
};


export type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String']['input'];
};


export type MutationRequestUpdateCustomerEmailAddressArgs = {
  newEmailAddress: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationRevokeSubscriptionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};


export type MutationSetGooglePasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSetOrderBillingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};


export type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Array<Scalars['ID']['input']>;
};


export type MutationTransitionOrderToStateArgs = {
  state: Scalars['String']['input'];
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateCustomerEmailAddressArgs = {
  token: Scalars['String']['input'];
};


export type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationVerifyCustomerAccountArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type NativeAuthInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NativeAuthStrategyError | NotVerifiedError;

/** Returned when attempting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export type NoActiveOrderError = ErrorResult & {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

/**
 * Returned if `authOptions.requireVerification` is set to `true` (which is the default)
 * and an unverified user attempts to authenticate.
 */
export type NotVerifiedError = ErrorResult & {
  __typename?: 'NotVerifiedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Operators for filtering on a list of Number fields */
export type NumberListOperators = {
  inList: Scalars['Float']['input'];
};

/** Operators for filtering on a Int or Float field */
export type NumberOperators = {
  between?: InputMaybe<NumberRange>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

export type NumberRange = {
  end: Scalars['Float']['input'];
  start: Scalars['Float']['input'];
};

export type Order = Node & {
  __typename?: 'Order';
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean']['output'];
  billingAddress?: Maybe<OrderAddress>;
  /** A unique code for the Order */
  code: Scalars['String']['output'];
  /** An array of all coupon codes applied to the Order */
  couponCodes: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']['output']>;
  customer?: Maybe<Customer>;
  discounts: Array<Discount>;
  downloadableProductVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  history: HistoryEntryList;
  id: Scalars['ID']['output'];
  lines: Array<OrderLine>;
  /**
   * The date & time that the Order was placed, i.e. the Customer
   * completed the checkout and the Order is no longer "active"
   */
  orderPlacedAt?: Maybe<Scalars['DateTime']['output']>;
  payments?: Maybe<Array<Payment>>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  shipping: Scalars['Money']['output'];
  shippingAddress?: Maybe<OrderAddress>;
  shippingLines: Array<ShippingLine>;
  shippingWithTax: Scalars['Money']['output'];
  state: Scalars['String']['output'];
  /**
   * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
   * discounts which have been prorated (proportionally distributed) amongst the items of each OrderLine.
   * To get a total of all OrderLines which does not account for prorated discounts, use the
   * sum of `OrderLine.discountedLinePrice` values.
   */
  subTotal: Scalars['Money']['output'];
  /** Same as subTotal, but inclusive of tax */
  subTotalWithTax: Scalars['Money']['output'];
  /**
   * Surcharges are arbitrary modifications to the Order total which are neither
   * ProductVariants nor discounts resulting from applied Promotions. For example,
   * one-off discounts based on customer interaction, or surcharges based on payment
   * methods.
   */
  surcharges: Array<Surcharge>;
  /** A summary of the taxes being applied to this Order */
  taxSummary: Array<OrderTaxSummary>;
  /** Equal to subTotal plus shipping */
  total: Scalars['Money']['output'];
  totalQuantity: Scalars['Int']['output'];
  /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
  totalWithTax: Scalars['Money']['output'];
  type: OrderType;
  updatedAt: Scalars['DateTime']['output'];
};


export type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  streetLine1?: Maybe<Scalars['String']['output']>;
  streetLine2?: Maybe<Scalars['String']['output']>;
};

export type OrderFilterParameter = {
  active?: InputMaybe<BooleanOperators>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  orderPlacedAt?: InputMaybe<DateOperators>;
  shipping?: InputMaybe<NumberOperators>;
  shippingWithTax?: InputMaybe<NumberOperators>;
  state?: InputMaybe<StringOperators>;
  subTotal?: InputMaybe<NumberOperators>;
  subTotalWithTax?: InputMaybe<NumberOperators>;
  total?: InputMaybe<NumberOperators>;
  totalQuantity?: InputMaybe<NumberOperators>;
  totalWithTax?: InputMaybe<NumberOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

/** Returned when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  maxItems: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<OrderLineCustomFields>;
  /** The price of the line including discounts, excluding tax */
  discountedLinePrice: Scalars['Money']['output'];
  /** The price of the line including discounts and tax */
  discountedLinePriceWithTax: Scalars['Money']['output'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Money']['output'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Money']['output'];
  discounts: Array<Discount>;
  featuredAsset?: Maybe<Asset>;
  fulfillmentLines?: Maybe<Array<FulfillmentLine>>;
  id: Scalars['ID']['output'];
  /** The total price of the line excluding tax and discounts. */
  linePrice: Scalars['Money']['output'];
  /** The total price of the line including tax but excluding discounts. */
  linePriceWithTax: Scalars['Money']['output'];
  /** The total tax on this line */
  lineTax: Scalars['Money']['output'];
  order: Order;
  /** The quantity at the time the Order was placed */
  orderPlacedQuantity: Scalars['Int']['output'];
  productVariant: ProductVariant;
  /**
   * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
   * and refund calculations.
   */
  proratedLinePrice: Scalars['Money']['output'];
  /** The proratedLinePrice including tax */
  proratedLinePriceWithTax: Scalars['Money']['output'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Money']['output'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Money']['output'];
  quantity: Scalars['Int']['output'];
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float']['output'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Money']['output'];
  /** Non-zero if the unitPrice has changed since it was initially added to Order */
  unitPriceChangeSinceAdded: Scalars['Money']['output'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Money']['output'];
  /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
  unitPriceWithTaxChangeSinceAdded: Scalars['Money']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderLineCustomFields = {
  __typename?: 'OrderLineCustomFields';
  orderType?: Maybe<Scalars['String']['output']>;
};

export type OrderLineCustomFieldsInput = {
  orderType?: InputMaybe<Scalars['String']['input']>;
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int']['output'];
};

export type OrderListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<OrderFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<OrderSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to add a Payment to an Order that is not in the `ArrangingPayment` state. */
export type OrderPaymentStateError = ErrorResult & {
  __typename?: 'OrderPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type OrderSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderPlacedAt?: InputMaybe<SortOrder>;
  shipping?: InputMaybe<SortOrder>;
  shippingWithTax?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  subTotal?: InputMaybe<SortOrder>;
  subTotalWithTax?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  totalQuantity?: InputMaybe<SortOrder>;
  totalWithTax?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String']['output'];
  message: Scalars['String']['output'];
  toState: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
};

/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  /** A description of this tax */
  description: Scalars['String']['output'];
  /** The total net price of OrderLines to which this taxRate applies */
  taxBase: Scalars['Money']['output'];
  /** The taxRate as a percentage */
  taxRate: Scalars['Float']['output'];
  /** The total tax being applied to the Order at this taxRate */
  taxTotal: Scalars['Money']['output'];
};

export enum OrderType {
  Aggregate = 'Aggregate',
  Regular = 'Regular',
  Seller = 'Seller'
}

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int']['output'];
};

/** Returned when attempting to verify a customer account with a password, when a password has already been set. */
export type PasswordAlreadySetError = ErrorResult & {
  __typename?: 'PasswordAlreadySetError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned if the token used to reset a Customer's password is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type PasswordResetTokenExpiredError = ErrorResult & {
  __typename?: 'PasswordResetTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned if the token used to reset a Customer's password is either
 * invalid or does not match any expected tokens.
 */
export type PasswordResetTokenInvalidError = ErrorResult & {
  __typename?: 'PasswordResetTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to register or verify a customer account where the given password fails password validation. */
export type PasswordValidationError = ErrorResult & {
  __typename?: 'PasswordValidationError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  validationErrorMessage: Scalars['String']['output'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Money']['output'];
  createdAt: Scalars['DateTime']['output'];
  errorMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  method: Scalars['String']['output'];
  refunds: Array<Refund>;
  state: Scalars['String']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Returned when a Payment is declined by the payment provider. */
export type PaymentDeclinedError = ErrorResult & {
  __typename?: 'PaymentDeclinedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  paymentErrorMessage: Scalars['String']['output'];
};

/** Returned when a Payment fails due to an error. */
export type PaymentFailedError = ErrorResult & {
  __typename?: 'PaymentFailedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  paymentErrorMessage: Scalars['String']['output'];
};

/** Passed as input to the `addPaymentToOrder` mutation. */
export type PaymentInput = {
  /**
   * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
   * as the "metadata" argument. For example, it could contain an ID for the payment and other
   * data generated by the payment provider.
   */
  metadata: Scalars['JSON']['input'];
  /** This field should correspond to the `code` property of a PaymentMethod. */
  method: Scalars['String']['input'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  checker?: Maybe<ConfigurableOperation>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  handler: ConfigurableOperation;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  translations: Array<PaymentMethodTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethodQuote = {
  __typename?: 'PaymentMethodQuote';
  code: Scalars['String']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  eligibilityMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isEligible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type PaymentMethodTranslation = {
  __typename?: 'PaymentMethodTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export enum Permission {
  /** Authenticated means simply that the user is logged in */
  Authenticated = 'Authenticated',
  /** Grants permission to create Administrator */
  CreateAdministrator = 'CreateAdministrator',
  /** Grants permission to create Asset */
  CreateAsset = 'CreateAsset',
  /** Grants permission to create Products, Facets, Assets, Collections */
  CreateCatalog = 'CreateCatalog',
  /** Grants permission to create Channel */
  CreateChannel = 'CreateChannel',
  /** Grants permission to create Collection */
  CreateCollection = 'CreateCollection',
  /** Grants permission to create Country */
  CreateCountry = 'CreateCountry',
  /** Grants permission to create Customer */
  CreateCustomer = 'CreateCustomer',
  /** Grants permission to create CustomerGroup */
  CreateCustomerGroup = 'CreateCustomerGroup',
  /** Grants permission to create Facet */
  CreateFacet = 'CreateFacet',
  /** Grants permission to create Order */
  CreateOrder = 'CreateOrder',
  /** Grants permission to create PaymentMethod */
  CreatePaymentMethod = 'CreatePaymentMethod',
  /** Grants permission to create Product */
  CreateProduct = 'CreateProduct',
  /** Grants permission to create Promotion */
  CreatePromotion = 'CreatePromotion',
  /** Grants permission to create Seller */
  CreateSeller = 'CreateSeller',
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  CreateSettings = 'CreateSettings',
  /** Grants permission to create ShippingMethod */
  CreateShippingMethod = 'CreateShippingMethod',
  /** Grants permission to create StockLocation */
  CreateStockLocation = 'CreateStockLocation',
  /** Grants permission to create System */
  CreateSystem = 'CreateSystem',
  /** Grants permission to create Tag */
  CreateTag = 'CreateTag',
  /** Grants permission to create TaxCategory */
  CreateTaxCategory = 'CreateTaxCategory',
  /** Grants permission to create TaxRate */
  CreateTaxRate = 'CreateTaxRate',
  /** Grants permission to create Zone */
  CreateZone = 'CreateZone',
  /** Grants permission to delete Administrator */
  DeleteAdministrator = 'DeleteAdministrator',
  /** Grants permission to delete Asset */
  DeleteAsset = 'DeleteAsset',
  /** Grants permission to delete Products, Facets, Assets, Collections */
  DeleteCatalog = 'DeleteCatalog',
  /** Grants permission to delete Channel */
  DeleteChannel = 'DeleteChannel',
  /** Grants permission to delete Collection */
  DeleteCollection = 'DeleteCollection',
  /** Grants permission to delete Country */
  DeleteCountry = 'DeleteCountry',
  /** Grants permission to delete Customer */
  DeleteCustomer = 'DeleteCustomer',
  /** Grants permission to delete CustomerGroup */
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  /** Grants permission to delete Facet */
  DeleteFacet = 'DeleteFacet',
  /** Grants permission to delete Order */
  DeleteOrder = 'DeleteOrder',
  /** Grants permission to delete PaymentMethod */
  DeletePaymentMethod = 'DeletePaymentMethod',
  /** Grants permission to delete Product */
  DeleteProduct = 'DeleteProduct',
  /** Grants permission to delete Promotion */
  DeletePromotion = 'DeletePromotion',
  /** Grants permission to delete Seller */
  DeleteSeller = 'DeleteSeller',
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  DeleteSettings = 'DeleteSettings',
  /** Grants permission to delete ShippingMethod */
  DeleteShippingMethod = 'DeleteShippingMethod',
  /** Grants permission to delete StockLocation */
  DeleteStockLocation = 'DeleteStockLocation',
  /** Grants permission to delete System */
  DeleteSystem = 'DeleteSystem',
  /** Grants permission to delete Tag */
  DeleteTag = 'DeleteTag',
  /** Grants permission to delete TaxCategory */
  DeleteTaxCategory = 'DeleteTaxCategory',
  /** Grants permission to delete TaxRate */
  DeleteTaxRate = 'DeleteTaxRate',
  /** Grants permission to delete Zone */
  DeleteZone = 'DeleteZone',
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /** Public means any unauthenticated user may perform the operation */
  Public = 'Public',
  /** Grants permission to read Administrator */
  ReadAdministrator = 'ReadAdministrator',
  /** Grants permission to read Asset */
  ReadAsset = 'ReadAsset',
  /** Grants permission to read Products, Facets, Assets, Collections */
  ReadCatalog = 'ReadCatalog',
  /** Grants permission to read Channel */
  ReadChannel = 'ReadChannel',
  /** Grants permission to read Collection */
  ReadCollection = 'ReadCollection',
  /** Grants permission to read Country */
  ReadCountry = 'ReadCountry',
  /** Grants permission to read Customer */
  ReadCustomer = 'ReadCustomer',
  /** Grants permission to read CustomerGroup */
  ReadCustomerGroup = 'ReadCustomerGroup',
  /** Grants permission to read Facet */
  ReadFacet = 'ReadFacet',
  /** Grants permission to read Order */
  ReadOrder = 'ReadOrder',
  /** Grants permission to read PaymentMethod */
  ReadPaymentMethod = 'ReadPaymentMethod',
  /** Grants permission to read Product */
  ReadProduct = 'ReadProduct',
  /** Grants permission to read Promotion */
  ReadPromotion = 'ReadPromotion',
  /** Grants permission to read Seller */
  ReadSeller = 'ReadSeller',
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  ReadSettings = 'ReadSettings',
  /** Grants permission to read ShippingMethod */
  ReadShippingMethod = 'ReadShippingMethod',
  /** Grants permission to read StockLocation */
  ReadStockLocation = 'ReadStockLocation',
  /** Grants permission to read System */
  ReadSystem = 'ReadSystem',
  /** Grants permission to read Tag */
  ReadTag = 'ReadTag',
  /** Grants permission to read TaxCategory */
  ReadTaxCategory = 'ReadTaxCategory',
  /** Grants permission to read TaxRate */
  ReadTaxRate = 'ReadTaxRate',
  /** Grants permission to read Zone */
  ReadZone = 'ReadZone',
  /** SuperAdmin has unrestricted access to all operations */
  SuperAdmin = 'SuperAdmin',
  /** Grants permission to update Administrator */
  UpdateAdministrator = 'UpdateAdministrator',
  /** Grants permission to update Asset */
  UpdateAsset = 'UpdateAsset',
  /** Grants permission to update Products, Facets, Assets, Collections */
  UpdateCatalog = 'UpdateCatalog',
  /** Grants permission to update Channel */
  UpdateChannel = 'UpdateChannel',
  /** Grants permission to update Collection */
  UpdateCollection = 'UpdateCollection',
  /** Grants permission to update Country */
  UpdateCountry = 'UpdateCountry',
  /** Grants permission to update Customer */
  UpdateCustomer = 'UpdateCustomer',
  /** Grants permission to update CustomerGroup */
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  /** Grants permission to update Facet */
  UpdateFacet = 'UpdateFacet',
  /** Grants permission to update GlobalSettings */
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  /** Grants permission to update Order */
  UpdateOrder = 'UpdateOrder',
  /** Grants permission to update PaymentMethod */
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  /** Grants permission to update Product */
  UpdateProduct = 'UpdateProduct',
  /** Grants permission to update Promotion */
  UpdatePromotion = 'UpdatePromotion',
  /** Grants permission to update Seller */
  UpdateSeller = 'UpdateSeller',
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  UpdateSettings = 'UpdateSettings',
  /** Grants permission to update ShippingMethod */
  UpdateShippingMethod = 'UpdateShippingMethod',
  /** Grants permission to update StockLocation */
  UpdateStockLocation = 'UpdateStockLocation',
  /** Grants permission to update System */
  UpdateSystem = 'UpdateSystem',
  /** Grants permission to update Tag */
  UpdateTag = 'UpdateTag',
  /** Grants permission to update TaxCategory */
  UpdateTaxCategory = 'UpdateTaxCategory',
  /** Grants permission to update TaxRate */
  UpdateTaxRate = 'UpdateTaxRate',
  /** Grants permission to update Zone */
  UpdateZone = 'UpdateZone'
}

/** The price range where the result has more than one price */
export type PriceRange = {
  __typename?: 'PriceRange';
  max: Scalars['Money']['output'];
  min: Scalars['Money']['output'];
};

export type Product = Node & {
  __typename?: 'Product';
  assets: Array<Asset>;
  collections: Array<Collection>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<ProductCustomFields>;
  description: Scalars['String']['output'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  optionGroups: Array<ProductOptionGroup>;
  slug: Scalars['String']['output'];
  translations: Array<ProductTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  /** Returns a paginated, sortable, filterable list of ProductVariants */
  variantList: ProductVariantList;
  /** Returns all ProductVariants */
  variants: Array<ProductVariant>;
};


export type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductCustomFields = {
  __typename?: 'ProductCustomFields';
  colorMode?: Maybe<Scalars['String']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  lamination?: Maybe<Scalars['String']['output']>;
  paperWeight?: Maybe<Scalars['String']['output']>;
  resolution?: Maybe<Scalars['String']['output']>;
  supportedApps?: Maybe<Scalars['String']['output']>;
  weigth?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type ProductFilterParameter = {
  colorMode?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  format?: InputMaybe<StringOperators>;
  height?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  lamination?: InputMaybe<StringOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  paperWeight?: InputMaybe<StringOperators>;
  resolution?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  supportedApps?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  weigth?: InputMaybe<StringOperators>;
  width?: InputMaybe<StringOperators>;
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int']['output'];
};

export type ProductListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  group: ProductOptionGroup;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<ProductOptionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductSortParameter = {
  colorMode?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lamination?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  paperWeight?: InputMaybe<SortOrder>;
  resolution?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  supportedApps?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weigth?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  assets: Array<Asset>;
  createdAt: Scalars['DateTime']['output'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<ProductVariantCustomFields>;
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  options: Array<ProductOption>;
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  sku: Scalars['String']['output'];
  stockLevel: Scalars['String']['output'];
  taxCategory: TaxCategory;
  taxRateApplied: TaxRate;
  translations: Array<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductVariantCustomFields = {
  __typename?: 'ProductVariantCustomFields';
  downloadPrice?: Maybe<Scalars['Int']['output']>;
  productDownloadableAssets?: Maybe<Array<Asset>>;
};

export type ProductVariantFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  downloadPrice?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  price?: InputMaybe<NumberOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  productId?: InputMaybe<IdOperators>;
  sku?: InputMaybe<StringOperators>;
  stockLevel?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int']['output'];
};

export type ProductVariantListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductVariantFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductVariantSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductVariantSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  downloadPrice?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  actions: Array<ConfigurableOperation>;
  conditions: Array<ConfigurableOperation>;
  couponCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  perCustomerUsageLimit?: Maybe<Scalars['Int']['output']>;
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  translations: Array<PromotionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int']['output'];
};

export type PromotionTranslation = {
  __typename?: 'PromotionTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Province = Node & Region & {
  __typename?: 'Province';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProvinceList = PaginatedList & {
  __typename?: 'ProvinceList';
  items: Array<Province>;
  totalItems: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** The active Channel */
  activeChannel: Channel;
  /** The active Customer */
  activeCustomer?: Maybe<Customer>;
  /**
   * The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the
   * state of `PaymentAuthorized` or `PaymentSettled`, then that Order is no longer considered "active" and this
   * query will once again return `null`.
   */
  activeOrder?: Maybe<Order>;
  activeSubscription?: Maybe<ActiveSubscriptionResponse>;
  /** An array of supported Countries */
  availableCountries: Array<Country>;
  /** Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  collection?: Maybe<Collection>;
  /** A list of Collections available to the shop */
  collections: CollectionList;
  /** Returns a list of payment methods and their eligibility based on the current active Order */
  eligiblePaymentMethods: Array<PaymentMethodQuote>;
  /** Returns a list of eligible shipping methods based on the current active Order */
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  /** Returns a Facet by its id */
  facet?: Maybe<Facet>;
  /** A list of Facets available to the shop */
  facets: FacetList;
  getCustomerWithDownloadableAssets: Customer;
  getDownloadableAssetsByActiveUserId: Array<Asset>;
  getDownloadableAssetsByCustomerId: Array<Asset>;
  getDownloadableAssetsByOrderCode: Array<Asset>;
  getDownloadableAssetsByOrderId: Array<Asset>;
  getEsewaMerchantId: Esewa;
  /** Returns information about the current authenticated User */
  me?: Maybe<CurrentUser>;
  /** Returns the possible next states that the activeOrder can transition to */
  nextOrderStates: Array<Scalars['String']['output']>;
  /**
   * Returns an Order based on the id. Note that in the Shop API, only orders belonging to the
   * currently-authenticated User may be queried.
   */
  order?: Maybe<Order>;
  /**
   * Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)
   * this query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation
   * screen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing
   * general anonymous access to Order data.
   */
  orderByCode?: Maybe<Order>;
  /** Get a Product either by id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  product?: Maybe<Product>;
  /** Get a list of Products */
  products: ProductList;
  /** Search Products based on the criteria set by the `SearchInput` */
  search: SearchResponse;
  subscription?: Maybe<Subscription>;
  subscriptionPackage?: Maybe<SubscriptionPackage>;
  subscriptionPackages: SubscriptionPackageList;
  subscriptions: SubscriptionList;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};


export type QueryFacetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};


export type QueryGetCustomerWithDownloadableAssetsArgs = {
  customerId: Scalars['Int']['input'];
};


export type QueryGetDownloadableAssetsByCustomerIdArgs = {
  customerId: Scalars['Int']['input'];
};


export type QueryGetDownloadableAssetsByOrderCodeArgs = {
  orderCode: Scalars['String']['input'];
};


export type QueryGetDownloadableAssetsByOrderIdArgs = {
  orderId: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};


export type QuerySubscriptionArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySubscriptionPackageArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySubscriptionPackagesArgs = {
  options?: InputMaybe<SubscriptionPackageListOptions>;
};


export type QuerySubscriptionsArgs = {
  options?: InputMaybe<SubscriptionListOptions>;
  packageId?: InputMaybe<Scalars['ID']['input']>;
};

export type RefreshCustomerVerificationResult = NativeAuthStrategyError | Success;

export type Refund = Node & {
  __typename?: 'Refund';
  adjustment: Scalars['Money']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  items: Scalars['Money']['output'];
  lines: Array<RefundLine>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  paymentId: Scalars['ID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  shipping: Scalars['Money']['output'];
  state: Scalars['String']['output'];
  total: Scalars['Money']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RefundLine = {
  __typename?: 'RefundLine';
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  refund: Refund;
  refundId: Scalars['ID']['output'];
};

export type Region = {
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RegionTranslation = {
  __typename?: 'RegionTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RegisterCustomerAccountResult = MissingPasswordError | NativeAuthStrategyError | PasswordValidationError | Success;

export type RegisterCustomerCustomFieldsInput = {
  activeDevices?: InputMaybe<Scalars['String']['input']>;
  customerDownloadableAssetsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  favoritesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type RegisterCustomerInput = {
  customFields?: InputMaybe<RegisterCustomerCustomFieldsInput>;
  emailAddress: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RelationCustomFieldConfig = CustomField & {
  __typename?: 'RelationCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  entity: Scalars['String']['output'];
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  scalarFields: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RequestPasswordResetResult = NativeAuthStrategyError | Success;

export type RequestUpdateCustomerEmailAddressResult = EmailAddressConflictError | InvalidCredentialsError | NativeAuthStrategyError | Success;

export type ResetPasswordResult = CurrentUser | NativeAuthStrategyError | NotVerifiedError | PasswordResetTokenExpiredError | PasswordResetTokenInvalidError | PasswordValidationError;

export type Role = Node & {
  __typename?: 'Role';
  channels: Array<Channel>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int']['output'];
};

export type SearchInput = {
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  collectionSlug?: InputMaybe<Scalars['String']['input']>;
  facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
  groupByProduct?: InputMaybe<Scalars['Boolean']['input']>;
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SearchResultSortParameter>;
  take?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean']['output'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  collections: Array<CollectionResult>;
  facetValues: Array<FacetValueResult>;
  items: Array<SearchResult>;
  totalItems: Scalars['Int']['output'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']['output']>;
  currencyCode: CurrencyCode;
  description: Scalars['String']['output'];
  facetIds: Array<Scalars['ID']['output']>;
  facetValueIds: Array<Scalars['ID']['output']>;
  inStock: Scalars['Boolean']['output'];
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  productAsset?: Maybe<SearchResultAsset>;
  productId: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID']['output'];
  productVariantName: Scalars['String']['output'];
  /** A relevance score for the result. Differs between database implementations */
  score: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  focalPoint?: Maybe<Coordinate>;
  id: Scalars['ID']['output'];
  preview: Scalars['String']['output'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type Seller = Node & {
  __typename?: 'Seller';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SetCustomerForOrderResult = AlreadyLoggedInError | EmailAddressConflictError | GuestCheckoutError | NoActiveOrderError | Order;

export type SetOrderShippingMethodResult = IneligibleShippingMethodError | NoActiveOrderError | Order | OrderModificationError;

export type ShippingLine = {
  __typename?: 'ShippingLine';
  discountedPrice: Scalars['Money']['output'];
  discountedPriceWithTax: Scalars['Money']['output'];
  discounts: Array<Discount>;
  id: Scalars['ID']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  shippingMethod: ShippingMethod;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  calculator: ConfigurableOperation;
  checker: ConfigurableOperation;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  fulfillmentHandlerCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<ShippingMethodTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int']['output'];
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  code: Scalars['String']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
};

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** The price value where the result has a single price */
export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Money']['output'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  options?: Maybe<Array<StringFieldOption>>;
  pattern?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  label?: Maybe<Array<LocalizedString>>;
  value: Scalars['String']['output'];
};

/** Operators for filtering on a list of String fields */
export type StringListOperators = {
  inList: Scalars['String']['input'];
};

/** Operators for filtering on a String field */
export type StringOperators = {
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = Node & {
  __typename?: 'Subscription';
  createdAt: Scalars['DateTime']['output'];
  customer: Customer;
  customerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  order: Order;
  orderId: Scalars['ID']['output'];
  package: SubscriptionPackage;
  packageId: Scalars['ID']['output'];
  revokedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SubscriptionFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  customerId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  orderId?: InputMaybe<IdOperators>;
  packageId?: InputMaybe<IdOperators>;
  revokedAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type SubscriptionList = PaginatedList & {
  __typename?: 'SubscriptionList';
  items: Array<Subscription>;
  totalItems: Scalars['Int']['output'];
};

export type SubscriptionListOptions = {
  filter?: InputMaybe<SubscriptionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SubscriptionSortParameter>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscriptionPackage = Node & {
  __typename?: 'SubscriptionPackage';
  createdAt: Scalars['DateTime']['output'];
  days: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  orderFrequency?: Maybe<Scalars['Int']['output']>;
  orderFrequencyInterval: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  variant: ProductVariant;
  variantId: Scalars['ID']['output'];
};

export type SubscriptionPackageFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  days?: InputMaybe<NumberOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  orderFrequency?: InputMaybe<NumberOperators>;
  orderFrequencyInterval?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  variantId?: InputMaybe<IdOperators>;
};

export type SubscriptionPackageList = PaginatedList & {
  __typename?: 'SubscriptionPackageList';
  items: Array<SubscriptionPackage>;
  totalItems: Scalars['Int']['output'];
};

export type SubscriptionPackageListOptions = {
  filter?: InputMaybe<SubscriptionPackageFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SubscriptionPackageSortParameter>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscriptionPackageSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  days?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderFrequency?: InputMaybe<SortOrder>;
  orderFrequencyInterval?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  variantId?: InputMaybe<SortOrder>;
};

export type SubscriptionSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  packageId?: InputMaybe<SortOrder>;
  revokedAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean']['output'];
};

export type Surcharge = Node & {
  __typename?: 'Surcharge';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int']['output'];
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String']['output'];
  taxRate: Scalars['Float']['output'];
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  category: TaxCategory;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  customerGroup?: Maybe<CustomerGroup>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['Float']['output'];
  zone: Zone;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int']['output'];
};

export type TextCustomFieldConfig = CustomField & {
  __typename?: 'TextCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  streetLine1?: InputMaybe<Scalars['String']['input']>;
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerCustomFieldsInput = {
  activeDevices?: InputMaybe<Scalars['String']['input']>;
  customerDownloadableAssetsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  favoritesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateCustomerEmailAddressResult = IdentifierChangeTokenExpiredError | IdentifierChangeTokenInvalidError | NativeAuthStrategyError | Success;

export type UpdateCustomerInput = {
  customFields?: InputMaybe<UpdateCustomerCustomFieldsInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerPasswordResult = InvalidCredentialsError | NativeAuthStrategyError | PasswordValidationError | Success;

export type UpdateOrderInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateOrderItemsResult = InsufficientStockError | NegativeQuantityError | Order | OrderLimitError | OrderModificationError;

export type User = Node & {
  __typename?: 'User';
  authenticationMethods: Array<AuthenticationMethod>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type VerificationTokenExpiredError = ErrorResult & {
  __typename?: 'VerificationTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is either
 * invalid or does not match any expected tokens.
 */
export type VerificationTokenInvalidError = ErrorResult & {
  __typename?: 'VerificationTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type VerifyCustomerAccountResult = CurrentUser | MissingPasswordError | NativeAuthStrategyError | PasswordAlreadySetError | PasswordValidationError | VerificationTokenExpiredError | VerificationTokenInvalidError;

export type Zone = Node & {
  __typename?: 'Zone';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  members: Array<Region>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ImageMetaDataFragment = { __typename?: 'Asset', height: number, width: number, mimeType: string };

export type AddFavouriteMutationVariables = Exact<{
  favouriteIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type AddFavouriteMutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'Customer', customFields?: { __typename?: 'CustomerCustomFields', favorites?: Array<{ __typename?: 'Product', slug: string, name: string, assets: Array<{ __typename?: 'Asset', source: string }> }> | null } | null } };

export type AddItemToOrderMutationVariables = Exact<{
  variantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  customFields: OrderLineCustomFieldsInput;
}>;


export type AddItemToOrderMutation = { __typename?: 'Mutation', addItemToOrder: { __typename: 'InsufficientStockError', errorCode: ErrorCode, message: string } | { __typename: 'NegativeQuantityError', errorCode: ErrorCode, message: string } | { __typename: 'Order' } | { __typename: 'OrderLimitError', errorCode: ErrorCode, message: string } | { __typename: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type AddPaymentToOrderMutationVariables = Exact<{
  input: PaymentInput;
}>;


export type AddPaymentToOrderMutation = { __typename?: 'Mutation', addPaymentToOrder: { __typename: 'IneligiblePaymentMethodError', errorCode: ErrorCode, message: string } | { __typename: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename: 'Order' } | { __typename: 'OrderPaymentStateError', errorCode: ErrorCode, message: string } | { __typename: 'OrderStateTransitionError', errorCode: ErrorCode, message: string } | { __typename: 'PaymentDeclinedError', errorCode: ErrorCode, message: string } | { __typename: 'PaymentFailedError', errorCode: ErrorCode, message: string } };

export type AddSubscriptionToOrderMutationVariables = Exact<{
  subscriptionPackageId: Scalars['ID']['input'];
}>;


export type AddSubscriptionToOrderMutation = { __typename?: 'Mutation', addSubscriptionToOrder?: { __typename: 'InsufficientStockError', errorCode: ErrorCode, message: string } | { __typename: 'NegativeQuantityError', errorCode: ErrorCode, message: string } | { __typename: 'Order', id: string, code: string } | { __typename: 'OrderLimitError', errorCode: ErrorCode, message: string } | { __typename: 'OrderModificationError', errorCode: ErrorCode, message: string } | null };

export type RemoveItemFromCartMutationVariables = Exact<{
  orderLineId: Scalars['ID']['input'];
}>;


export type RemoveItemFromCartMutation = { __typename?: 'Mutation', removeOrderLine: { __typename: 'Order' } | { __typename: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type SetOrderShippingAddressMutationVariables = Exact<{
  input: CreateAddressInput;
}>;


export type SetOrderShippingAddressMutation = { __typename?: 'Mutation', setOrderShippingAddress: { __typename: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename: 'Order' } };

export type SetOrderShippingMethodMutationVariables = Exact<{
  shippingMethodId: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type SetOrderShippingMethodMutation = { __typename?: 'Mutation', setOrderShippingMethod: { __typename: 'IneligibleShippingMethodError', errorCode: ErrorCode, message: string } | { __typename: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename: 'Order' } | { __typename: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type TransitionOrderToStateMutationVariables = Exact<{
  state: Scalars['String']['input'];
}>;


export type TransitionOrderToStateMutation = { __typename?: 'Mutation', transitionOrderToState?: { __typename: 'Order' } | { __typename: 'OrderStateTransitionError', errorCode: ErrorCode, message: string } | null };

export type VerifyCustomerAccountMutationVariables = Exact<{
  token: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type VerifyCustomerAccountMutation = { __typename?: 'Mutation', verifyCustomerAccount: { __typename: 'CurrentUser', id: string, identifier: string } | { __typename: 'MissingPasswordError', errorCode: ErrorCode, message: string } | { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordAlreadySetError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordValidationError', errorCode: ErrorCode, message: string } | { __typename: 'VerificationTokenExpiredError', errorCode: ErrorCode, message: string } | { __typename: 'VerificationTokenInvalidError', errorCode: ErrorCode, message: string } };

export type ActiveOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveOrdersQuery = { __typename?: 'Query', activeOrder?: { __typename?: 'Order', state: string, subTotal: any, totalWithTax: any, shippingWithTax: any, customer?: { __typename?: 'Customer', id: string } | null, discounts: Array<{ __typename?: 'Discount', amount: any }>, taxSummary: Array<{ __typename: 'OrderTaxSummary', taxRate: number }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, phoneNumber?: string | null, streetLine1?: string | null, streetLine2?: string | null, countryCode?: string | null, city?: string | null } | null, lines: Array<{ __typename?: 'OrderLine', id: string, discountedLinePriceWithTax: any, unitPrice: any, quantity: number, linePrice: any, featuredAsset?: { __typename?: 'Asset', source: string } | null, productVariant: { __typename?: 'ProductVariant', id: string, name: string }, customFields?: { __typename?: 'OrderLineCustomFields', orderType?: string | null } | null }> } | null };

export type GetActiveSubscriptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveSubscriptionQuery = { __typename?: 'Query', activeSubscription?: { __typename?: 'ActiveSubscriptionResponse', id: string, customerId: string, orderId: string, packageId: string, createdAt: any, revokedAt: any } | null };

export type AddActiveDeviceMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type AddActiveDeviceMutation = { __typename?: 'Mutation', addActiveDevices?: { __typename?: 'Customer', id: string } | null };

export type AllProductsQueryVariables = Exact<{
  options?: InputMaybe<ProductListOptions>;
}>;


export type AllProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductList', totalItems: number, items: Array<{ __typename?: 'Product', slug: string, assets: Array<{ __typename?: 'Asset', source: string }> }> } };

export type AllSubscriptionPackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSubscriptionPackagesQuery = { __typename?: 'Query', subscriptionPackages: { __typename?: 'SubscriptionPackageList', items: Array<{ __typename?: 'SubscriptionPackage', id: string, variant: { __typename?: 'ProductVariant', name: string } }> } };

export type AvailableCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableCountriesQuery = { __typename?: 'Query', availableCountries: Array<{ __typename?: 'Country', code: string, name: string }> };

export type EligiblePaymentMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type EligiblePaymentMethodsQuery = { __typename?: 'Query', eligiblePaymentMethods: Array<{ __typename?: 'PaymentMethodQuote', id: string, name: string, isEligible: boolean }> };

export type GetActiveDeviceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveDeviceQuery = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', firstName: string, customFields?: { __typename?: 'CustomerCustomFields', activeDevices?: string | null } | null } | null };

export type GetBannersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBannersQuery = { __typename?: 'Query', activeChannel: { __typename?: 'Channel', customFields?: { __typename?: 'ChannelCustomFields', bannerImage?: Array<{ __typename?: 'Asset', source: string }> | null } | null } };

export type GetCurrentSubscriptionPackageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCurrentSubscriptionPackageQuery = { __typename?: 'Query', subscriptionPackage?: { __typename?: 'SubscriptionPackage', id: string, createdAt: any, variant: { __typename?: 'ProductVariant', id: string, name: string, price: any } } | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', firstName: string, lastName: string, emailAddress: string, title?: string | null, addresses?: Array<{ __typename?: 'Address', city?: string | null }> | null, user?: { __typename?: 'User', id: string, verified: boolean, lastLogin?: any | null } | null } | null };

export type GetDownloadableAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDownloadableAssetsQuery = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', customFields?: { __typename?: 'CustomerCustomFields', customerDownloadableAssets?: Array<{ __typename?: 'Asset', id: string, preview: string, fileSize: number, name: string, height: number, width: number, mimeType: string, source: string }> | null } | null } | null };

export type GetFavouritesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFavouritesQuery = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', customFields?: { __typename?: 'CustomerCustomFields', favorites?: Array<{ __typename?: 'Product', id: string, slug: string, name: string, assets: Array<{ __typename?: 'Asset', source: string }> }> | null } | null } | null };

export type GetOrderHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrderHistoryQuery = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', orders: { __typename?: 'OrderList', items: Array<{ __typename?: 'Order', id: string, orderPlacedAt?: any | null, state: string, totalWithTax: any, totalQuantity: number, lines: Array<{ __typename?: 'OrderLine', customFields?: { __typename?: 'OrderLineCustomFields', orderType?: string | null } | null, productVariant: { __typename?: 'ProductVariant', name: string } }> }> } } | null };

export type GetQrImageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQrImageQuery = { __typename?: 'Query', activeChannel: { __typename?: 'Channel', customFields?: { __typename?: 'ChannelCustomFields', qrPay?: Array<{ __typename?: 'Asset', source: string, height: number, width: number }> | null } | null } };

export type GetProductDetailsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductDetailsQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description: string, carousel_images: Array<{ __typename?: 'Asset', source: string, height: number, width: number, mimeType: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, price: any, priceWithTax: any, currencyCode: CurrencyCode, taxRateApplied: { __typename?: 'TaxRate', id: string, value: number } }>, customFields?: { __typename?: 'ProductCustomFields', resolution?: string | null, colorMode?: string | null, supportedApps?: string | null, format?: string | null, height?: string | null, width?: string | null, lamination?: string | null, paperWeight?: string | null, weigth?: string | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }> } | null };

export type RemoveActiveDeviceMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type RemoveActiveDeviceMutation = { __typename?: 'Mutation', removeActiveDevices?: { __typename?: 'Customer', id: string } | null };

export type SearchProductQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchProductQuery = { __typename?: 'Query', search: { __typename?: 'SearchResponse', items: Array<{ __typename?: 'SearchResult', slug: string, productAsset?: { __typename?: 'SearchResultAsset', preview: string } | null }> } };

export const ImageMetaDataFragmentDoc = gql`
    fragment imageMetaData on Asset {
  height
  width
  mimeType
}
    `;
export const AddFavouriteDocument = gql`
    mutation addFavourite($favouriteIds: [ID!]) {
  updateCustomer(input: {customFields: {favoritesIds: $favouriteIds}}) {
    customFields {
      favorites {
        slug
        assets {
          source
        }
        name
      }
    }
  }
}
    `;
export type AddFavouriteMutationFn = Apollo.MutationFunction<AddFavouriteMutation, AddFavouriteMutationVariables>;

/**
 * __useAddFavouriteMutation__
 *
 * To run a mutation, you first call `useAddFavouriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavouriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavouriteMutation, { data, loading, error }] = useAddFavouriteMutation({
 *   variables: {
 *      favouriteIds: // value for 'favouriteIds'
 *   },
 * });
 */
export function useAddFavouriteMutation(baseOptions?: Apollo.MutationHookOptions<AddFavouriteMutation, AddFavouriteMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddFavouriteMutation, AddFavouriteMutationVariables>(AddFavouriteDocument, options);
}
export type AddFavouriteMutationHookResult = ReturnType<typeof useAddFavouriteMutation>;
export type AddFavouriteMutationResult = Apollo.MutationResult<AddFavouriteMutation>;
export type AddFavouriteMutationOptions = Apollo.BaseMutationOptions<AddFavouriteMutation, AddFavouriteMutationVariables>;
export const AddItemToOrderDocument = gql`
    mutation addItemToOrder($variantId: ID!, $quantity: Int!, $customFields: OrderLineCustomFieldsInput!) {
  addItemToOrder(
    productVariantId: $variantId
    quantity: $quantity
    customFields: $customFields
  ) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `;
export type AddItemToOrderMutationFn = Apollo.MutationFunction<AddItemToOrderMutation, AddItemToOrderMutationVariables>;

/**
 * __useAddItemToOrderMutation__
 *
 * To run a mutation, you first call `useAddItemToOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemToOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemToOrderMutation, { data, loading, error }] = useAddItemToOrderMutation({
 *   variables: {
 *      variantId: // value for 'variantId'
 *      quantity: // value for 'quantity'
 *      customFields: // value for 'customFields'
 *   },
 * });
 */
export function useAddItemToOrderMutation(baseOptions?: Apollo.MutationHookOptions<AddItemToOrderMutation, AddItemToOrderMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddItemToOrderMutation, AddItemToOrderMutationVariables>(AddItemToOrderDocument, options);
}
export type AddItemToOrderMutationHookResult = ReturnType<typeof useAddItemToOrderMutation>;
export type AddItemToOrderMutationResult = Apollo.MutationResult<AddItemToOrderMutation>;
export type AddItemToOrderMutationOptions = Apollo.BaseMutationOptions<AddItemToOrderMutation, AddItemToOrderMutationVariables>;
export const AddPaymentToOrderDocument = gql`
    mutation addPaymentToOrder($input: PaymentInput!) {
  addPaymentToOrder(input: $input) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `;
export type AddPaymentToOrderMutationFn = Apollo.MutationFunction<AddPaymentToOrderMutation, AddPaymentToOrderMutationVariables>;

/**
 * __useAddPaymentToOrderMutation__
 *
 * To run a mutation, you first call `useAddPaymentToOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPaymentToOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPaymentToOrderMutation, { data, loading, error }] = useAddPaymentToOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPaymentToOrderMutation(baseOptions?: Apollo.MutationHookOptions<AddPaymentToOrderMutation, AddPaymentToOrderMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddPaymentToOrderMutation, AddPaymentToOrderMutationVariables>(AddPaymentToOrderDocument, options);
}
export type AddPaymentToOrderMutationHookResult = ReturnType<typeof useAddPaymentToOrderMutation>;
export type AddPaymentToOrderMutationResult = Apollo.MutationResult<AddPaymentToOrderMutation>;
export type AddPaymentToOrderMutationOptions = Apollo.BaseMutationOptions<AddPaymentToOrderMutation, AddPaymentToOrderMutationVariables>;
export const AddSubscriptionToOrderDocument = gql`
    mutation addSubscriptionToOrder($subscriptionPackageId: ID!) {
  addSubscriptionToOrder(subscriptionPackageId: $subscriptionPackageId) {
    __typename
    ... on Order {
      id
      code
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `;
export type AddSubscriptionToOrderMutationFn = Apollo.MutationFunction<AddSubscriptionToOrderMutation, AddSubscriptionToOrderMutationVariables>;

/**
 * __useAddSubscriptionToOrderMutation__
 *
 * To run a mutation, you first call `useAddSubscriptionToOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSubscriptionToOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSubscriptionToOrderMutation, { data, loading, error }] = useAddSubscriptionToOrderMutation({
 *   variables: {
 *      subscriptionPackageId: // value for 'subscriptionPackageId'
 *   },
 * });
 */
export function useAddSubscriptionToOrderMutation(baseOptions?: Apollo.MutationHookOptions<AddSubscriptionToOrderMutation, AddSubscriptionToOrderMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddSubscriptionToOrderMutation, AddSubscriptionToOrderMutationVariables>(AddSubscriptionToOrderDocument, options);
}
export type AddSubscriptionToOrderMutationHookResult = ReturnType<typeof useAddSubscriptionToOrderMutation>;
export type AddSubscriptionToOrderMutationResult = Apollo.MutationResult<AddSubscriptionToOrderMutation>;
export type AddSubscriptionToOrderMutationOptions = Apollo.BaseMutationOptions<AddSubscriptionToOrderMutation, AddSubscriptionToOrderMutationVariables>;
export const RemoveItemFromCartDocument = gql`
    mutation removeItemFromCart($orderLineId: ID!) {
  removeOrderLine(orderLineId: $orderLineId) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `;
export type RemoveItemFromCartMutationFn = Apollo.MutationFunction<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>;

/**
 * __useRemoveItemFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveItemFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveItemFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeItemFromCartMutation, { data, loading, error }] = useRemoveItemFromCartMutation({
 *   variables: {
 *      orderLineId: // value for 'orderLineId'
 *   },
 * });
 */
export function useRemoveItemFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>(RemoveItemFromCartDocument, options);
}
export type RemoveItemFromCartMutationHookResult = ReturnType<typeof useRemoveItemFromCartMutation>;
export type RemoveItemFromCartMutationResult = Apollo.MutationResult<RemoveItemFromCartMutation>;
export type RemoveItemFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>;
export const SetOrderShippingAddressDocument = gql`
    mutation setOrderShippingAddress($input: CreateAddressInput!) {
  setOrderShippingAddress(input: $input) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `;
export type SetOrderShippingAddressMutationFn = Apollo.MutationFunction<SetOrderShippingAddressMutation, SetOrderShippingAddressMutationVariables>;

/**
 * __useSetOrderShippingAddressMutation__
 *
 * To run a mutation, you first call `useSetOrderShippingAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetOrderShippingAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setOrderShippingAddressMutation, { data, loading, error }] = useSetOrderShippingAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetOrderShippingAddressMutation(baseOptions?: Apollo.MutationHookOptions<SetOrderShippingAddressMutation, SetOrderShippingAddressMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SetOrderShippingAddressMutation, SetOrderShippingAddressMutationVariables>(SetOrderShippingAddressDocument, options);
}
export type SetOrderShippingAddressMutationHookResult = ReturnType<typeof useSetOrderShippingAddressMutation>;
export type SetOrderShippingAddressMutationResult = Apollo.MutationResult<SetOrderShippingAddressMutation>;
export type SetOrderShippingAddressMutationOptions = Apollo.BaseMutationOptions<SetOrderShippingAddressMutation, SetOrderShippingAddressMutationVariables>;
export const SetOrderShippingMethodDocument = gql`
    mutation setOrderShippingMethod($shippingMethodId: [ID!]!) {
  setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `;
export type SetOrderShippingMethodMutationFn = Apollo.MutationFunction<SetOrderShippingMethodMutation, SetOrderShippingMethodMutationVariables>;

/**
 * __useSetOrderShippingMethodMutation__
 *
 * To run a mutation, you first call `useSetOrderShippingMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetOrderShippingMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setOrderShippingMethodMutation, { data, loading, error }] = useSetOrderShippingMethodMutation({
 *   variables: {
 *      shippingMethodId: // value for 'shippingMethodId'
 *   },
 * });
 */
export function useSetOrderShippingMethodMutation(baseOptions?: Apollo.MutationHookOptions<SetOrderShippingMethodMutation, SetOrderShippingMethodMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SetOrderShippingMethodMutation, SetOrderShippingMethodMutationVariables>(SetOrderShippingMethodDocument, options);
}
export type SetOrderShippingMethodMutationHookResult = ReturnType<typeof useSetOrderShippingMethodMutation>;
export type SetOrderShippingMethodMutationResult = Apollo.MutationResult<SetOrderShippingMethodMutation>;
export type SetOrderShippingMethodMutationOptions = Apollo.BaseMutationOptions<SetOrderShippingMethodMutation, SetOrderShippingMethodMutationVariables>;
export const TransitionOrderToStateDocument = gql`
    mutation transitionOrderToState($state: String!) {
  transitionOrderToState(state: $state) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `;
export type TransitionOrderToStateMutationFn = Apollo.MutationFunction<TransitionOrderToStateMutation, TransitionOrderToStateMutationVariables>;

/**
 * __useTransitionOrderToStateMutation__
 *
 * To run a mutation, you first call `useTransitionOrderToStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTransitionOrderToStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [transitionOrderToStateMutation, { data, loading, error }] = useTransitionOrderToStateMutation({
 *   variables: {
 *      state: // value for 'state'
 *   },
 * });
 */
export function useTransitionOrderToStateMutation(baseOptions?: Apollo.MutationHookOptions<TransitionOrderToStateMutation, TransitionOrderToStateMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<TransitionOrderToStateMutation, TransitionOrderToStateMutationVariables>(TransitionOrderToStateDocument, options);
}
export type TransitionOrderToStateMutationHookResult = ReturnType<typeof useTransitionOrderToStateMutation>;
export type TransitionOrderToStateMutationResult = Apollo.MutationResult<TransitionOrderToStateMutation>;
export type TransitionOrderToStateMutationOptions = Apollo.BaseMutationOptions<TransitionOrderToStateMutation, TransitionOrderToStateMutationVariables>;
export const VerifyCustomerAccountDocument = gql`
    mutation verifyCustomerAccount($token: String!, $password: String) {
  verifyCustomerAccount(token: $token, password: $password) {
    __typename
    ... on CurrentUser {
      id
      identifier
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `;
export type VerifyCustomerAccountMutationFn = Apollo.MutationFunction<VerifyCustomerAccountMutation, VerifyCustomerAccountMutationVariables>;

/**
 * __useVerifyCustomerAccountMutation__
 *
 * To run a mutation, you first call `useVerifyCustomerAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCustomerAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCustomerAccountMutation, { data, loading, error }] = useVerifyCustomerAccountMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useVerifyCustomerAccountMutation(baseOptions?: Apollo.MutationHookOptions<VerifyCustomerAccountMutation, VerifyCustomerAccountMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<VerifyCustomerAccountMutation, VerifyCustomerAccountMutationVariables>(VerifyCustomerAccountDocument, options);
}
export type VerifyCustomerAccountMutationHookResult = ReturnType<typeof useVerifyCustomerAccountMutation>;
export type VerifyCustomerAccountMutationResult = Apollo.MutationResult<VerifyCustomerAccountMutation>;
export type VerifyCustomerAccountMutationOptions = Apollo.BaseMutationOptions<VerifyCustomerAccountMutation, VerifyCustomerAccountMutationVariables>;
export const ActiveOrdersDocument = gql`
    query activeOrders {
  activeOrder {
    state
    customer {
      id
    }
    discounts {
      amount
    }
    subTotal
    totalWithTax
    taxSummary {
      taxRate
      __typename
    }
    shippingWithTax
    shippingAddress {
      fullName
      phoneNumber
      streetLine1
      streetLine2
      countryCode
      city
    }
    lines {
      id
      discountedLinePriceWithTax
      featuredAsset {
        source
      }
      productVariant {
        id
        name
      }
      unitPrice
      quantity
      linePrice
      customFields {
        orderType
      }
    }
  }
}
    `;

/**
 * __useActiveOrdersQuery__
 *
 * To run a query within a React component, call `useActiveOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveOrdersQuery(baseOptions?: Apollo.QueryHookOptions<ActiveOrdersQuery, ActiveOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ActiveOrdersQuery, ActiveOrdersQueryVariables>(ActiveOrdersDocument, options);
}
export function useActiveOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveOrdersQuery, ActiveOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ActiveOrdersQuery, ActiveOrdersQueryVariables>(ActiveOrdersDocument, options);
}
export type ActiveOrdersQueryHookResult = ReturnType<typeof useActiveOrdersQuery>;
export type ActiveOrdersLazyQueryHookResult = ReturnType<typeof useActiveOrdersLazyQuery>;
export type ActiveOrdersQueryResult = Apollo.QueryResult<ActiveOrdersQuery, ActiveOrdersQueryVariables>;
export const GetActiveSubscriptionDocument = gql`
    query getActiveSubscription {
  activeSubscription {
    id
    customerId
    orderId
    packageId
    createdAt
    revokedAt
  }
}
    `;

/**
 * __useGetActiveSubscriptionQuery__
 *
 * To run a query within a React component, call `useGetActiveSubscriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveSubscriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveSubscriptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveSubscriptionQuery(baseOptions?: Apollo.QueryHookOptions<GetActiveSubscriptionQuery, GetActiveSubscriptionQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetActiveSubscriptionQuery, GetActiveSubscriptionQueryVariables>(GetActiveSubscriptionDocument, options);
}
export function useGetActiveSubscriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveSubscriptionQuery, GetActiveSubscriptionQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetActiveSubscriptionQuery, GetActiveSubscriptionQueryVariables>(GetActiveSubscriptionDocument, options);
}
export type GetActiveSubscriptionQueryHookResult = ReturnType<typeof useGetActiveSubscriptionQuery>;
export type GetActiveSubscriptionLazyQueryHookResult = ReturnType<typeof useGetActiveSubscriptionLazyQuery>;
export type GetActiveSubscriptionQueryResult = Apollo.QueryResult<GetActiveSubscriptionQuery, GetActiveSubscriptionQueryVariables>;
export const AddActiveDeviceDocument = gql`
    mutation addActiveDevice($name: String!) {
  addActiveDevices(name: $name) {
    id
  }
}
    `;
export type AddActiveDeviceMutationFn = Apollo.MutationFunction<AddActiveDeviceMutation, AddActiveDeviceMutationVariables>;

/**
 * __useAddActiveDeviceMutation__
 *
 * To run a mutation, you first call `useAddActiveDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddActiveDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addActiveDeviceMutation, { data, loading, error }] = useAddActiveDeviceMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddActiveDeviceMutation(baseOptions?: Apollo.MutationHookOptions<AddActiveDeviceMutation, AddActiveDeviceMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddActiveDeviceMutation, AddActiveDeviceMutationVariables>(AddActiveDeviceDocument, options);
}
export type AddActiveDeviceMutationHookResult = ReturnType<typeof useAddActiveDeviceMutation>;
export type AddActiveDeviceMutationResult = Apollo.MutationResult<AddActiveDeviceMutation>;
export type AddActiveDeviceMutationOptions = Apollo.BaseMutationOptions<AddActiveDeviceMutation, AddActiveDeviceMutationVariables>;
export const AllProductsDocument = gql`
    query allProducts($options: ProductListOptions) {
  products(options: $options) {
    items {
      slug
      assets {
        source
      }
    }
    totalItems
  }
}
    `;

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
}
export function useAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
}
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export const AllSubscriptionPackagesDocument = gql`
    query allSubscriptionPackages {
  subscriptionPackages {
    items {
      id
      variant {
        name
      }
    }
  }
}
    `;

/**
 * __useAllSubscriptionPackagesQuery__
 *
 * To run a query within a React component, call `useAllSubscriptionPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSubscriptionPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSubscriptionPackagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSubscriptionPackagesQuery(baseOptions?: Apollo.QueryHookOptions<AllSubscriptionPackagesQuery, AllSubscriptionPackagesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllSubscriptionPackagesQuery, AllSubscriptionPackagesQueryVariables>(AllSubscriptionPackagesDocument, options);
}
export function useAllSubscriptionPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSubscriptionPackagesQuery, AllSubscriptionPackagesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllSubscriptionPackagesQuery, AllSubscriptionPackagesQueryVariables>(AllSubscriptionPackagesDocument, options);
}
export type AllSubscriptionPackagesQueryHookResult = ReturnType<typeof useAllSubscriptionPackagesQuery>;
export type AllSubscriptionPackagesLazyQueryHookResult = ReturnType<typeof useAllSubscriptionPackagesLazyQuery>;
export type AllSubscriptionPackagesQueryResult = Apollo.QueryResult<AllSubscriptionPackagesQuery, AllSubscriptionPackagesQueryVariables>;
export const AvailableCountriesDocument = gql`
    query availableCountries {
  availableCountries {
    code
    name
  }
}
    `;

/**
 * __useAvailableCountriesQuery__
 *
 * To run a query within a React component, call `useAvailableCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailableCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailableCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAvailableCountriesQuery(baseOptions?: Apollo.QueryHookOptions<AvailableCountriesQuery, AvailableCountriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AvailableCountriesQuery, AvailableCountriesQueryVariables>(AvailableCountriesDocument, options);
}
export function useAvailableCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailableCountriesQuery, AvailableCountriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AvailableCountriesQuery, AvailableCountriesQueryVariables>(AvailableCountriesDocument, options);
}
export type AvailableCountriesQueryHookResult = ReturnType<typeof useAvailableCountriesQuery>;
export type AvailableCountriesLazyQueryHookResult = ReturnType<typeof useAvailableCountriesLazyQuery>;
export type AvailableCountriesQueryResult = Apollo.QueryResult<AvailableCountriesQuery, AvailableCountriesQueryVariables>;
export const EligiblePaymentMethodsDocument = gql`
    query eligiblePaymentMethods {
  eligiblePaymentMethods {
    id
    name
    isEligible
  }
}
    `;

/**
 * __useEligiblePaymentMethodsQuery__
 *
 * To run a query within a React component, call `useEligiblePaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEligiblePaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEligiblePaymentMethodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEligiblePaymentMethodsQuery(baseOptions?: Apollo.QueryHookOptions<EligiblePaymentMethodsQuery, EligiblePaymentMethodsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<EligiblePaymentMethodsQuery, EligiblePaymentMethodsQueryVariables>(EligiblePaymentMethodsDocument, options);
}
export function useEligiblePaymentMethodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EligiblePaymentMethodsQuery, EligiblePaymentMethodsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<EligiblePaymentMethodsQuery, EligiblePaymentMethodsQueryVariables>(EligiblePaymentMethodsDocument, options);
}
export type EligiblePaymentMethodsQueryHookResult = ReturnType<typeof useEligiblePaymentMethodsQuery>;
export type EligiblePaymentMethodsLazyQueryHookResult = ReturnType<typeof useEligiblePaymentMethodsLazyQuery>;
export type EligiblePaymentMethodsQueryResult = Apollo.QueryResult<EligiblePaymentMethodsQuery, EligiblePaymentMethodsQueryVariables>;
export const GetActiveDeviceDocument = gql`
    query getActiveDevice {
  activeCustomer {
    firstName
    customFields {
      activeDevices
    }
  }
}
    `;

/**
 * __useGetActiveDeviceQuery__
 *
 * To run a query within a React component, call `useGetActiveDeviceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveDeviceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveDeviceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveDeviceQuery(baseOptions?: Apollo.QueryHookOptions<GetActiveDeviceQuery, GetActiveDeviceQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetActiveDeviceQuery, GetActiveDeviceQueryVariables>(GetActiveDeviceDocument, options);
}
export function useGetActiveDeviceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveDeviceQuery, GetActiveDeviceQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetActiveDeviceQuery, GetActiveDeviceQueryVariables>(GetActiveDeviceDocument, options);
}
export type GetActiveDeviceQueryHookResult = ReturnType<typeof useGetActiveDeviceQuery>;
export type GetActiveDeviceLazyQueryHookResult = ReturnType<typeof useGetActiveDeviceLazyQuery>;
export type GetActiveDeviceQueryResult = Apollo.QueryResult<GetActiveDeviceQuery, GetActiveDeviceQueryVariables>;
export const GetBannersDocument = gql`
    query getBanners {
  activeChannel {
    customFields {
      bannerImage {
        source
      }
    }
  }
}
    `;

/**
 * __useGetBannersQuery__
 *
 * To run a query within a React component, call `useGetBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBannersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBannersQuery(baseOptions?: Apollo.QueryHookOptions<GetBannersQuery, GetBannersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetBannersQuery, GetBannersQueryVariables>(GetBannersDocument, options);
}
export function useGetBannersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBannersQuery, GetBannersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetBannersQuery, GetBannersQueryVariables>(GetBannersDocument, options);
}
export type GetBannersQueryHookResult = ReturnType<typeof useGetBannersQuery>;
export type GetBannersLazyQueryHookResult = ReturnType<typeof useGetBannersLazyQuery>;
export type GetBannersQueryResult = Apollo.QueryResult<GetBannersQuery, GetBannersQueryVariables>;
export const GetCurrentSubscriptionPackageDocument = gql`
    query getCurrentSubscriptionPackage($id: ID!) {
  subscriptionPackage(id: $id) {
    id
    createdAt
    variant {
      id
      name
      price
    }
  }
}
    `;

/**
 * __useGetCurrentSubscriptionPackageQuery__
 *
 * To run a query within a React component, call `useGetCurrentSubscriptionPackageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentSubscriptionPackageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentSubscriptionPackageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCurrentSubscriptionPackageQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentSubscriptionPackageQuery, GetCurrentSubscriptionPackageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCurrentSubscriptionPackageQuery, GetCurrentSubscriptionPackageQueryVariables>(GetCurrentSubscriptionPackageDocument, options);
}
export function useGetCurrentSubscriptionPackageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentSubscriptionPackageQuery, GetCurrentSubscriptionPackageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCurrentSubscriptionPackageQuery, GetCurrentSubscriptionPackageQueryVariables>(GetCurrentSubscriptionPackageDocument, options);
}
export type GetCurrentSubscriptionPackageQueryHookResult = ReturnType<typeof useGetCurrentSubscriptionPackageQuery>;
export type GetCurrentSubscriptionPackageLazyQueryHookResult = ReturnType<typeof useGetCurrentSubscriptionPackageLazyQuery>;
export type GetCurrentSubscriptionPackageQueryResult = Apollo.QueryResult<GetCurrentSubscriptionPackageQuery, GetCurrentSubscriptionPackageQueryVariables>;
export const GetCurrentUserDocument = gql`
    query getCurrentUser {
  activeCustomer {
    firstName
    lastName
    emailAddress
    addresses {
      city
    }
    title
    user {
      id
      verified
      lastLogin
    }
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
}
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
}
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetDownloadableAssetsDocument = gql`
    query getDownloadableAssets {
  activeCustomer {
    customFields {
      customerDownloadableAssets {
        id
        preview
        fileSize
        name
        height
        width
        mimeType
        source
      }
    }
  }
}
    `;

/**
 * __useGetDownloadableAssetsQuery__
 *
 * To run a query within a React component, call `useGetDownloadableAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDownloadableAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDownloadableAssetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDownloadableAssetsQuery(baseOptions?: Apollo.QueryHookOptions<GetDownloadableAssetsQuery, GetDownloadableAssetsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDownloadableAssetsQuery, GetDownloadableAssetsQueryVariables>(GetDownloadableAssetsDocument, options);
}
export function useGetDownloadableAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDownloadableAssetsQuery, GetDownloadableAssetsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDownloadableAssetsQuery, GetDownloadableAssetsQueryVariables>(GetDownloadableAssetsDocument, options);
}
export type GetDownloadableAssetsQueryHookResult = ReturnType<typeof useGetDownloadableAssetsQuery>;
export type GetDownloadableAssetsLazyQueryHookResult = ReturnType<typeof useGetDownloadableAssetsLazyQuery>;
export type GetDownloadableAssetsQueryResult = Apollo.QueryResult<GetDownloadableAssetsQuery, GetDownloadableAssetsQueryVariables>;
export const GetFavouritesDocument = gql`
    query getFavourites {
  activeCustomer {
    customFields {
      favorites {
        id
        slug
        assets {
          source
        }
        name
      }
    }
  }
}
    `;

/**
 * __useGetFavouritesQuery__
 *
 * To run a query within a React component, call `useGetFavouritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavouritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavouritesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFavouritesQuery(baseOptions?: Apollo.QueryHookOptions<GetFavouritesQuery, GetFavouritesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetFavouritesQuery, GetFavouritesQueryVariables>(GetFavouritesDocument, options);
}
export function useGetFavouritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavouritesQuery, GetFavouritesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetFavouritesQuery, GetFavouritesQueryVariables>(GetFavouritesDocument, options);
}
export type GetFavouritesQueryHookResult = ReturnType<typeof useGetFavouritesQuery>;
export type GetFavouritesLazyQueryHookResult = ReturnType<typeof useGetFavouritesLazyQuery>;
export type GetFavouritesQueryResult = Apollo.QueryResult<GetFavouritesQuery, GetFavouritesQueryVariables>;
export const GetOrderHistoryDocument = gql`
    query getOrderHistory {
  activeCustomer {
    orders {
      items {
        id
        orderPlacedAt
        state
        totalWithTax
        totalQuantity
        lines {
          customFields {
            orderType
          }
          productVariant {
            name
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetOrderHistoryQuery__
 *
 * To run a query within a React component, call `useGetOrderHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrderHistoryQuery(baseOptions?: Apollo.QueryHookOptions<GetOrderHistoryQuery, GetOrderHistoryQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOrderHistoryQuery, GetOrderHistoryQueryVariables>(GetOrderHistoryDocument, options);
}
export function useGetOrderHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderHistoryQuery, GetOrderHistoryQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetOrderHistoryQuery, GetOrderHistoryQueryVariables>(GetOrderHistoryDocument, options);
}
export type GetOrderHistoryQueryHookResult = ReturnType<typeof useGetOrderHistoryQuery>;
export type GetOrderHistoryLazyQueryHookResult = ReturnType<typeof useGetOrderHistoryLazyQuery>;
export type GetOrderHistoryQueryResult = Apollo.QueryResult<GetOrderHistoryQuery, GetOrderHistoryQueryVariables>;
export const GetQrImageDocument = gql`
    query getQrImage {
  activeChannel {
    customFields {
      qrPay {
        source
        height
        width
      }
    }
  }
}
    `;

/**
 * __useGetQrImageQuery__
 *
 * To run a query within a React component, call `useGetQrImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQrImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQrImageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQrImageQuery(baseOptions?: Apollo.QueryHookOptions<GetQrImageQuery, GetQrImageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetQrImageQuery, GetQrImageQueryVariables>(GetQrImageDocument, options);
}
export function useGetQrImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQrImageQuery, GetQrImageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetQrImageQuery, GetQrImageQueryVariables>(GetQrImageDocument, options);
}
export type GetQrImageQueryHookResult = ReturnType<typeof useGetQrImageQuery>;
export type GetQrImageLazyQueryHookResult = ReturnType<typeof useGetQrImageLazyQuery>;
export type GetQrImageQueryResult = Apollo.QueryResult<GetQrImageQuery, GetQrImageQueryVariables>;
export const GetProductDetailsDocument = gql`
    query getProductDetails($slug: String) {
  product(slug: $slug) {
    id
    name
    description
    carousel_images: assets {
      source
      ...imageMetaData
    }
    variants {
      id
      price
      priceWithTax
      currencyCode
      taxRateApplied {
        id
        value
      }
    }
    customFields {
      resolution
      colorMode
      supportedApps
      format
      height
      width
      lamination
      paperWeight
      weigth
    }
    facetValues {
      id
      name
      code
    }
  }
}
    ${ImageMetaDataFragmentDoc}`;

/**
 * __useGetProductDetailsQuery__
 *
 * To run a query within a React component, call `useGetProductDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDetailsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductDetailsQuery, GetProductDetailsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductDetailsQuery, GetProductDetailsQueryVariables>(GetProductDetailsDocument, options);
}
export function useGetProductDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductDetailsQuery, GetProductDetailsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductDetailsQuery, GetProductDetailsQueryVariables>(GetProductDetailsDocument, options);
}
export type GetProductDetailsQueryHookResult = ReturnType<typeof useGetProductDetailsQuery>;
export type GetProductDetailsLazyQueryHookResult = ReturnType<typeof useGetProductDetailsLazyQuery>;
export type GetProductDetailsQueryResult = Apollo.QueryResult<GetProductDetailsQuery, GetProductDetailsQueryVariables>;
export const RemoveActiveDeviceDocument = gql`
    mutation removeActiveDevice($name: String!) {
  removeActiveDevices(name: $name) {
    id
  }
}
    `;
export type RemoveActiveDeviceMutationFn = Apollo.MutationFunction<RemoveActiveDeviceMutation, RemoveActiveDeviceMutationVariables>;

/**
 * __useRemoveActiveDeviceMutation__
 *
 * To run a mutation, you first call `useRemoveActiveDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveActiveDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeActiveDeviceMutation, { data, loading, error }] = useRemoveActiveDeviceMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useRemoveActiveDeviceMutation(baseOptions?: Apollo.MutationHookOptions<RemoveActiveDeviceMutation, RemoveActiveDeviceMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RemoveActiveDeviceMutation, RemoveActiveDeviceMutationVariables>(RemoveActiveDeviceDocument, options);
}
export type RemoveActiveDeviceMutationHookResult = ReturnType<typeof useRemoveActiveDeviceMutation>;
export type RemoveActiveDeviceMutationResult = Apollo.MutationResult<RemoveActiveDeviceMutation>;
export type RemoveActiveDeviceMutationOptions = Apollo.BaseMutationOptions<RemoveActiveDeviceMutation, RemoveActiveDeviceMutationVariables>;
export const SearchProductDocument = gql`
    query searchProduct($input: SearchInput!) {
  search(input: $input) {
    items {
      slug
      productAsset {
        preview
      }
    }
  }
}
    `;

/**
 * __useSearchProductQuery__
 *
 * To run a query within a React component, call `useSearchProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchProductQuery(baseOptions: Apollo.QueryHookOptions<SearchProductQuery, SearchProductQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchProductQuery, SearchProductQueryVariables>(SearchProductDocument, options);
}
export function useSearchProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchProductQuery, SearchProductQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SearchProductQuery, SearchProductQueryVariables>(SearchProductDocument, options);
}
export type SearchProductQueryHookResult = ReturnType<typeof useSearchProductQuery>;
export type SearchProductLazyQueryHookResult = ReturnType<typeof useSearchProductLazyQuery>;
export type SearchProductQueryResult = Apollo.QueryResult<SearchProductQuery, SearchProductQueryVariables>;