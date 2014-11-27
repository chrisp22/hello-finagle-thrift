//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./hello_types');
//HELPER FUNCTIONS AND STRUCTURES

HelloService_sayHello_args = function(args) {
  this.msg = null;
  if (args) {
    if (args.msg !== undefined) {
      this.msg = args.msg;
    }
  }
};
HelloService_sayHello_args.prototype = {};
HelloService_sayHello_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.HelloMsg();
        this.msg.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

HelloService_sayHello_args.prototype.write = function(output) {
  output.writeStructBegin('HelloService_sayHello_args');
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 1);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

HelloService_sayHello_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
HelloService_sayHello_result.prototype = {};
HelloService_sayHello_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.HelloMsg();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

HelloService_sayHello_result.prototype.write = function(output) {
  output.writeStructBegin('HelloService_sayHello_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

HelloService_ping_args = function(args) {
};
HelloService_ping_args.prototype = {};
HelloService_ping_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

HelloService_ping_args.prototype.write = function(output) {
  output.writeStructBegin('HelloService_ping_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

HelloService_ping_result = function(args) {
};
HelloService_ping_result.prototype = {};
HelloService_ping_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

HelloService_ping_result.prototype.write = function(output) {
  output.writeStructBegin('HelloService_ping_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

HelloServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
HelloServiceClient.prototype = {};
HelloServiceClient.prototype.seqid = function() { return this._seqid; }
HelloServiceClient.prototype.new_seqid = function() { return this._seqid += 1; }
HelloServiceClient.prototype.sayHello = function(msg, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_sayHello(msg);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sayHello(msg);
  }
};

HelloServiceClient.prototype.send_sayHello = function(msg) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sayHello', Thrift.MessageType.CALL, this.seqid());
  var args = new HelloService_sayHello_args();
  args.msg = msg;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

HelloServiceClient.prototype.recv_sayHello = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new HelloService_sayHello_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sayHello failed: unknown result');
};
HelloServiceClient.prototype.ping = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_ping();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_ping();
  }
};

HelloServiceClient.prototype.send_ping = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid());
  var args = new HelloService_ping_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

HelloServiceClient.prototype.recv_ping = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new HelloService_ping_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
HelloServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
HelloServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

HelloServiceProcessor.prototype.process_sayHello = function(seqid, input, output) {
  var args = new HelloService_sayHello_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sayHello.length === 1) {
    Q.fcall(this._handler.sayHello, args.msg)
      .then(function(result) {
        var result = new HelloService_sayHello_result({success: result});
        output.writeMessageBegin("sayHello", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new HelloService_sayHello_result(err);
        output.writeMessageBegin("sayHello", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sayHello(args.msg,  function (err, result) {
      var result = new HelloService_sayHello_result((err != null ? err : {success: result}));
      output.writeMessageBegin("sayHello", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

HelloServiceProcessor.prototype.process_ping = function(seqid, input, output) {
  var args = new HelloService_ping_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.ping.length === 0) {
    Q.fcall(this._handler.ping)
      .then(function(result) {
        var result = new HelloService_ping_result({success: result});
        output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new HelloService_ping_result(err);
        output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.ping( function (err, result) {
      var result = new HelloService_ping_result((err != null ? err : {success: result}));
      output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

