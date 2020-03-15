const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (typeof value == 'undefined') {
    this.chain.push('~( )~');
    return this;
    }
    if (typeof value == 'function') {
      value = 'function() {}';
    }
    this.chain.push('~' + '(' + ' ' + value + ' ' + ')' + '~');
    return this;
  },

  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let chain = this.chain.join('').slice(1,-1)
    this.chain = [];
    return chain;
  }
};

module.exports = chainMaker;
