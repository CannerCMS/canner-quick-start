import {createClient} from 'canner-graphql-interface';
import {LocalStorageConnector} from 'canner-graphql-interface';
import schema from '../canner.schema';

const connector = new LocalStorageConnector({
  localStorageKey: 'canner-quick-start',
  defaultData: {
    info: {
      name: 'Jack'
    }
  }
});

// change this to your own apollo client
// or use the firebase connector: https://github.com/Canner/canner-firestore-cms/blob/master/schema/utils/client.js
const client = createClient({
  connector,
  schema: schema.schema
});

export default client;
