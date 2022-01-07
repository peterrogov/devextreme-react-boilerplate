import creditsText from './text/credits.md';
import introText from './text/intro.md';
import licenseText from './text/license.md';
import overviewText from './text/overview.md';

const mainContent = {
    intro: introText,
    sections: [
        {
            title: 'Overview',
            content: overviewText,
        },
        {
            title: 'License',
            content: licenseText,
        },
        {
            title: 'Credits',
            content: creditsText,
        },
    ],
};

export default mainContent;
