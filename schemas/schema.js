import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import description from './description';
import category from './category';
import product from './product';
import artiste from './artiste';
import images from './images';
import tradText from './locale/tradText';
import tradDesc from './locale/tradDesc';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([product, artiste, images, category, description, tradText, tradDesc]),
});
