//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
} from 'react-icons/fi';

import {
    SlLike,
    SlDislike,

} from 'react-icons/sl'

import {
    AiOutlineComment,
} from 'react-icons/ai'

import {
    FaShare,
} from 'react-icons/fa'

// feed images
import Feed1 from "../assets/img 2.webp";
import Feed2 from "../assets/img 3.webp";
import Feed3 from "../assets/img 4.webp";
import Feed4 from "../assets/Themes agenda critical.webp";
import Feed5 from "../assets/Sanwo.jpg";
import Feed6 from "../assets/Seasons Greetings from TPL D.jpg";
import Feed7 from "../assets/img 1.webp";
import Feed8 from "../assets/gm profile.JPG";
import Feed9 from "../assets/GM LASPEMA pays courtesy visit to Lagos.webp";

// report author images
import reportAuthorImg1 from "../assets/img 4.webp";
import reportAuthorImg2 from "../assets/Themes agenda critical.webp";
import reportAuthorImg3 from "../assets/GM LASPEMA pays courtesy visit to Lagos.webp";

// report images
import reportImg1 from "../assets/gm profile.JPG";
import reportImg2 from "../assets/Sanwo.jpg";
import reportImg3 from "../assets/lekki bridge photo.jpeg";

// skills images
import SkillImg1 from "../assets/lekki bridge photo.jpeg";
import SkillImg2 from "../assets/Governor Sanwo Olu HD.jpg";
import SkillImg3 from "../assets/Bamgbose-Martins.jpg";
import SkillImg4 from "../assets/GM LASPEMA pays courtesy visit to Lagos.webp";
import SkillImg5 from "../assets/lekki bridge photo.jpeg";
import SkillImg6 from "../assets/img 1.webp";
import SkillImg7 from "../assets/img 2.webp";
import SkillImg8 from "../assets/img 3.webp";


  // companies icons
import FreelancerBrandIcon from "../assets/Governor Sanwo Olu HD.jpg";
import UpworkBrandIcon from "../assets/Bamgbose-Martins.jpg";
import FiverBrandIcon from "../assets/GM LASPEMA pays courtesy visit to Lagos.webp";
import BehanceBrandIcon from "../assets/gm profile.JPG";
import DribbbleBrandIcon from "../assets/img 1.webp";


  // navigation
export const navigation = [
    {
      name: 'home',
      to: '/',
    },
    {
      name: 'about',
      to: '/about',
    },
    {
      name: 'blog',
      to: '/blog',
    },
    {
        name: 'team',
        to: '/team',
    },
    {
      name: 'contact',
      to: '/contact',
    },
  ];
  

  // News Icons
  export const newsIcons = [
    {
      name: 'like',
      icon: <SlLike/>
    },
    {
      name: 'dislike',
      icon: <SlDislike/>
    },
    {
      name: 'comment',
      icon: <AiOutlineComment/>
    },
    {
      name: 'share',
      icon: <FaShare/>
    }
  ] 


  // feed Data
  export const feedData = [
    {
      id: '1',
      image: Feed1,
      name: 'feed name 1',
      category: 'sports',
      like: <SlLike size={20}/>,
      dislike: <SlDislike size={20}/>,
      comment: <AiOutlineComment size={20}/>,
      share: <FaShare size={20}/>,
      paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloribus, maiores ullam recusandae pariatur quisquam corporis doloremque aperiam non repellat iste eius quod quasi minima beatae repellendus reiciendis officia est nisi quia vel impedit perferendis temporibus. Cum vitae sapiente quis alias adipisci obcaecati omnis, hic quae possimus vel maxime soluta! Labore, dolorem adipisci! Repudiandae velit officia ratione rerum accusantium nulla voluptatum molestiae blanditiis sequi tempora. Doloremque in voluptates aliquid voluptatibus vero quis ipsam, voluptate voluptas numquam. Temporibus, officiis tenetur totam earum architecto, recusandae suscipit delectus, id consequuntur asperiores culpa deserunt nobis odit quidem magnam? Quod doloribus iste saepe sapiente id.',
    },
    {
        id: '2',
        image: Feed2,
        name: 'feed name 2',
        category: 'business',
        like: <SlLike size={20}/>,
        dislike: <SlDislike size={20}/>,
        comment: <AiOutlineComment size={20}/>,
        share: <FaShare size={20}/>,
        paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloribus, maiores ullam recusandae pariatur quisquam corporis doloremque aperiam non repellat iste eius quod quasi minima beatae repellendus reiciendis officia est nisi quia vel impedit perferendis temporibus. Cum vitae sapiente quis alias adipisci obcaecati omnis, hic quae possimus vel maxime soluta! Labore, dolorem adipisci! Repudiandae velit officia ratione rerum accusantium nulla voluptatum molestiae blanditiis sequi tempora. Doloremque in voluptates aliquid voluptatibus vero quis ipsam, voluptate voluptas numquam. Temporibus, officiis tenetur totam earum architecto, recusandae suscipit delectus, id consequuntur asperiores culpa deserunt nobis odit quidem magnam? Quod doloribus iste saepe sapiente id.',
      },
      {
        id: '3',
      image: Feed3,
      name: 'feed name 3',
      category: 'sports',
      like: <SlLike size={20}/>,
      dislike: <SlDislike size={20}/>,
      comment: <AiOutlineComment size={20}/>,
      share: <FaShare size={20}/>,
      paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloribus, maiores ullam recusandae pariatur quisquam corporis doloremque aperiam non repellat iste eius quod quasi minima beatae repellendus reiciendis officia est nisi quia vel impedit perferendis temporibus. Cum vitae sapiente quis alias adipisci obcaecati omnis, hic quae possimus vel maxime soluta! Labore, dolorem adipisci! Repudiandae velit officia ratione rerum accusantium nulla voluptatum molestiae blanditiis sequi tempora. Doloremque in voluptates aliquid voluptatibus vero quis ipsam, voluptate voluptas numquam. Temporibus, officiis tenetur totam earum architecto, recusandae suscipit delectus, id consequuntur asperiores culpa deserunt nobis odit quidem magnam? Quod doloribus iste saepe sapiente id.',
    },
    {
      id: '4',
      image: Feed4,
      name: 'feed name 4',
      category: 'world',
      like: <SlLike size={20}/>,
      dislike: <SlDislike size={20}/>,
      comment: <AiOutlineComment size={20}/>,
      share: <FaShare size={20}/>,
      paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloribus, maiores ullam recusandae pariatur quisquam corporis doloremque aperiam non repellat iste eius quod quasi minima beatae repellendus reiciendis officia est nisi quia vel impedit perferendis temporibus. Cum vitae sapiente quis alias adipisci obcaecati omnis, hic quae possimus vel maxime soluta! Labore, dolorem adipisci! Repudiandae velit officia ratione rerum accusantium nulla voluptatum molestiae blanditiis sequi tempora. Doloremque in voluptates aliquid voluptatibus vero quis ipsam, voluptate voluptas numquam. Temporibus, officiis tenetur totam earum architecto, recusandae suscipit delectus, id consequuntur asperiores culpa deserunt nobis odit quidem magnam? Quod doloribus iste saepe sapiente id.',
    },
    {
        id: '5',
      image: Feed5,
      name: 'feed name 5',
      category: 'business',
      like: <SlLike size={20}/>,
      dislike: <SlDislike size={20}/>,
      comment: <AiOutlineComment size={20}/>,
      share: <FaShare size={20}/>,
      paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloribus, maiores ullam recusandae pariatur quisquam corporis doloremque aperiam non repellat iste eius quod quasi minima beatae repellendus reiciendis officia est nisi quia vel impedit perferendis temporibus. Cum vitae sapiente quis alias adipisci obcaecati omnis, hic quae possimus vel maxime soluta! Labore, dolorem adipisci! Repudiandae velit officia ratione rerum accusantium nulla voluptatum molestiae blanditiis sequi tempora. Doloremque in voluptates aliquid voluptatibus vero quis ipsam, voluptate voluptas numquam. Temporibus, officiis tenetur totam earum architecto, recusandae suscipit delectus, id consequuntur asperiores culpa deserunt nobis odit quidem magnam? Quod doloribus iste saepe sapiente id.',
    },
    {
        id: '6',
        image: Feed6,
        name: 'feed name 6',
        category: 'business',
        like: <SlLike size={20}/>,
        dislike: <SlDislike size={20}/>,
        comment: <AiOutlineComment size={20}/>,
        share: <FaShare size={20}/>,
        paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloribus, maiores ullam recusandae pariatur quisquam corporis doloremque aperiam non repellat iste eius quod quasi minima beatae repellendus reiciendis officia est nisi quia vel impedit perferendis temporibus. Cum vitae sapiente quis alias adipisci obcaecati omnis, hic quae possimus vel maxime soluta! Labore, dolorem adipisci! Repudiandae velit officia ratione rerum accusantium nulla voluptatum molestiae blanditiis sequi tempora. Doloremque in voluptates aliquid voluptatibus vero quis ipsam, voluptate voluptas numquam. Temporibus, officiis tenetur totam earum architecto, recusandae suscipit delectus, id consequuntur asperiores culpa deserunt nobis odit quidem magnam? Quod doloribus iste saepe sapiente id.',
      },
    {
        id: '7',
        image: Feed7,
        name: 'feed name 7',
        category: 'business',
        like: <SlLike size={20}/>,
        dislike: <SlDislike size={20}/>,
        comment: <AiOutlineComment size={20}/>,
        share: <FaShare size={20}/>,
        paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloribus, maiores ullam recusandae pariatur quisquam corporis doloremque aperiam non repellat iste eius quod quasi minima beatae repellendus reiciendis officia est nisi quia vel impedit perferendis temporibus. Cum vitae sapiente quis alias adipisci obcaecati omnis, hic quae possimus vel maxime soluta! Labore, dolorem adipisci! Repudiandae velit officia ratione rerum accusantium nulla voluptatum molestiae blanditiis sequi tempora. Doloremque in voluptates aliquid voluptatibus vero quis ipsam, voluptate voluptas numquam. Temporibus, officiis tenetur totam earum architecto, recusandae suscipit delectus, id consequuntur asperiores culpa deserunt nobis odit quidem magnam? Quod doloribus iste saepe sapiente id.',
      },
      {
      id: '8',
      image: Feed8,
      name: 'feed name 8',
      category: 'world',
      like: <SlLike size={20}/>,
      dislike: <SlDislike size={20}/>,
      comment: <AiOutlineComment size={20}/>,
      share: <FaShare size={20}/>,
      paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloribus, maiores ullam recusandae pariatur quisquam corporis doloremque aperiam non repellat iste eius quod quasi minima beatae repellendus reiciendis officia est nisi quia vel impedit perferendis temporibus. Cum vitae sapiente quis alias adipisci obcaecati omnis, hic quae possimus vel maxime soluta! Labore, dolorem adipisci! Repudiandae velit officia ratione rerum accusantium nulla voluptatum molestiae blanditiis sequi tempora. Doloremque in voluptates aliquid voluptatibus vero quis ipsam, voluptate voluptas numquam. Temporibus, officiis tenetur totam earum architecto, recusandae suscipit delectus, id consequuntur asperiores culpa deserunt nobis odit quidem magnam? Quod doloribus iste saepe sapiente id.',
    },
    {
      id: '9',
      image: Feed9,
      name: 'feed name 9',
      category: 'local',
      like: <SlLike size={20}/>,
      dislike: <SlDislike size={20}/>,
      comment: <AiOutlineComment size={20}/>,
      share: <FaShare size={20}/>,
      paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloribus, maiores ullam recusandae pariatur quisquam corporis doloremque aperiam non repellat iste eius quod quasi minima beatae repellendus reiciendis officia est nisi quia vel impedit perferendis temporibus. Cum vitae sapiente quis alias adipisci obcaecati omnis, hic quae possimus vel maxime soluta! Labore, dolorem adipisci! Repudiandae velit officia ratione rerum accusantium nulla voluptatum molestiae blanditiis sequi tempora. Doloremque in voluptates aliquid voluptatibus vero quis ipsam, voluptate voluptas numquam. Temporibus, officiis tenetur totam earum architecto, recusandae suscipit delectus, id consequuntur asperiores culpa deserunt nobis odit quidem magnam? Quod doloribus iste saepe sapiente id.',
    },
  ];
  
  // feed Navigation
  export const feedNav = [
    {
      name: 'all',
    },
    {
      name: 'sports',
    },
    {
      name: 'business',
    },
    {
      name: 'local',
    },
    {
      name: 'world',
    },
  ];
  
  // skill
  export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
        image: SkillImg4,
    },
    {
        image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },
];  

// reports
export const reports = [
  {
    authorImg: reportAuthorImg1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
    reportImg: reportImg1
  },
  {
    authorImg: reportAuthorImg2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
    reportImg: reportImg2
  },
  {
    authorImg: reportAuthorImg3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
    reportImg: reportImg3
  },
];

  // services
  export const services = [
    {
      icon: <FiLayout />,
      name: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiSettings />,
      name: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiPenTool />,
      name: 'Branding',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiTag />,
      name: 'SEO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
  ];
  
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at hello@youremail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Bucharest, Romania',
      description: 'Serving clients worldwide',
    },
  ];

  // login and signup
  export const social = [
    {
      icon: <FiYoutube />,
      href: '',
    },
    {
      icon: <FiInstagram />,
      href: '',
    },
    {
        icon: <FiGithub />,
      href: '',
    },
    {
      icon: <FiDribbble />,
      href: '',
    },
  ];
  
  // companies
  export const brands = [
    {
      img: FreelancerBrandIcon,
      href: '',
    },
    {
      img: UpworkBrandIcon,
      href: '',
    },
    {
      img: FiverBrandIcon,
      href: '',
    },
    {
      img: BehanceBrandIcon,
      href: '',
    },
    {
      img: DribbbleBrandIcon,
      href: '',
    },
  ];

