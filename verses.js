const VERSES = [
  {
    "ref": "John 3:16",
    "text": "For this is how God loved the world: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life."
  },
  {
    "ref": "Jeremiah 29:11",
    "text": "\"For I know the plans I have for you,\" says the Lord. \"They are plans for good and not for disaster, to give you a future and a hope.\""
  },
  {
    "ref": "Philippians 4:13",
    "text": "For I can do everything through Christ, who gives me strength."
  },
  {
    "ref": "Psalm 23:1",
    "text": "The Lord is my shepherd; I have all that I need."
  },
  {
    "ref": "Proverbs 3:5-6",
    "text": "Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take."
  },
  {
    "ref": "Romans 8:28",
    "text": "And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them."
  },
  {
    "ref": "Genesis 1:1",
    "text": "In the beginning God created the heavens and the earth."
  },
  {
    "ref": "Joshua 1:9",
    "text": "This is my command\u2014be strong and courageous! Do not be afraid or discouraged. For the Lord your God is with you wherever you go."
  },
  {
    "ref": "Isaiah 40:31",
    "text": "But those who trust in the Lord will find new strength. They will soar high on wings like eagles. They will run and not grow weary. They will walk and not faint."
  },
  {
    "ref": "Romans 12:2",
    "text": "Don't copy the behavior and customs of this world, but let God transform you into a new person by changing the way you think."
  },
  {
    "ref": "Psalm 46:10",
    "text": "\"Be still, and know that I am God! I will be honored by every nation. I will be honored throughout the world.\""
  },
  {
    "ref": "1 Corinthians 13:4-7",
    "text": "Love is patient and kind. Love is not jealous or boastful or proud or rude. It does not demand its own way. It is not irritable, and it keeps no record of being wronged."
  },
  {
    "ref": "Galatians 5:22-23",
    "text": "But the Holy Spirit produces this kind of fruit in our lives: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control."
  },
  {
    "ref": "Matthew 6:33",
    "text": "Seek the Kingdom of God above all else, and live righteously, and he will give you everything you need."
  },
  {
    "ref": "2 Timothy 1:7",
    "text": "For God has not given us a spirit of fear and timidity, but of power, love, and self-discipline."
  },
  {
    "ref": "Ephesians 2:8-9",
    "text": "God saved you by his grace when you believed. And you can't take credit for this; it is a gift from God. Salvation is not a reward for the good things we have done."
  },
  {
    "ref": "Psalm 119:105",
    "text": "Your word is a lamp to guide my feet and a light for my path."
  },
  {
    "ref": "Hebrews 11:1",
    "text": "Faith shows the reality of what we hope for; it is the evidence of things we cannot see."
  },
  {
    "ref": "1 Peter 5:7",
    "text": "Give all your worries and cares to God, for he cares about you."
  },
  {
    "ref": "Romans 3:23",
    "text": "For everyone has sinned; we all fall short of God's glorious standard."
  },
  {
    "ref": "Romans 6:23",
    "text": "For the wages of sin is death, but the free gift of God is eternal life through Christ Jesus our Lord."
  },
  {
    "ref": "Romans 5:8",
    "text": "But God showed his great love for us by sending Christ to die for us while we were still sinners."
  },
  {
    "ref": "Romans 10:9",
    "text": "If you openly declare that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved."
  },
  {
    "ref": "John 14:6",
    "text": "Jesus told him, \"I am the way, the truth, and the life. No one can come to the Father except through me.\""
  },
  {
    "ref": "Matthew 28:19-20",
    "text": "Therefore, go and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit."
  },
  {
    "ref": "Acts 1:8",
    "text": "But you will receive power when the Holy Spirit comes upon you. And you will be my witnesses, telling people about me everywhere."
  },
  {
    "ref": "Psalm 139:14",
    "text": "Thank you for making me so wonderfully complex! Your workmanship is marvelous\u2014how well I know it."
  },
  {
    "ref": "Philippians 4:6-7",
    "text": "Don't worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done."
  },
  {
    "ref": "Isaiah 41:10",
    "text": "Don't be afraid, for I am with you. Don't be discouraged, for I am your God. I will strengthen you and help you."
  },
  {
    "ref": "Psalm 37:4",
    "text": "Take delight in the Lord, and he will give you your heart's desires."
  },
  {
    "ref": "Proverbs 16:3",
    "text": "Commit your actions to the Lord, and your plans will succeed."
  },
  {
    "ref": "Psalm 118:24",
    "text": "This is the day the Lord has made. We will rejoice and be glad in it."
  },
  {
    "ref": "Hebrews 13:8",
    "text": "Jesus Christ is the same yesterday, today, and forever."
  },
  {
    "ref": "Matthew 11:28",
    "text": "Then Jesus said, \"Come to me, all of you who are weary and carry heavy burdens, and I will give you rest.\""
  },
  {
    "ref": "John 8:32",
    "text": "And you will know the truth, and the truth will set you free."
  },
  {
    "ref": "John 10:10",
    "text": "The thief's purpose is to steal and kill and destroy. My purpose is to give them a rich and satisfying life."
  },
  {
    "ref": "John 15:13",
    "text": "There is no greater love than to lay down one's life for one's friends."
  },
  {
    "ref": "1 John 4:19",
    "text": "We love each other because he loved us first."
  },
  {
    "ref": "1 John 1:9",
    "text": "But if we confess our sins to him, he is faithful and just to forgive us our sins and to cleanse us from all wickedness."
  },
  {
    "ref": "Revelation 3:20",
    "text": "\"Look! I stand at the door and knock. If you hear my voice and open the door, I will come in, and we will share a meal together as friends.\""
  },
  {
    "ref": "1 Corinthians 10:13",
    "text": "The temptations in your life are no different from what others experience. And God is faithful. He will not allow the temptation to be more than you can stand."
  },
  {
    "ref": "James 1:2-3",
    "text": "Dear brothers and sisters, when troubles of any kind come your way, consider it an opportunity for great joy."
  },
  {
    "ref": "James 1:5",
    "text": "If you need wisdom, ask our generous God, and he will give it to you. He will not rebuke you for asking."
  },
  {
    "ref": "James 4:7",
    "text": "So humble yourselves before God. Resist the devil, and he will flee from you."
  },
  {
    "ref": "Micah 6:8",
    "text": "No, O people, the Lord has told you what is good, and this is what he requires of you: to do what is right, to love mercy, and to walk humbly with your God."
  },
  {
    "ref": "Genesis 1:27",
    "text": "So God created human beings in his own image. In the image of God he created them; male and female he created them."
  },
  {
    "ref": "Exodus 14:14",
    "text": "The Lord himself will fight for you. Just stay calm."
  },
  {
    "ref": "Deuteronomy 6:5",
    "text": "And you must love the Lord your God with all your heart, all your soul, and all your strength."
  },
  {
    "ref": "Deuteronomy 31:6",
    "text": "So be strong and courageous! Do not be afraid and do not panic before them. For the Lord your God will personally go ahead of you."
  },
  {
    "ref": "Joshua 24:15",
    "text": "But as for me and my family, we will serve the Lord."
  },
  {
    "ref": "1 Samuel 16:7",
    "text": "The Lord doesn't see things the way you see them. People judge by outward appearance, but the Lord looks at the heart."
  },
  {
    "ref": "2 Chronicles 7:14",
    "text": "Then if my people who are called by my name will humble themselves and pray and seek my face and turn from their wicked ways, I will hear from heaven and will forgive their sins and restore their land."
  },
  {
    "ref": "Nehemiah 8:10",
    "text": "Don't be dejected and sad, for the joy of the Lord is your strength!"
  },
  {
    "ref": "Psalm 1:1",
    "text": "Oh, the joys of those who do not follow the advice of the wicked, or stand around with sinners, or join in with mockers."
  },
  {
    "ref": "Psalm 19:14",
    "text": "May the words of my mouth and the meditation of my heart be pleasing to you, O Lord, my rock and my redeemer."
  },
  {
    "ref": "Psalm 27:1",
    "text": "The Lord is my light and my salvation\u2014so why should I be afraid? The Lord is my fortress, protecting me from danger, so why should I tremble?"
  },
  {
    "ref": "Psalm 34:8",
    "text": "Taste and see that the Lord is good. Oh, the joys of those who take refuge in him!"
  },
  {
    "ref": "Psalm 46:1",
    "text": "God is our refuge and strength, always ready to help in times of trouble."
  },
  {
    "ref": "Psalm 51:10",
    "text": "Create in me a clean heart, O God. Renew a loyal spirit within me."
  },
  {
    "ref": "Psalm 56:3",
    "text": "But when I am afraid, I will put my trust in you."
  },
  {
    "ref": "Psalm 86:15",
    "text": "But you, O Lord, are a God of compassion and mercy, slow to get angry and filled with unfailing love and faithfulness."
  },
  {
    "ref": "Psalm 100:1-2",
    "text": "Shout with joy to the Lord, all the earth! Worship the Lord with gladness. Come before him, singing with joy."
  },
  {
    "ref": "Psalm 103:8",
    "text": "The Lord is compassionate and merciful, slow to get angry and filled with unfailing love."
  },
  {
    "ref": "Psalm 119:11",
    "text": "I have hidden your word in my heart, that I might not sin against you."
  },
  {
    "ref": "Psalm 121:1-2",
    "text": "I look up to the mountains\u2014does my help come from there? My help comes from the Lord, who made heaven and earth!"
  },
  {
    "ref": "Psalm 136:1",
    "text": "Give thanks to the Lord, for he is good! His faithful love endures forever."
  },
  {
    "ref": "Psalm 147:5",
    "text": "How great is our Lord! His power is absolute! His understanding is beyond comprehension!"
  },
  {
    "ref": "Proverbs 4:23",
    "text": "Guard your heart above all else, for it determines the course of your life."
  },
  {
    "ref": "Proverbs 15:1",
    "text": "A gentle answer deflects anger, but harsh words make tempers flare."
  },
  {
    "ref": "Proverbs 16:9",
    "text": "We can make our plans, but the Lord determines our steps."
  },
  {
    "ref": "Proverbs 17:17",
    "text": "A friend is always loyal, and a brother is born to help in time of need."
  },
  {
    "ref": "Proverbs 18:10",
    "text": "The name of the Lord is a strong fortress; the godly run to him and are safe."
  },
  {
    "ref": "Proverbs 27:17",
    "text": "As iron sharpens iron, so a friend sharpens a friend."
  },
  {
    "ref": "Ecclesiastes 3:1",
    "text": "For everything there is a season, a time for every activity under heaven."
  },
  {
    "ref": "Ecclesiastes 4:9-10",
    "text": "Two people are better off than one, for they can help each other succeed. If one person falls, the other can reach out and help."
  },
  {
    "ref": "Isaiah 6:8",
    "text": "Then I heard the Lord asking, \"Whom should I send as a messenger to this people? Who will go for us?\" I said, \"Here I am. Send me.\""
  },
  {
    "ref": "Isaiah 9:6",
    "text": "For a child is born to us, a son is given to us. The government will rest on his shoulders. And he will be called: Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."
  },
  {
    "ref": "Isaiah 26:3",
    "text": "You will keep in perfect peace all who trust in you, all whose thoughts are fixed on you!"
  },
  {
    "ref": "Isaiah 40:29",
    "text": "He gives power to the weak and strength to the powerless."
  },
  {
    "ref": "Isaiah 43:2",
    "text": "When you go through deep waters, I will be with you. When you go through rivers of difficulty, you will not drown."
  },
  {
    "ref": "Isaiah 53:5",
    "text": "But he was pierced for our rebellion, crushed for our sins. He was beaten so we could be whole. He was whipped so we could be healed."
  },
  {
    "ref": "Isaiah 55:8-9",
    "text": "\"My thoughts are nothing like your thoughts,\" says the Lord. \"And my ways are far beyond anything you could imagine.\""
  },
  {
    "ref": "Jeremiah 17:7",
    "text": "But blessed are those who trust in the Lord and have made the Lord their hope and confidence."
  },
  {
    "ref": "Jeremiah 33:3",
    "text": "Ask me and I will tell you remarkable secrets you do not know about things to come."
  },
  {
    "ref": "Lamentations 3:22-23",
    "text": "The faithful love of the Lord never ends! His mercies never cease. Great is his faithfulness; his mercies begin afresh each morning."
  },
  {
    "ref": "Nahum 1:7",
    "text": "The Lord is good, a strong refuge when trouble comes. He concerns himself with those who trust in him."
  },
  {
    "ref": "Zephaniah 3:17",
    "text": "For the Lord your God is living among you. He is a mighty savior. He will take delight in you with gladness. With his love, he will calm all your fears. He will rejoice over you with joyful songs."
  },
  {
    "ref": "Matthew 5:14",
    "text": "You are the light of the world\u2014like a city on a hilltop that cannot be hidden."
  },
  {
    "ref": "Matthew 5:16",
    "text": "In the same way, let your good deeds shine out for all to see, so that everyone will praise your heavenly Father."
  },
  {
    "ref": "Matthew 6:34",
    "text": "So don't worry about tomorrow, for tomorrow will bring its own worries. Today's trouble is enough for today."
  },
  {
    "ref": "Matthew 7:7",
    "text": "Keep on asking, and you will receive what you ask for. Keep on seeking, and you will find. Keep on knocking, and the door will be opened to you."
  },
  {
    "ref": "Matthew 18:20",
    "text": "For where two or three gather together as my followers, I am there among them."
  },
  {
    "ref": "Matthew 19:26",
    "text": "Jesus looked at them intently and said, \"Humanly speaking, it is impossible. But with God everything is possible.\""
  },
  {
    "ref": "Matthew 22:37-39",
    "text": "Jesus replied, \"'You must love the Lord your God with all your heart, all your soul, and all your mind.' This is the first and greatest commandment. A second is equally important: 'Love your neighbor as yourself.'\""
  },
  {
    "ref": "Mark 10:27",
    "text": "Jesus looked at them intently and said, \"Humanly speaking, it is impossible. But not with God. Everything is possible with God.\""
  },
  {
    "ref": "Mark 12:30",
    "text": "And you must love the Lord your God with all your heart, all your soul, all your mind, and all your strength."
  },
  {
    "ref": "Luke 1:37",
    "text": "For the word of God will never fail."
  },
  {
    "ref": "Luke 6:31",
    "text": "Do to others as you would like them to do to you."
  },
  {
    "ref": "Luke 10:27",
    "text": "The man answered, \"'You must love the Lord your God with all your heart, all your soul, all your strength, and all your mind.' And, 'Love your neighbor as yourself.'\""
  },
  {
    "ref": "Luke 18:27",
    "text": "He replied, \"What is impossible for people is possible with God.\""
  },
  {
    "ref": "John 1:1",
    "text": "In the beginning the Word already existed. The Word was with God, and the Word was God."
  },
  {
    "ref": "John 1:14",
    "text": "So the Word became human and made his home among us. He was full of unfailing love and faithfulness. And we have seen his glory, the glory of the Father's one and only Son."
  },
  {
    "ref": "John 3:17",
    "text": "God sent his Son into the world not to judge the world, but to save the world through him."
  },
  {
    "ref": "John 8:12",
    "text": "Jesus spoke to the people once more and said, \"I am the light of the world. If you follow me, you won't have to walk in darkness, because you will have the light that leads to life.\""
  },
  {
    "ref": "John 11:25",
    "text": "Jesus told her, \"I am the resurrection and the life. Anyone who believes in me will live, even after dying.\""
  },
  {
    "ref": "John 13:34-35",
    "text": "So now I am giving you a new commandment: Love each other. Just as I have loved you, you should love each other."
  },
  {
    "ref": "John 14:27",
    "text": "I am leaving you with a gift\u2014peace of mind and heart. And the peace I give is a gift the world cannot give. So don't be troubled or afraid."
  },
  {
    "ref": "John 15:5",
    "text": "Yes, I am the vine; you are the branches. Those who remain in me, and I in them, will produce much fruit. For apart from me you can do nothing."
  },
  {
    "ref": "John 16:33",
    "text": "I have told you all this so that you may have peace in me. Here on earth you will have many trials and sorrows. But take heart, because I have overcome the world."
  },
  {
    "ref": "Acts 2:38",
    "text": "Peter replied, \"Each of you must repent of your sins and turn to God, and be baptized in the name of Jesus Christ for the forgiveness of your sins. Then you will receive the gift of the Holy Spirit.\""
  },
  {
    "ref": "Acts 4:12",
    "text": "There is salvation in no one else! God has given no other name under heaven by which we must be saved."
  },
  {
    "ref": "Acts 16:31",
    "text": "They replied, \"Believe in the Lord Jesus and you will be saved, along with everyone in your household.\""
  },
  {
    "ref": "Romans 1:16",
    "text": "For I am not ashamed of this Good News about Christ. It is the power of God at work, saving everyone who believes."
  },
  {
    "ref": "Romans 8:1",
    "text": "So now there is no condemnation for those who belong to Christ Jesus."
  },
  {
    "ref": "Romans 8:31",
    "text": "What shall we say about such wonderful things as these? If God is for us, who can ever be against us?"
  },
  {
    "ref": "Romans 8:38-39",
    "text": "And I am convinced that nothing can ever separate us from God's love. Neither death nor life, neither angels nor demons, neither our fears for today nor our worries about tomorrow\u2014not even the powers of hell can separate us from God's love."
  },
  {
    "ref": "Romans 12:12",
    "text": "Rejoice in our confident hope. Be patient in trouble, and keep on praying."
  },
  {
    "ref": "Romans 12:21",
    "text": "Don't let evil conquer you, but conquer evil by doing good."
  },
  {
    "ref": "Romans 15:13",
    "text": "I pray that God, the source of hope, will fill you completely with joy and peace because you trust in him."
  },
  {
    "ref": "1 Corinthians 13:13",
    "text": "Three things will last forever\u2014faith, hope, and love\u2014and the greatest of these is love."
  },
  {
    "ref": "1 Corinthians 16:14",
    "text": "And do everything with love."
  },
  {
    "ref": "2 Corinthians 5:17",
    "text": "This means that anyone who belongs to Christ has become a new person. The old life is gone; a new life has begun!"
  },
  {
    "ref": "2 Corinthians 5:21",
    "text": "For God made Christ, who never sinned, to be the offering for our sin, so that we could be made right with God through Christ."
  },
  {
    "ref": "2 Corinthians 9:7",
    "text": "You must each decide in your heart how much to give. And don't give reluctantly or in response to pressure. \"For God loves a person who gives cheerfully.\""
  },
  {
    "ref": "2 Corinthians 12:9",
    "text": "Each time he said, \"My grace is all you need. My power works best in weakness.\""
  },
  {
    "ref": "Galatians 2:20",
    "text": "My old self has been crucified with Christ. It is no longer I who live, but Christ lives in me."
  },
  {
    "ref": "Galatians 6:9",
    "text": "So let's not get tired of doing what is good. At just the right time we will reap a harvest of blessing if we don't give up."
  },
  {
    "ref": "Ephesians 2:10",
    "text": "For we are God's masterpiece. He has created us anew in Christ Jesus, so we can do the good things he planned for us long ago."
  },
  {
    "ref": "Ephesians 4:32",
    "text": "Instead, be kind to each other, tenderhearted, forgiving one another, just as God through Christ has forgiven you."
  },
  {
    "ref": "Ephesians 6:10-11",
    "text": "A final word: Be strong in the Lord and in his mighty power. Put on all of God's armor so that you will be able to stand firm against all strategies of the devil."
  },
  {
    "ref": "Philippians 1:6",
    "text": "And I am certain that God, who began the good work within you, will continue his work until it is finally finished on the day when Christ Jesus returns."
  },
  {
    "ref": "Philippians 2:3",
    "text": "Don't be selfish; don't try to impress others. Be humble, thinking of others as better than yourselves."
  },
  {
    "ref": "Philippians 4:8",
    "text": "And now, dear brothers and sisters, one final thing. Fix your thoughts on what is true, and honorable, and right, and pure, and lovely, and admirable."
  },
  {
    "ref": "Philippians 4:19",
    "text": "And this same God who takes care of me will supply all your needs from his glorious riches, which have been given to us in Christ Jesus."
  },
  {
    "ref": "Colossians 3:12",
    "text": "Since God chose you to be the holy people he loves, you must clothe yourselves with tenderhearted mercy, kindness, humility, gentleness, and patience."
  },
  {
    "ref": "Colossians 3:23",
    "text": "Work willingly at whatever you do, as though you were working for the Lord rather than for people."
  },
  {
    "ref": "1 Thessalonians 5:16-18",
    "text": "Always be joyful. Never stop praying. Be thankful in all circumstances, for this is God's will for you who belong to Christ Jesus."
  },
  {
    "ref": "2 Timothy 3:16",
    "text": "All Scripture is inspired by God and is useful to teach us what is true and to make us realize what is wrong in our lives."
  },
  {
    "ref": "Hebrews 4:12",
    "text": "For the word of God is alive and powerful. It is sharper than the sharpest two-edged sword, cutting between soul and spirit, between joint and marrow."
  },
  {
    "ref": "Hebrews 4:16",
    "text": "So let us come boldly to the throne of our gracious God. There we will receive his mercy, and we will find grace to help us when we need it most."
  },
  {
    "ref": "Hebrews 11:6",
    "text": "And it is impossible to please God without faith. Anyone who wants to come to him must believe that God exists and that he rewards those who sincerely seek him."
  },
  {
    "ref": "Hebrews 12:1-2",
    "text": "Therefore, since we are surrounded by such a huge crowd of witnesses to the life of faith, let us strip off every weight that slows us down."
  },
  {
    "ref": "James 1:17",
    "text": "Whatever is good and perfect is a gift coming down to us from God our Father, who created all the lights in the heavens."
  },
  {
    "ref": "James 1:19",
    "text": "Understand this, my dear brothers and sisters: You must all be quick to listen, slow to speak, and slow to get angry."
  },
  {
    "ref": "James 1:22",
    "text": "But don't just listen to God's word. You must do what it says. Otherwise, you are only fooling yourselves."
  },
  {
    "ref": "James 4:8",
    "text": "Come close to God, and God will come close to you. Wash your hands, you sinners; purify your hearts, for your loyalty is divided between God and the world."
  },
  {
    "ref": "1 John 3:1",
    "text": "See how very much our Father loves us, for he calls us his children, and that is what we are!"
  },
  {
    "ref": "1 John 4:7-8",
    "text": "Dear friends, let us continue to love one another, for love comes from God. Anyone who loves is a child of God and knows God. But anyone who does not love does not know God, for God is love."
  },
  {
    "ref": "1 John 5:14",
    "text": "And we are confident that he hears us whenever we ask for anything that pleases him."
  },
  {
    "ref": "Revelation 21:4",
    "text": "He will wipe every tear from their eyes, and there will be no more death or sorrow or crying or pain. All these things are gone forever."
  },
  {
    "ref": "Genesis 1:3",
    "text": "Then God said, \"Let there be light,\" and there was light."
  },
  {
    "ref": "Genesis 2:7",
    "text": "Then the Lord God formed the man from the dust of the ground. He breathed the breath of life into the man's nostrils, and the man became a living person."
  },
  {
    "ref": "Genesis 3:15",
    "text": "And I will cause hostility between you and the woman, and between your offspring and her offspring. He will strike your head, and you will strike his heel."
  },
  {
    "ref": "Genesis 12:1-3",
    "text": "The Lord had said to Abram, \"Leave your native country, your relatives, and your father's family, and go to the land that I will show you.\""
  },
  {
    "ref": "Genesis 15:6",
    "text": "And Abram believed the Lord, and the Lord counted him as righteous because of his faith."
  },
  {
    "ref": "Genesis 28:15",
    "text": "\"What is more, I am with you, and I will protect you wherever you go. One day I will bring you back to this land. I will not leave you until I have finished giving you everything I have promised you.\""
  },
  {
    "ref": "Genesis 50:20",
    "text": "You intended to harm me, but God intended it all for good. He brought me to this position so I could save the lives of many people."
  },
  {
    "ref": "Exodus 3:14",
    "text": "God replied to Moses, \"I AM WHO I AM. Say this to the people of Israel: I AM has sent me to you.\""
  },
  {
    "ref": "Exodus 15:2",
    "text": "The Lord is my strength and my song; he has given me victory. This is my God, and I will praise him\u2014my father's God, and I will exalt him!"
  },
  {
    "ref": "Exodus 20:3",
    "text": "You must not have any other god but me."
  },
  {
    "ref": "Exodus 33:14",
    "text": "The Lord replied, \"I will personally go with you, Moses, and I will give you rest\u2014everything will be fine for you.\""
  },
  {
    "ref": "Leviticus 19:18",
    "text": "Do not seek revenge or bear a grudge against a fellow Israelite, but love your neighbor as yourself. I am the Lord."
  },
  {
    "ref": "Numbers 6:24-26",
    "text": "'May the Lord bless you and protect you. May the Lord smile on you and be gracious to you. May the Lord show you his favor and give you his peace.'"
  },
  {
    "ref": "Deuteronomy 4:29",
    "text": "But from there you will search again for the Lord your God. And if you search for him with all your heart and soul, you will find him."
  },
  {
    "ref": "Deuteronomy 7:9",
    "text": "Understand, therefore, that the Lord your God is indeed the true God. He is the faithful God who keeps his covenant for a thousand generations and lavishes his unfailing love on those who love him and obey his commands."
  },
  {
    "ref": "Deuteronomy 30:19",
    "text": "Today I have given you the choice between life and death, between blessings and curses. Now I call on heaven and earth to witness the choice you make. Oh, that you would choose life, so that you and your descendants might live!"
  },
  {
    "ref": "Deuteronomy 32:4",
    "text": "He is the Rock; his deeds are perfect. Everything he does is just and fair. He is a faithful God who does no wrong; how just and upright he is!"
  },
  {
    "ref": "Ruth 1:16",
    "text": "But Ruth replied, \"Don't ask me to leave you and turn back. Wherever you go, I will go; wherever you live, I will live. Your people will be my people, and your God will be my God.\""
  },
  {
    "ref": "1 Samuel 2:2",
    "text": "No one is holy like the Lord! There is no one besides you; there is no Rock like our God."
  },
  {
    "ref": "1 Samuel 17:47",
    "text": "And everyone assembled here will know that the Lord rescues his people, but not with sword and spear. This is the Lord's battle, and he will give you to us!"
  },
  {
    "ref": "2 Samuel 22:31",
    "text": "God's way is perfect. All the Lord's promises prove true. He is a shield for all who look to him for protection."
  },
  {
    "ref": "1 Kings 8:56",
    "text": "Praise the Lord who has given rest to his people Israel, just as he promised. Not one word has failed of all the wonderful promises he gave through his servant Moses."
  },
  {
    "ref": "1 Chronicles 16:11",
    "text": "Search for the Lord and for his strength; continually seek him."
  },
  {
    "ref": "1 Chronicles 16:34",
    "text": "Give thanks to the Lord, for he is good! His faithful love endures forever."
  },
  {
    "ref": "2 Chronicles 20:12",
    "text": "We do not know what to do, but our eyes are on you."
  },
  {
    "ref": "Ezra 7:10",
    "text": "This was because Ezra had determined to study and obey the Law of the Lord and to teach those decrees and regulations to the people of Israel."
  },
  {
    "ref": "Job 19:25",
    "text": "But as for me, I know that my Redeemer lives, and he will stand upon the earth at last."
  },
  {
    "ref": "Job 42:2",
    "text": "\"I know that you can do anything, and no one can stop you.\""
  },
  {
    "ref": "Psalm 9:1",
    "text": "I will praise you, Lord, with all my heart; I will tell of all the marvelous things you have done."
  },
  {
    "ref": "Psalm 16:11",
    "text": "You will show me the way of life, granting me the joy of your presence and the pleasures of living with you forever."
  },
  {
    "ref": "Psalm 18:2",
    "text": "The Lord is my rock, my fortress, and my savior; my God is my rock, in whom I find protection. He is my shield, the power that saves me, and my place of safety."
  },
  {
    "ref": "Psalm 25:4-5",
    "text": "Show me the right path, O Lord; point out the road for me to follow. Lead me by your truth and teach me, for you are the God who saves me."
  },
  {
    "ref": "Psalm 28:7",
    "text": "The Lord is my strength and shield. I trust him with all my heart. He helps me, and my heart filled with joy. I burst out in songs of thanksgiving."
  },
  {
    "ref": "Psalm 31:24",
    "text": "So be strong and courageous, all you who put your hope in the Lord!"
  },
  {
    "ref": "Psalm 32:8",
    "text": "The Lord says, \"I will guide you along the best pathway for your life. I will advise you and watch over you.\""
  },
  {
    "ref": "Psalm 33:12",
    "text": "What joy for the nation whose God is the Lord, whose people he chose as his inheritance."
  },
  {
    "ref": "Psalm 34:18",
    "text": "The Lord is close to the brokenhearted; he rescues those whose spirits are crushed."
  },
  {
    "ref": "Psalm 37:5",
    "text": "Commit everything you do to the Lord. Trust him, and he will help you."
  },
  {
    "ref": "Psalm 40:1",
    "text": "I waited patiently for the Lord to help me, and he turned to me and heard my cry."
  },
  {
    "ref": "Psalm 62:8",
    "text": "O my people, trust in him at all times. Pour out your heart to him, for God is our refuge."
  },
  {
    "ref": "Psalm 63:1",
    "text": "O God, you are my God; I earnestly search for you. My soul thirsts for you, my whole body longs for you in this parched and weary land where there is no water."
  },
  {
    "ref": "Psalm 73:26",
    "text": "My health may fail, and my spirit may grow weak, but God remains the strength of my heart; he is mine forever."
  },
  {
    "ref": "Psalm 84:11",
    "text": "For the Lord God is our sun and our shield. He gives us grace and glory. The Lord will withhold no good thing from those who do what is right."
  },
  {
    "ref": "Psalm 91:1-2",
    "text": "Those who live in the shelter of the Most High will find rest in the shadow of the Almighty. This I declare about the Lord: He alone is my refuge, my place of safety; he is my God, and I trust him."
  },
  {
    "ref": "Psalm 91:11",
    "text": "For he will order his angels to protect you wherever you go."
  },
  {
    "ref": "Psalm 95:1",
    "text": "Come, let us sing to the Lord! Let us shout joyfully to the Rock of our salvation."
  },
  {
    "ref": "Psalm 103:12",
    "text": "He has removed our sins as far from us as the east is from the west."
  },
  {
    "ref": "Psalm 119:18",
    "text": "Open my eyes to see the wonderful truths in your instructions."
  },
  {
    "ref": "Psalm 127:1",
    "text": "Unless the Lord builds a house, the work of the builders is wasted. Unless the Lord protects a city, guarding it with sentries will do no good."
  },
  {
    "ref": "Psalm 138:8",
    "text": "The Lord will work out his plans for my life\u2014for your faithful love, O Lord, endures forever. Don't abandon me, for you made me."
  },
  {
    "ref": "Psalm 143:8",
    "text": "Let me hear of your unfailing love each morning, for I am trusting you. Show me where to walk, for I give myself to you."
  },
  {
    "ref": "Psalm 145:18",
    "text": "The Lord is close to all who call on him, yes, to all who call on him in truth."
  },
  {
    "ref": "Proverbs 3:9-10",
    "text": "Honor the Lord with your wealth and with the best part of everything you produce. Then he will fill your barns with grain, and your vats will overflow with good wine."
  },
  {
    "ref": "Proverbs 11:25",
    "text": "The generous will prosper; those who refresh others will themselves be refreshed."
  },
  {
    "ref": "Proverbs 14:12",
    "text": "There is a path before each person that seems right, but it ends in death."
  },
  {
    "ref": "Proverbs 16:18",
    "text": "Pride goes before destruction, and a haughty spirit before a fall."
  },
  {
    "ref": "Proverbs 19:21",
    "text": "You can make many plans, but the Lord's purpose will prevail."
  },
  {
    "ref": "Proverbs 22:6",
    "text": "Direct your children onto the right path, and when they are older, they will not leave it."
  },
  {
    "ref": "Proverbs 28:13",
    "text": "People who conceal their sins will not prosper, but if they confess and turn from them, they will receive mercy."
  },
  {
    "ref": "Proverbs 29:25",
    "text": "Fearing people is a dangerous trap, but trusting the Lord means safety."
  },
  {
    "ref": "Proverbs 31:30",
    "text": "Charm is deceptive, and beauty does not last; but a woman who fears the Lord will be greatly praised."
  },
  {
    "ref": "Isaiah 1:18",
    "text": "\"Come now, let's settle this,\" says the Lord. \"Though your sins are like scarlet, I will make them as white as snow.\""
  },
  {
    "ref": "Isaiah 12:2",
    "text": "See, God has come to save me. I will trust in him and not be afraid. The Lord God is my strength and my song; he has given me victory."
  },
  {
    "ref": "Isaiah 25:8",
    "text": "He will swallow up death forever! The Sovereign Lord will wipe away all tears."
  },
  {
    "ref": "Isaiah 30:21",
    "text": "Your own ears will hear him. Right behind you a voice will say, \"This is the way you should go,\" whether to the right or to the left."
  },
  {
    "ref": "Isaiah 43:19",
    "text": "For I am about to do something new. See, I have already begun! Do you not see it? I will make a pathway through the wilderness. I will create rivers in the dry wasteland."
  },
  {
    "ref": "Isaiah 54:10",
    "text": "\"For the mountains may move and the hills disappear, but even then my faithful love for you will remain. My covenant of blessing will never be broken,\" says the Lord, who has mercy on you."
  },
  {
    "ref": "Isaiah 54:17",
    "text": "But in that coming day no weapon turned against you will succeed. You will silence every voice raised to accuse you. These benefits are enjoyed by the servants of the Lord; their vindication will come from me. I, the Lord, have spoken!"
  },
  {
    "ref": "Isaiah 55:11",
    "text": "It is the same with my word. I send it out, and it always produces fruit. It will accomplish all I want it to, and it will prosper everywhere I send it."
  },
  {
    "ref": "Jeremiah 1:5",
    "text": "\"I knew you before I formed you in your mother's womb. Before you were born I set you apart and appointed you as my prophet to the nations.\""
  },
  {
    "ref": "Jeremiah 31:3",
    "text": "Long ago the Lord said to Israel: \"I have loved you, my people, with an everlasting love. With unfailing love I have drawn you to myself.\""
  },
  {
    "ref": "Ezekiel 36:26",
    "text": "And I will give you a new heart, and I will put a new spirit in you. I will take out your stony, stubborn heart and give you a tender, responsive heart."
  },
  {
    "ref": "Daniel 3:17-18",
    "text": "If we are thrown into the blazing furnace, the God whom we serve is able to save us. He will rescue us from your power, Your Majesty."
  },
  {
    "ref": "Joel 2:28",
    "text": "Then, after doing all those things, I will pour out my Spirit upon all people. Your sons and daughters will prophesy. Your old men will dream dreams, and your young men will see visions."
  },
  {
    "ref": "Amos 5:24",
    "text": "Instead, I want to see a mighty flood of justice, an endless river of righteous living."
  },
  {
    "ref": "Habakkuk 3:17-18",
    "text": "Even though the fig trees have no blossoms, and there are no grapes on the vines... yet I will rejoice in the Lord! I will be joyful in the God of my salvation!"
  },
  {
    "ref": "Zechariah 4:6",
    "text": "Then he said to me, \"This is what the Lord says to Zerubbabel: It is not by force nor by strength, but by my Spirit, says the Lord of Heaven's Armies.\""
  },
  {
    "ref": "Malachi 3:10",
    "text": "\"Bring all the tithes into the storehouse so there will be enough food in my Temple. If you do,\" says the Lord of Heaven's Armies, \"I will open the windows of heaven for you. I will pour out a blessing so great you won't have enough room to take it in! Try it! Put me to the test!\""
  },
  {
    "ref": "Matthew 5:3",
    "text": "God blesses those who are poor and realize their need for him, for the Kingdom of Heaven is theirs."
  },
  {
    "ref": "Matthew 5:8",
    "text": "God blesses those whose hearts are pure, for they will see God."
  },
  {
    "ref": "Matthew 5:9",
    "text": "God blesses those who work for peace, for they will be called the children of God."
  },
  {
    "ref": "Matthew 6:9-13",
    "text": "Pray like this: Our Father in heaven, may your name be kept holy. May your Kingdom come soon. May your will be done on earth, as it is in heaven. Give us today the food we need, and forgive us our sins, as we have forgiven those who sin against us. And don't let us yield to temptation, but rescue us from the evil one."
  },
  {
    "ref": "Matthew 6:21",
    "text": "Wherever your treasure is, there the desires of your heart will also be."
  },
  {
    "ref": "Matthew 7:12",
    "text": "Do to others whatever you would like them to do to you. This is the essence of all that is taught in the law and the prophets."
  },
  {
    "ref": "Matthew 11:29",
    "text": "Take my yoke upon you. Let me teach you, because I am humble and gentle at heart, and you will find rest for your souls."
  },
  {
    "ref": "Matthew 16:26",
    "text": "And what do you benefit if you gain the whole world but lose your own soul? Is anything worth more than your soul?"
  },
  {
    "ref": "Matthew 25:40",
    "text": "And the King will say, 'I tell you the truth, when you did it to one of the least of these my brothers and sisters, you were doing it to me!'"
  },
  {
    "ref": "Mark 11:24",
    "text": "I tell you, you can pray for anything, and if you believe that you've received it, it will be yours."
  },
  {
    "ref": "Luke 12:34",
    "text": "Wherever your treasure is, there the desires of your heart will also be."
  },
  {
    "ref": "Luke 15:7",
    "text": "In the same way, there is more joy in heaven over one lost sinner who repents and returns to God than over ninety-nine others who are righteous and didn't stray!"
  },
  {
    "ref": "Luke 23:34",
    "text": "Jesus said, \"Father, forgive them, for they don't know what they are doing.\""
  },
  {
    "ref": "John 4:24",
    "text": "For God is Spirit, so those who worship him must worship in spirit and in truth."
  },
  {
    "ref": "John 6:35",
    "text": "Jesus replied, \"I am the bread of life. Whoever comes to me will never be hungry again. Whoever believes in me will never be thirsty.\""
  },
  {
    "ref": "John 10:27-28",
    "text": "My sheep listen to my voice; I know them, and they follow me. I give them eternal life, and they will never perish."
  },
  {
    "ref": "John 12:26",
    "text": "All who want to be my disciples must follow me, because my servants must be where I am. If they follow me, the Father will honor them."
  },
  {
    "ref": "John 14:1-2",
    "text": "\"Don't let your hearts be troubled. Trust in God, and trust also in me. There is more than enough room in my Father's home.\""
  },
  {
    "ref": "John 14:15",
    "text": "\"If you love me, obey my commandments.\""
  },
  {
    "ref": "John 17:3",
    "text": "And this is the way to have eternal life\u2014to know you, the only true God, and Jesus Christ, the one you sent to earth."
  },
  {
    "ref": "Acts 2:42",
    "text": "All the believers devoted themselves to the apostles' teaching, and to fellowship, and to sharing in meals, and to prayer."
  },
  {
    "ref": "Acts 17:28",
    "text": "For in him we live and move and exist. As some of your own poets have said, 'We are his offspring.'"
  },
  {
    "ref": "Acts 20:35",
    "text": "And I have been a constant example of how you can help those in need by working hard. You should remember the words of the Lord Jesus: 'It is more blessed to give than to receive.'"
  },
  {
    "ref": "Romans 8:14",
    "text": "For all who are led by the Spirit of God are children of God."
  },
  {
    "ref": "Romans 8:18",
    "text": "Yet what we suffer now is nothing compared to the glory he will reveal to us later."
  },
  {
    "ref": "Romans 8:37",
    "text": "No, despite all these things, overwhelming victory is ours through Christ, who loved us."
  },
  {
    "ref": "Romans 10:17",
    "text": "So faith comes from hearing, that is, hearing the Good News about Christ."
  },
  {
    "ref": "Romans 12:1",
    "text": "And so, dear brothers and sisters, I plead with you to give your bodies to God because of all he has done for you. Let them be a living and holy sacrifice."
  },
  {
    "ref": "Romans 12:9-10",
    "text": "Don't just pretend to love others. Really love them. Hate what is wrong. Hold tight to what is good. Love each other with genuine affection."
  },
  {
    "ref": "1 Corinthians 6:19-20",
    "text": "Don't you realize that your body is the temple of the Holy Spirit, who lives in you and was given to you by God? You do not belong to yourself, for God bought you with a high price. So you must honor God with your body."
  },
  {
    "ref": "1 Corinthians 15:57",
    "text": "But thank God! He gives us victory over sin and death through our Lord Jesus Christ."
  },
  {
    "ref": "1 Corinthians 15:58",
    "text": "So, my dear brothers and sisters, be strong and immovable. Always work enthusiastically for the Lord, for you know that nothing you do for the Lord is ever useless."
  },
  {
    "ref": "2 Corinthians 4:16-17",
    "text": "That is why we never give up. Though our bodies are dying, our spirits are being renewed every day. For our present troubles are small and won't last very long."
  },
  {
    "ref": "2 Corinthians 5:7",
    "text": "For we live by believing and not by seeing."
  },
  {
    "ref": "Galatians 5:1",
    "text": "So Christ has truly set us free. Now make sure that you stay free, and don't get tied up again in slavery to the law."
  },
  {
    "ref": "Galatians 6:2",
    "text": "Share each other's burdens, and in this way obey the law of Christ."
  },
  {
    "ref": "Ephesians 3:20",
    "text": "Now all glory to God, who is able, through his mighty power at work within us, to accomplish infinitely more than we might ask or think."
  },
  {
    "ref": "Ephesians 4:2",
    "text": "Always be humble and gentle. Be patient with one another, making allowance for each other's faults because of your love."
  },
  {
    "ref": "Ephesians 5:15-16",
    "text": "So be careful how you live. Don't live like fools, but like those who are wise. Make the most of every opportunity in these evil days."
  },
  {
    "ref": "Ephesians 6:12",
    "text": "For we are not fighting against flesh-and-blood enemies, but against evil rulers and authorities of the unseen world."
  },
  {
    "ref": "Philippians 2:14-15",
    "text": "Do everything without complaining or arguing, so that no one can criticize you. Live clean, innocent lives as children of God."
  },
  {
    "ref": "Philippians 3:14",
    "text": "I press on to reach the end of the race and receive the heavenly prize for which God, through Christ Jesus, is calling us."
  },
  {
    "ref": "Colossians 3:2",
    "text": "Think about the things of heaven, not the things of earth."
  },
  {
    "ref": "Colossians 3:15",
    "text": "And let the peace that comes from Christ rule in your hearts. For as members of one body you are called to live in peace. And always be thankful."
  },
  {
    "ref": "1 Thessalonians 5:11",
    "text": "So encourage each other and build each other up, just as you are already doing."
  },
  {
    "ref": "2 Thessalonians 3:3",
    "text": "But the Lord is faithful; he will strengthen you and guard you from the evil one."
  },
  {
    "ref": "1 Timothy 4:12",
    "text": "Don't let anyone think less of you because you are young. Be an example to all believers in what you say, in the way you live, in your love, your faith, and your purity."
  },
  {
    "ref": "1 Timothy 6:6",
    "text": "Yet true godliness with contentment is itself great wealth."
  },
  {
    "ref": "1 Timothy 6:12",
    "text": "Fight the good fight for the true faith. Hold tightly to the eternal life to which God has called you."
  },
  {
    "ref": "2 Timothy 2:15",
    "text": "Work hard so you can present yourself to God and receive his approval. Be a good worker, one who does not need to be ashamed and who correctly explains the word of truth."
  },
  {
    "ref": "2 Timothy 4:7",
    "text": "I have fought the good fight, I have finished the race, and I have remained faithful."
  },
  {
    "ref": "Titus 2:11",
    "text": "For the grace of God has been revealed, bringing salvation to all people."
  },
  {
    "ref": "Philemon 1:6",
    "text": "And I am praying that you will put into action the generosity that comes from your faith as you understand and experience all the good things we have in Christ."
  },
  {
    "ref": "Hebrews 10:24-25",
    "text": "Let us think of ways to motivate one another to acts of love and good works. And let us not neglect our meeting together, as some people do, but encourage one another."
  },
  {
    "ref": "Hebrews 12:2",
    "text": "We do this by keeping our eyes on Jesus, the champion who initiates and perfects our faith."
  },
  {
    "ref": "Hebrews 13:5",
    "text": "Don't love money; be satisfied with what you have. For God has said, \"I will never fail you. I will never abandon you.\""
  },
  {
    "ref": "James 1:12",
    "text": "God blesses those who patiently endure testing and temptation. Afterward they will receive the crown of life that God has promised to those who love him."
  },
  {
    "ref": "1 Peter 2:9",
    "text": "But you are not like that, for you are a chosen people. You are royal priests, a holy nation, God's very own possession. As a result, you can show others the goodness of God."
  },
  {
    "ref": "1 Peter 3:15",
    "text": "Instead, you must worship Christ as Lord of your life. And if someone asks about your hope as a believer, always be ready to explain it."
  },
  {
    "ref": "1 Peter 4:8",
    "text": "Most important of all, continue to show deep love for each other, for love covers a multitude of sins."
  },
  {
    "ref": "2 Peter 3:9",
    "text": "The Lord isn't really being slow about his promise, as some people think. No, he is being patient for your sake. He does not want anyone to be destroyed, but wants everyone to repent."
  },
  {
    "ref": "1 John 1:7",
    "text": "But if we are living in the light, as God is in the light, then we have fellowship with each other, and the blood of Jesus, his Son, cleanses us from all sin."
  },
  {
    "ref": "1 John 4:4",
    "text": "But you belong to God, my dear children. You have already won a victory over those people, because the Spirit who lives in you is greater than the spirit who lives in the world."
  },
  {
    "ref": "1 John 4:18",
    "text": "Such love has no fear, because perfect love expels all fear. If we are afraid, it is for fear of punishment, and this shows that we have not fully experienced his perfect love."
  },
  {
    "ref": "Jude 1:24-25",
    "text": "Now all glory to God, who is able to keep you from falling away and will bring you with great joy into his glorious presence without a single fault."
  },
  {
    "ref": "Revelation 1:8",
    "text": "\"I am the Alpha and the Omega\u2014the beginning and the end,\" says the Lord God. \"I am the one who is, who always was, and who is still to come\u2014the Almighty One.\""
  },
  {
    "ref": "Revelation 22:13",
    "text": "\"I am the Alpha and the Omega, the First and the Last, the Beginning and the End.\""
  }
];
