// 1. install validator - yarn add validator
// 2. import validator - import validator from 'validator'; (from www.npmjs.com/validator)
// 3. use validator for 'isEmail' - validator.isEmail(name@email.com)

import validator from 'validator';

console.log(validator.isEmail('amyplant@me.com'));