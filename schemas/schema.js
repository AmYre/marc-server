import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import description from './description';
import home from './documents/home';
import categories from './documents/categories';
import products from './documents/products';
import artistes from './documents/artistes';
import images from './images';
import tradText from './locale/tradText';
import tradDesc from './locale/tradDesc';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([home, products, artistes, categories, images, description, tradText, tradDesc]),
});
