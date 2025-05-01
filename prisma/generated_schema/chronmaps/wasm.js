
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password'
};

exports.Prisma.MapGroupScalarFieldEnum = {
  id: 'id',
  groupName: 'groupName',
  label: 'label'
};

exports.Prisma.MapScalarFieldEnum = {
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

exports.Prisma.ZoomLabelScalarFieldEnum = {
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

exports.Prisma.ButtonLinkScalarFieldEnum = {
  id: 'id',
  label: 'label',
  url: 'url'
};

exports.Prisma.LayerSectionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  order: 'order'
};

exports.Prisma.LayerGroupScalarFieldEnum = {
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

exports.Prisma.LayerDataScalarFieldEnum = {
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

exports.Prisma.ViewOrderCounterScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
