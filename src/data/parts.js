// const images = require.context('./images', true, /\.png$/);
//HEAD
import headBigEye from './images/head-big-eye.png'
import headFriendly from './images/head-friendly.png'
import headShredder from './images/head-shredder.png'
import headSingleEye from './images/head-single-eye.png'
import headSurveillance from './images/head-surveillance.png'
//ARMS
import armArticulatedClaw from './images/arm-articulated-claw.png'
import armDualClaw from './images/arm-dual-claw.png'
import armGrabber from './images/arm-grabber.png'
import armPropeller from './images/arm-propeller.png'
import armStubbyClaw from './images/arm-stubby-claw.png'
//TORSO
import torsoFlexibleGauged from './images/torso-flexible-gauged.png'
import torsoGauged from './images/torso-gauged.png'
import torsoPouch from './images/torso-pouch.png'
//BASES
import baseDoubleWheel from './images/base-double-wheel.png'
import baseRocket from './images/base-rocket.png'
import baseSingleWheel from './images/base-single-wheel.png'
import baseSpring from './images/base-spring.png'
import baseTripleWheel from './images/base-triple-wheel.png'

const parts = {
  heads: [
    {
      id: 1,
      description:
        'Голова робота с необычно большим глазом и вытянутой шеей — отлично подходит для исследования космоса.',
      title: 'Могучий Циклоп',
      src: headBigEye,
      type: 'heads',
      cost: 1225.5,
    },
    {
      id: 2,
      description: 'Дружелюбная голова робота с двумя глазами и улыбкой — отлично подходит для домашнего использования..',
      title: 'Дружелюбный',
      src: headFriendly,
      cost: 945.0,
      type: 'heads',
      onSale: true,
    },
    {
      id: 3,
      description: 'Большая трехглазая голова с измельчителем вместо рта — отлично подходит для измельчения мелких предметов или документов..',
      title: 'Измельчитель',
      src: headShredder,
      type: 'heads',
      cost: 1275.5,
    },
    {
      id: 4,
      description: 'Простая одноглазая голова — простая и недорогая.',
      title: 'Малый Циклоп',
      src: headSingleEye,
      type: 'heads',
      cost: 750.0,
    },
    {
      id: 5,
      description: 'Голова робота с тремя глазами-камерами — отлично подходит для наблюдения.',
      title: 'Наблюдатель',
      src: headSurveillance,
      type: 'heads',
      cost: 1255.5,
    },
  ],
  arms: [
    {
      id: 1,
      description: 'Шарнирная рука с крюком — отлично подходит для работы за углами или в ограниченном пространстве.',
      title: 'Артикулятор',
      src: armArticulatedClaw,
      type: 'arms',
      cost: 275,
    },
    {
      id: 2,
      description: 'Рука с двумя независимыми крюками — отлично подходит, когда вам нужна дополнительная рука. Нужны четыре руки? Оснастите своего бота двумя такими руками.',
      title: 'Клешня',
      src: armDualClaw,
      type: 'arms',
      cost: 285,
    },
    {
      id: 3,
      description: 'Телескопическая рука с захватом.',
      title: 'Загребатель',
      src: armGrabber,
      type: 'arms',
      cost: 205.5,
    },
    {
      id: 4,
      description: 'Рука с пропеллером — подходит для движения или в качестве охлаждающего вентилятора.',
      title: 'Пропеллер',
      src: armPropeller,
      type: 'arms',
      cost: 230,
      onSale: true,
    },
    {
      id: 5,
      description: 'Короткая и сильная рука с клешней — просто, но дешево.',
      title: 'Короткая клешня',
      src: armStubbyClaw,
      type: 'arms',
      cost: 125,
    },
  ],
  torsos: [
    {
      id: 1,
      description: 'Туловище, которое может слегка сгибаться в талии и оснащено датчиком температуры.',
      title: 'Торс с термометром',
      src: torsoFlexibleGauged,
      type: 'torsos',
      cost: 1575,
    },
    {
      id: 2,
      description: 'Менее гибкий торс с индикатором заряда батареи.',
      title: 'Торс с амперметром',
      src: torsoGauged,
      type: 'torsos',
      cost: 1385,
    },
    {
      id: 2,
      description: 'Простой торс с сумкой для переноски вещей.',
      title: 'Торс с рюкзаком',
      src: torsoPouch,
      type: 'torsos',
      cost: 785,
      onSale: true,
    },
  ],
  bases: [
    {
      id: 1,
      description: 'Двухколесная база с акселерометром для устойчивости.',
      title: 'Двухколесный',
      src: baseDoubleWheel,
      type: 'bases',
      cost: 895,
    },
    {
      id: 2,
      description: 'Ракетная база, способная совершать высокоскоростные управляемые полеты.',
      title: 'Рокета',
      src: baseRocket,
      type: 'bases',
      cost: 1520.5,
    },
    {
      id: 3,
      description: 'Одноколесная база с акселерометром, способная развивать более высокую скорость и передвигаться по более пересеченной местности, чем двухколесная версия.',
      title: 'Моноколесо',
      src: baseSingleWheel,
      type: 'bases',
      cost: 1190.5,
    },
    {
      id: 4,
      description: 'Пружинное основание — отлично подходит для покарения высот.',
      title: 'Пружина',
      src: baseSpring,
      type: 'bases',
      cost: 1190.5,
    },
    {
      id: 5,
      description: 'Недорогая трехколесная база. Способна развивать только небольшую скорость и может функционировать только на гладких поверхностях.',
      title: 'Офисный вариант',
      src: baseTripleWheel,
      type: 'bases',
      cost: 700.5,
    },
  ],
};
export default parts;