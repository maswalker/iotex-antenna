/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.iotextypes.ElectionBucket', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotextypes.ElectionBucket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotextypes.ElectionBucket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotextypes.ElectionBucket.displayName = 'proto.iotextypes.ElectionBucket';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotextypes.ElectionBucket.prototype.toObject = function(opt_includeInstance) {
  return proto.iotextypes.ElectionBucket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotextypes.ElectionBucket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.ElectionBucket.toObject = function(includeInstance, msg) {
  var f, obj = {
    voter: msg.getVoter_asB64(),
    candidate: msg.getCandidate_asB64(),
    amount: msg.getAmount_asB64(),
    starttime: (f = msg.getStarttime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    decay: jspb.Message.getFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotextypes.ElectionBucket}
 */
proto.iotextypes.ElectionBucket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotextypes.ElectionBucket;
  return proto.iotextypes.ElectionBucket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotextypes.ElectionBucket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotextypes.ElectionBucket}
 */
proto.iotextypes.ElectionBucket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVoter(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCandidate(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAmount(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDecay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotextypes.ElectionBucket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotextypes.ElectionBucket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotextypes.ElectionBucket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.ElectionBucket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoter_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCandidate_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAmount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDecay();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional bytes voter = 1;
 * @return {string}
 */
proto.iotextypes.ElectionBucket.prototype.getVoter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes voter = 1;
 * This is a type-conversion wrapper around `getVoter()`
 * @return {string}
 */
proto.iotextypes.ElectionBucket.prototype.getVoter_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVoter()));
};


/**
 * optional bytes voter = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVoter()`
 * @return {!Uint8Array}
 */
proto.iotextypes.ElectionBucket.prototype.getVoter_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVoter()));
};


/** @param {!(string|Uint8Array)} value */
proto.iotextypes.ElectionBucket.prototype.setVoter = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes candidate = 2;
 * @return {string}
 */
proto.iotextypes.ElectionBucket.prototype.getCandidate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes candidate = 2;
 * This is a type-conversion wrapper around `getCandidate()`
 * @return {string}
 */
proto.iotextypes.ElectionBucket.prototype.getCandidate_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCandidate()));
};


/**
 * optional bytes candidate = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCandidate()`
 * @return {!Uint8Array}
 */
proto.iotextypes.ElectionBucket.prototype.getCandidate_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCandidate()));
};


/** @param {!(string|Uint8Array)} value */
proto.iotextypes.ElectionBucket.prototype.setCandidate = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes amount = 3;
 * @return {string}
 */
proto.iotextypes.ElectionBucket.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes amount = 3;
 * This is a type-conversion wrapper around `getAmount()`
 * @return {string}
 */
proto.iotextypes.ElectionBucket.prototype.getAmount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAmount()));
};


/**
 * optional bytes amount = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAmount()`
 * @return {!Uint8Array}
 */
proto.iotextypes.ElectionBucket.prototype.getAmount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAmount()));
};


/** @param {!(string|Uint8Array)} value */
proto.iotextypes.ElectionBucket.prototype.setAmount = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp startTime = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.iotextypes.ElectionBucket.prototype.getStarttime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.iotextypes.ElectionBucket.prototype.setStarttime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.iotextypes.ElectionBucket.prototype.clearStarttime = function() {
  this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotextypes.ElectionBucket.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.iotextypes.ElectionBucket.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.iotextypes.ElectionBucket.prototype.setDuration = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.iotextypes.ElectionBucket.prototype.clearDuration = function() {
  this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotextypes.ElectionBucket.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool decay = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.iotextypes.ElectionBucket.prototype.getDecay = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.iotextypes.ElectionBucket.prototype.setDecay = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


goog.object.extend(exports, proto.iotextypes);