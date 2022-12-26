import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [bollywood, setBollywood] = useState([
    {
      Title:
        "Crowd chants Rohit Shetty's name as he passionately defends Bollywood: 'Ek saal kharab gaya aur aap palti maar rahe ho?'",
      CategoryName: "Bollywood",
      PublishedDate: "Dec 12 2022",
      ImageAsset:"https://images.hindustantimes.com/img/2022/12/22/550x309/rohit_shetty_1671696839607_1671696839710_1671696839710.jpg",
      BlogContent:
        "Rohit Shetty listed all the great movies that Bollywood had offered the country over the years during a recent panel discussion.",
      Likes: "100",
    },
    {
      Title: " Jaideep Ahlawat on Saif Ali Khan: 'Nawaabi unke khoon me hai'",
      CategoryName: "Bollywood",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/12/22/550x309/jaideepahlawat_1671693403457_1671693403774_1671693403774.jpg",
      BlogContent:
        "Jaideep Ahlawat says Saif Ali Khan has royalty in his blood, and recalls how Kareena Kapoor helped him calm down on sets of The Devotion Of Suspect X. ",
      Likes: "700",
    },
    {
      Title:
        " Twitter isn't impressed with Jhoome Jo Pathaan: ‘Tom Cruise is doing stunts at 60, SRK is making cringe content at 57'",
      CategoryName: "Bollywood",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/12/22/550x309/jhoome_jo_pathaan_1671704987815_1671704987933_1671704987933.jpeg",
      BlogContent:
        "Fans do not seem impressed with the latest Pathaan song, Jhoome Jo Pathaan. Neither the music, the lyrics, nor the choreography seem to have worked in the song's favour",
    },
    {
      Title:
        " Cirkus box office day 1 prediction: Ranveer Singh starrer to receive a lukewarm response; may NOT hit double-digit numbers",
      CategoryName: "Bollywood",
      PublishedDate: "Dec 9 2022",
      ImageAsset:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/12/Ranveer-57.png?impolicy=Medium_Widthonly&w=800",
      BlogContent:
        "Cirkus: Ranveer Singh, Jacqueline Fernandez, Pooja Hegde starrer directed by Rohit Shetty has hit the screens. Here's its box office prediction.",
      Likes: "600",
    },
    {
      Title:
        " Almost Pyaar With DJ Mohabbat teaser: Anurag Kashyap brings a musical love story with Amit Trivedi. Watch",
      CategoryName: "Bollywood",
      PublishedDate: "Dec 9 2022",
      ImageAsset:
      "https://images.hindustantimes.com/img/2022/12/22/550x309/almost_pyaar_with_DJ_mohabbat_1671699197384_1671699197555_1671699197555.png",
      BlogContent:
        "Anurag Kashyap has shared the teaser for his next film, Almost Pyaar With DJ Mohabbat. It stars Alaya F with Karan Mehta as the leads.",
      Likes: "1000",
    },
  ]);

  const [technology, setTechnology] = useState([
    {
      Title:
        " Ukraine to launch an NFT collection depicting Russian-Ukrainian war",
      CategoryName: "Technology",
      PublishedDate: "Dec 9 2022",
      ImageAsset:
        "https://images.indianexpress.com/2022/03/ezgif.com-gif-maker-1-1.jpg",
      BlogContent:
        "Alex Bornyakov said each NFT art would represent a story from the war. Every piece of art would be backed with a reliable news source. ",
      Likes: "800",
    },
    {
      Title:
        " Apple’s new A16 chip could be exclusive to the high-end iPhone 14 Pro models",
      CategoryName: "Technology",
      PublishedDate: "Dec 9 2022",
      ImageAsset:
        "https://images.indianexpress.com/2022/03/iphone-14-a16-chip-featured.jpg",
      BlogContent:
        "According to analyst Ming-Chi Kuo the higher-end iPhone 14 Pro and Pro Max will feature the new A16 chip, while the other variants come with A15.",
      Likes: "650",
    },
    {
      Title:
        " Brazil Gets Crypto Laws, Industry Players Get 180 Days to Comply: Details",
      CategoryName: "Technology",
      PublishedDate: "Dec 9 2022",
      ImageAsset:
        "https://i.gadgets360cdn.com/large/brazil_bitcoin_unsplash_ewan_kennedy_1635409953324.jpg?downsize=950:*",
      BlogContent:
        "Brazil is likely to get a new, internal committee that would maintain an oversight on all the crypto activities being processed in the country..",
      Likes: "700",
    },
    {
      Title:
        " Apple Event on March 8: Check out deals and offers on iPhone 13, iPhone 12 and others",
      CategoryName: "Technology",
      PublishedDate: "Dec 8 2022",
      ImageAsset:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUJa1e.img?h=808&w=1438&m=6&q=60&o=f&l=f",
      BlogContent:
        "The iPhone SE 2 is currently available on the Apple India website for Rs 39,900 for the base 64GB storage variant and Rs 44,900 for the 128GB storage model. Customers can pick from three different colours: black, red, or white.",
      Likes: "900",
    },
    {
      Title:
        " Oppo Reno 9, Reno 9 Pro, Find N2 Flip Being Tested in India, May Launch in Q1 2023: Report",
      CategoryName: "Technology",
      PublishedDate: "Dec 9 2022",
      ImageAsset: "https://i.gadgets360cdn.com/large/oppo_find_n2_flip_weibo_1671001804340.jpg?downsize=950:*",
      BlogContent:
        "Oppo is expected to unveil the launch details in the coming days. ",
      Likes: "422",
    },
  ]);

  const [hollywood, setHollywood] = useState([
    {
      Title:
        " The Batman director Matt Reeves talks about including Robin in sequel: 'There may be a really interesting story'",
      CategoryName: "Hollywood",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/11/550x309/Batman_Robin_1647009013654_1647009026643.jpeg",
      BlogContent:
        " The Batman director Matt Reeves has opened up about the possibility of including the superhero's sidekick Robin in the film's sequel. ",
      Likes: "800",
    },
    {
      Title:
        " The Banshees of Inisherin movie review: Comedy never hurt this good",
      CategoryName: "Hollywood",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/12/15/550x309/banshees_of_inisherin_review_1671088142107_1671088142281_1671088142281.webp",
      BlogContent:
        " The Banshees of Inisherin movie review: Colin Farrell, Brendan Gleeson, Kerry Condon and Barry Keoghan round up an excellent cast in this work of ferocious wisdom and wit.",
      Likes: "800",
    },
    {
      Title:
        "Tom Cruise attempts his 'most dangerous stunt' as he jumps off cliff with motorcycle for Mission Impossible 7. Watch",
      CategoryName: "Hollywood",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/12/20/550x309/Tom_Cruise_1671510084343_1671510103764_1671510103764.jpg",
      BlogContent:
        "BTS footage shows Tom Cruise preparing for what he calls his ‘most dangerous stunt ever’ – jumping off of a cliff with a motorcycle without any harness for Mission Impossible 7.",
      Likes: "2k",
    },
    {
      Title: " Henry Cavill shares note as DC cancels Superman's return after Wonder Woman 3",
      CategoryName: "Hollywood",
      PublishedDate: "Dec 12 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/12/15/550x309/henry-cavill_1671076492717_1671076492856_1671076492856.jpg",
      BlogContent:
        "Henry Cavill has announced that he will not be returning as Superman in the Man of Steel sequel. He had a meeting with James Gunn and Peter Safran.",
      Likes: "800",
    },
    {
      Title:
        "Avatar The Way of Water passes $600 million at the global box office, here's how much India contributed",
      CategoryName: "Hollywood",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/12/23/550x309/avatar_2_box_office_1671354214454_1671775957106_1671775957106.jpeg",
      BlogContent:
        "In the US the film has grossed $183 million at the box office, with Indian markets contributing at $26.5 million at the midweek pull."
    },
  ]);

  const [fitness, setFitness] = useState([
    {
      Title: " Netflix partners with Nike Training Club to bring exercise, fitness content to OTT platform: Everything to know",
      CategoryName: "Fitness",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "https://www.financialexpress.com/wp-content/uploads/2022/10/netflix-final.jpg",
      BlogContent:
        "In a partnership between Netflix and Nike Training Club, fitness content is being brought to the video streaming platform",
      Likes: "800",
    },
    {
      Title:
        "How Is Technology Revolutionising the Fitness Industry In India?",
      CategoryName: "Fitness",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://assets.entrepreneur.com/content/3x2/2000/1671781557-Myproject-1204.jpg?auto=webp&quality=95&crop=16:9&width=675",
      BlogContent:
        "Despite the pandemic being one of the key causes of this unanticipated increase in health-conscious people, other elements profoundly influenced India's fitness industry",
      Likes: "500",
    },
    {
      Title:
        " 6 Expert Tips For Setting Realistic Fitness Goals",
      CategoryName: "Fitness",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/12/fitness_goals.jpeg.jpg",
      BlogContent:
        "“Goal setting is a simple yet very powerful sport psychology tool,” says Joseph Galasso, Psy.D., a sports psychologist at Baker Street Behavioral Health in New Jersey. “Goal setting helps you improve motivation and commitment, stay focused on what to accomplish and track your performance,” he adds."
    },
    {
      Title:
        " Study links shift work to poorer working memory, slower mental processing",
      CategoryName: "Fitness",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/13/550x309/_b446d806-fe5e-11ea-a5cd-623ad1e030ac_1647167149802.jpg",
      BlogContent:
        "A new study links shift work to serious health issues as a result of the internal body clock (circadian rhythm) being out of step with the normal light-dark cycle. These include sleep disorders, cardiovascular disease, obesity, diabetes, mood disorders, and substance abuse.",
      Likes: "1000",
    },
    {
      Title: " Shilpa Shetty Fitness: Health And Wellness Tips From The ‘Mindful Yogi’",
      CategoryName: "Fitness",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "https://www.boldsky.com/img/2022/12/xshilpashettyfitness-1671735351.jpg.pagespeed.ic.4UHQEcGD0A.jpg",
      BlogContent:
        "Shilpa Shetty is the OG Health Girl in Bollywood. Even before 'fitness' became a must-have aesthetic for all the celebs, Shilpa Shetty have been doing her bit and popularising yoga among the Indian viewers.",
      Likes: "800",
    },
  ]);

  const [food, setFood] = useState([
    {
      Title:
        " You want to know the worst food experiments this year? We give you 10",
      CategoryName: "Food",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "https://images.indianexpress.com/2022/12/Untitled-design-38-1.jpg",
      BlogContent:
        "As people donned their aprons and thought up unthinkable food experiments with humble ingredients, we bring you the most bizarre foods of 2022.",
      Likes: "500",
    },
    {
      Title: "Cabinet approves distribution of free food grain till December 2023",
      CategoryName: "Food",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "Cabinet approves distribution of free food grain till December 2023",
      BlogContent:
        "Cabinet on Friday approved distribution of free foodgrain for one more year. Commerce minister Piyush Goyal said that the centre will bear the entire cost of ₹2 lakh crore. ",
      Likes: "1K",
    },
    {
      Title:
        "India replaces COVID-era free food programme with cheaper scheme",
      CategoryName: "Food",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "https://www.reuters.com/resizer/i3AGRUGOXXDqzjbG62HUedmehjA=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NGNXFMOVS5P7JLNGUCDT7HBUIU.jpg",
      BlogContent:
        "NEW DELHI, Dec 23 (Reuters) - India will end its COVID-19 era free food programme on Dec. 31 and replace it with a cheaper programme that will save the government nearly $20 billion in the next 12 months.",
      Likes: "400",
    },
    {
      Title:
        " Wait, What? Bizarre 'Liquid Pie' Made With Cola, Butter And Sugar Disgusts Twitter",
      CategoryName: "Food",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "https://c.ndtvimg.com/2022-12/4bma5bco_liquid-pie_625x300_23_December_22.jpg",
      BlogContent:
        "Recently, a bizarre food video of a liquid pie has left the internet disgusted. Made by mixing cola drinks, butter and sugar - this pie recipe surely has no takers.",
      Likes: "1K+",
    },
    {
      Title:
        " British Food Blogger Cooks Rava Idli With Sambhar, Leaves Desi Netizens Impressed",
      CategoryName: "Food",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "https://images.news18.com/ibnlive/uploads/2022/12/idli-16717952973x2.png?impolicy=website&width=510&height=356",
      BlogContent:
        "The UK chef’s incredible rava idli and the sambhar dish went viral and received over 2.5 million views. Social media users were quite impressed by his cooking skills.",
      Likes: "708K",
    },
  ]);

  return (
    <BlogContext.Provider
      value={{
        value1: [bollywood, setBollywood],
        value2: [hollywood, setHollywood],
        value3: [technology, setTechnology],
        value4: [fitness, setFitness],
        value5: [food, setFood],
      }}
    >
      {" "}
      {props.children}{" "}
    </BlogContext.Provider>
  );
};