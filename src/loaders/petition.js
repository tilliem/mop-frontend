const { Promise } = global;

export default () => {
  return new Promise(resolve => {
    require.ensure([], () => {
      resolve({
        SignatureCount: require('../components/signature-count.js')
      });
    });
  });
};
