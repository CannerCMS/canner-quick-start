import {createClient} from 'canner-graphql-interface';
import schema from '../canner.schema';
import utils from './index';

const client = createClient({
  connector: utils.connector,
  schema: schema.schema
});

export default client;
