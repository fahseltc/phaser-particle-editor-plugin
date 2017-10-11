!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("library",[],t):"object"==typeof exports?exports.library=t():e.library=t()}(this,function(){return function(e){function t(i){if(r[i])return r[i].exports;var o=r[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createImageFromBitmapData=function(e,t,r,i,o){var n=new Image;n.src=t,n.onload=function(){e.cache.addImage(r,t,n),i()},n.onerror=function(){o&&o()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createImageFromBitmapData=t.ParticleEditorPlugin=void 0;var i=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(i),n=r(0);t.ParticleEditorPlugin=o.default,t.createImageFromBitmapData=n.createImageFromBitmapData},function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),u=r(3),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e,r){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return n.addParticleFactory(),n}return n(t,e),a(t,[{key:"addParticleFactory",value:function(){var e=this;Phaser.GameObjectFactory.prototype.particle=function(t,r,i,o){var n=new l.default(e.game,e.getData(i),t,r);return(o||e.game.world).add(n)},Phaser.GameObjectCreator.prototype.particle=function(t,r,i){return new l.default(e.game,t,r,e.getData(i))}}},{key:"getData",value:function(e){return"string"==typeof e?this.game.cache.getJSON(e):e}}]),t}(Phaser.Plugin);t.default=c,e.exports=t.default},function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var r=[],i=!0,o=!1,n=void 0;try{for(var a,u=e[Symbol.iterator]();!(i=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){o=!0,n=e}finally{try{!i&&u.return&&u.return()}finally{if(o)throw n}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=function e(t,r,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,r,i)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(i)},c=r(4),s=function(e){return e&&e.__esModule?e:{default:e}}(c),f=r(0),p=function(e){function t(e,r,n,a){i(this,t);var u=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return u.x=n,u.y=a,u._emitersMap=new Map,u._collidebleEmitters=new Set,u._emitX=0,u._emitY=0,u._arcade=u.game.physics.arcade,u._initEmitters(r),u}return n(t,e),u(t,[{key:"_initEmitters",value:function(e){var t=e.emitters;for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];this.addEmitter(r,i)}}},{key:"_createEmitter",value:function(e,t){return new s.default(this.game,e,t)}},{key:"add",value:function(e,r,i){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"add",this).call(this,e,r,i),this._emitersMap.set(e.name,e)}},{key:"remove",value:function(e,r,i){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"remove",this).call(this,e,r,i),this._emitersMap.delete(e.name)}},{key:"_emit",value:function(e,t){t.enabled&&(t.flow?e.flow(t.lifespan,t.frequency,t.quantity,t.total,t.immediate):e.start(t.explode,t.lifespan,t.frequency,t.total))}},{key:"update",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"update",this).call(this);var e=!0,r=!1,i=void 0;try{for(var o,n=this._collidebleEmitters[Symbol.iterator]();!(e=(o=n.next()).done);e=!0){var a=o.value;this._arcade.collide(a)}}catch(e){r=!0,i=e}finally{try{!e&&n.return&&n.return()}finally{if(r)throw i}}}},{key:"_onEmitterImageUpdate",value:function(e,t){this._recreateEmitter(e,t)}},{key:"_recreateEmitter",value:function(e,t){this.removeEmitter(e),this.addEmitter(e,t)}},{key:"addEmitter",value:function(e,t){var r=this,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];(0,f.createImageFromBitmapData)(this.game,t[e],e,function(){var o=r._createEmitter(e,t);r.add(o),o.makeParticles(o.name,t.frames,500,t.collide,t.collideWorldBounds),r.updateEmitterProperties(e,t),i&&r._emit(o,t),t.collide||t.collideWorldBounds?r._collidebleEmitters.add(o):r._collidebleEmitters.delete(o)})}},{key:"removeEmitter",value:function(e){this.remove(this._emitersMap.get(e))}},{key:"updateEmitterImage",value:function(e,t){(0,f.createImageFromBitmapData)(this.game,t[e],e,this._onEmitterImageUpdate.bind(this,e,t))}},{key:"updateEmitterProperties",value:function(e,t){var r=this._emitersMap.get(e);r.applyProperties(t),this._emit(r,t)}},{key:"updateEmitterOption",value:function(e,t){this._recreateEmitter(e,t)}},{key:"emitX",get:function(){return this._emitX},set:function(e){this._emitX=e;var t=!0,r=!1,i=void 0;try{for(var o,n=this._emitersMap[Symbol.iterator]();!(t=(o=n.next()).done);t=!0){var u=o.value,l=a(u,2),c=(l[0],l[1]);c.emitX=c.properties.emitX+this.emitX}}catch(e){r=!0,i=e}finally{try{!t&&n.return&&n.return()}finally{if(r)throw i}}}},{key:"emitY",get:function(){return this._emitY},set:function(e){this._emitY=e;var t=!0,r=!1,i=void 0;try{for(var o,n=this._emitersMap[Symbol.iterator]();!(t=(o=n.next()).done);t=!0){var u=o.value,l=a(u,2),c=(l[0],l[1]);c.emitY=c.properties.emitY+this.emitY}}catch(e){r=!0,i=e}finally{try{!t&&n.return&&n.return()}finally{if(r)throw i}}}}]),t}(Phaser.Group);t.default=p,e.exports=t.default},function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),u=function(e){function t(e,r,n){i(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n.emitX,n.emitY,n.maxParticles));return a.name=r,a.applyProperties(n),a}return n(t,e),a(t,[{key:"applyProperties",value:function(e){this.properties=e,this.gravity.x=e.gravityX,this.gravity.y=e.gravityY,this.setRotation(e.rotationMin,e.rotationMax),this.emitX=e.emitX,this.emitY=e.emitY,this.maxParticles=e.maxParticles,this.setAlpha(e.alphaMin,e.alphaMax,e.alphaRate,Phaser.Easing[e.alphaEase][e.alphaEaseMode],e.alphaYoyo),e.proportional?(this.minParticleScale=e.minScale,this.maxParticleScale=e.maxScale):this.setScale(e.scaleFromX,e.scaleToX,e.scaleFromY,e.scaleToY,e.scaleRate,Phaser.Easing[e.scaleEase][e.scaleEaseMode],e.scaleYoyo),this.minParticleSpeed.setTo(e.minSpeedX,e.minSpeedY),this.maxParticleSpeed.setTo(e.maxSpeedX,e.maxSpeedY),this.lifespan=e.lifespan,this.angularDrag=e.angularDrag,this.bounce.setTo(e.bounceX,e.bounceY),this.width=e.width,this.height=e.height,e.explode||(this.on=e.enabled)}}]),t}(Phaser.Particles.Arcade.Emitter);t.default=u,e.exports=t.default}])});