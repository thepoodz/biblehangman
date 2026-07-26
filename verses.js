const VERSES = [
  {
    "ref": "Genesis 1:1",
    "text": "In the beginning God created the heavens and the earth."
  },
  {
    "ref": "Genesis 1:3",
    "text": "And God said, 'Let there be light,' and there was light."
  },
  {
    "ref": "Genesis 1:27",
    "text": "So God created mankind in his own image, in the image of God he created them; male and female he created them."
  },
  {
    "ref": "Genesis 50:20",
    "text": "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives."
  },
  {
    "ref": "Exodus 14:14",
    "text": "The Lord will fight for you; you need only to be still."
  },
  {
    "ref": "Exodus 20:3",
    "text": "You shall have no other gods before me."
  },
  {
    "ref": "Deuteronomy 6:5",
    "text": "Love the Lord your God with all your heart and with all your soul and with all your strength."
  },
  {
    "ref": "Deuteronomy 31:6",
    "text": "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you."
  },
  {
    "ref": "Joshua 1:9",
    "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."
  },
  {
    "ref": "Joshua 24:15",
    "text": "As for me and my household, we will serve the Lord."
  },
  {
    "ref": "1 Samuel 16:7",
    "text": "The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart."
  },
  {
    "ref": "2 Chronicles 7:14",
    "text": "If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land."
  },
  {
    "ref": "Nehemiah 8:10",
    "text": "Do not grieve, for the joy of the Lord is your strength."
  },
  {
    "ref": "Psalm 1:1",
    "text": "Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers."
  },
  {
    "ref": "Psalm 19:14",
    "text": "May these words of my mouth and this meditation of my heart be pleasing in your sight, Lord, my Rock and my Redeemer."
  },
  {
    "ref": "Psalm 23:1",
    "text": "The Lord is my shepherd, I lack nothing."
  },
  {
    "ref": "Psalm 23:4",
    "text": "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me."
  },
  {
    "ref": "Psalm 27:1",
    "text": "The Lord is my light and my salvation\u2014whom shall I fear? The Lord is the stronghold of my life\u2014of whom shall I be afraid?"
  },
  {
    "ref": "Psalm 34:8",
    "text": "Taste and see that the Lord is good; blessed is the one who takes refuge in him."
  },
  {
    "ref": "Psalm 37:4",
    "text": "Take delight in the Lord, and he will give you the desires of your heart."
  },
  {
    "ref": "Psalm 46:1",
    "text": "God is our refuge and strength, an ever-present help in trouble."
  },
  {
    "ref": "Psalm 46:10",
    "text": "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."
  },
  {
    "ref": "Psalm 51:10",
    "text": "Create in me a pure heart, O God, and renew a steadfast spirit within me."
  },
  {
    "ref": "Psalm 56:3",
    "text": "When I am afraid, I put my trust in you."
  },
  {
    "ref": "Psalm 86:15",
    "text": "But you, Lord, are a compassionate and gracious God, slow to anger, abounding in love and faithfulness."
  },
  {
    "ref": "Psalm 100:1-2",
    "text": "Shout for joy to the Lord, all the earth. Worship the Lord with gladness; come before him with joyful songs."
  },
  {
    "ref": "Psalm 103:8",
    "text": "The Lord is compassionate and gracious, slow to anger, abounding in love."
  },
  {
    "ref": "Psalm 118:24",
    "text": "This is the day the Lord has made; let us rejoice and be glad in it."
  },
  {
    "ref": "Psalm 119:11",
    "text": "I have hidden your word in my heart that I might not sin against you."
  },
  {
    "ref": "Psalm 119:105",
    "text": "Your word is a lamp for my feet, a light on my path."
  },
  {
    "ref": "Psalm 121:1-2",
    "text": "I lift up my eyes to the mountains\u2014where does my help come from? My help comes from the Lord, the Maker of heaven and earth."
  },
  {
    "ref": "Psalm 136:1",
    "text": "Give thanks to the Lord, for he is good. His love endures forever."
  },
  {
    "ref": "Psalm 139:14",
    "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well."
  },
  {
    "ref": "Psalm 147:5",
    "text": "Great is our Lord and mighty in power; his understanding has no limit."
  },
  {
    "ref": "Proverbs 3:5-6",
    "text": "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
  },
  {
    "ref": "Proverbs 4:23",
    "text": "Above all else, guard your heart, for everything you do flows from it."
  },
  {
    "ref": "Proverbs 15:1",
    "text": "A gentle answer turns away wrath, but a harsh word stirs up anger."
  },
  {
    "ref": "Proverbs 16:3",
    "text": "Commit to the Lord whatever you do, and he will establish your plans."
  },
  {
    "ref": "Proverbs 16:9",
    "text": "In their hearts humans plan their course, but the Lord establishes their steps."
  },
  {
    "ref": "Proverbs 17:17",
    "text": "A friend loves at all times, and a brother is born for a time of adversity."
  },
  {
    "ref": "Proverbs 18:10",
    "text": "The name of the Lord is a fortified tower; the righteous run to it and are safe."
  },
  {
    "ref": "Proverbs 27:17",
    "text": "As iron sharpens iron, so one person sharpens another."
  },
  {
    "ref": "Ecclesiastes 3:1",
    "text": "There is a time for everything, and a season for every activity under the heavens."
  },
  {
    "ref": "Ecclesiastes 4:9-10",
    "text": "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up."
  },
  {
    "ref": "Isaiah 6:8",
    "text": "Then I heard the voice of the Lord saying, 'Whom shall I send? And who will go for us?' And I said, 'Here am I. Send me!'"
  },
  {
    "ref": "Isaiah 9:6",
    "text": "For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."
  },
  {
    "ref": "Isaiah 26:3",
    "text": "You will keep in perfect peace those whose minds are steadfast, because they trust in you."
  },
  {
    "ref": "Isaiah 40:29",
    "text": "He gives strength to the weary and increases the power of the weak."
  },
  {
    "ref": "Isaiah 40:31",
    "text": "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."
  },
  {
    "ref": "Isaiah 41:10",
    "text": "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."
  },
  {
    "ref": "Isaiah 43:2",
    "text": "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you."
  },
  {
    "ref": "Isaiah 53:5",
    "text": "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed."
  },
  {
    "ref": "Isaiah 54:17",
    "text": "'No weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord.'"
  },
  {
    "ref": "Isaiah 55:8-9",
    "text": "'For my thoughts are not your thoughts, neither are your ways my ways,' declares the Lord."
  },
  {
    "ref": "Jeremiah 17:7",
    "text": "But blessed is the one who trusts in the Lord, whose confidence is in him."
  },
  {
    "ref": "Jeremiah 29:11",
    "text": "'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future.'"
  },
  {
    "ref": "Jeremiah 33:3",
    "text": "Call to me and I will answer you and tell you great and unsearchable things you do not know."
  },
  {
    "ref": "Lamentations 3:22-23",
    "text": "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness."
  },
  {
    "ref": "Micah 6:8",
    "text": "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God."
  },
  {
    "ref": "Nahum 1:7",
    "text": "The Lord is good, a refuge in times of trouble. He cares for those who trust in him."
  },
  {
    "ref": "Zephaniah 3:17",
    "text": "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing."
  },
  {
    "ref": "Matthew 5:14",
    "text": "You are the light of the world. A town built on a hill cannot be hidden."
  },
  {
    "ref": "Matthew 5:16",
    "text": "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven."
  },
  {
    "ref": "Matthew 6:33",
    "text": "But seek first his kingdom and his righteousness, and all these things will be given to you as well."
  },
  {
    "ref": "Matthew 6:34",
    "text": "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."
  },
  {
    "ref": "Matthew 7:7",
    "text": "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you."
  },
  {
    "ref": "Matthew 11:28",
    "text": "Come to me, all you who are weary and burdened, and I will give you rest."
  },
  {
    "ref": "Matthew 18:20",
    "text": "For where two or three gather in my name, there am I with them."
  },
  {
    "ref": "Matthew 19:26",
    "text": "Jesus looked at them and said, 'With man this is impossible, but with God all things are possible.'"
  },
  {
    "ref": "Matthew 22:37-39",
    "text": "Jesus replied: 'Love the Lord your God with all your heart and with all your soul and with all your mind.' This is the first and greatest commandment. And the second is like it: 'Love your neighbor as yourself.'"
  },
  {
    "ref": "Matthew 28:19-20",
    "text": "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you."
  },
  {
    "ref": "Mark 10:27",
    "text": "Jesus looked at them and said, 'With man this is impossible, but not with God; all things are possible with God.'"
  },
  {
    "ref": "Mark 12:30",
    "text": "Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength."
  },
  {
    "ref": "Luke 1:37",
    "text": "For no word from God will ever fail."
  },
  {
    "ref": "Luke 6:31",
    "text": "Do to others as you would have them do to you."
  },
  {
    "ref": "Luke 10:27",
    "text": "Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind; and, Love your neighbor as yourself."
  },
  {
    "ref": "Luke 18:27",
    "text": "Jesus replied, 'What is impossible with man is possible with God.'"
  },
  {
    "ref": "John 1:1",
    "text": "In the beginning was the Word, and the Word was with God, and the Word was God."
  },
  {
    "ref": "John 1:14",
    "text": "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth."
  },
  {
    "ref": "John 3:16",
    "text": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
  },
  {
    "ref": "John 3:17",
    "text": "For God did not send his Son into the world to condemn the world, but to save the world through him."
  },
  {
    "ref": "John 8:12",
    "text": "When Jesus spoke again to the people, he said, 'I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.'"
  },
  {
    "ref": "John 8:32",
    "text": "Then you will know the truth, and the truth will set you free."
  },
  {
    "ref": "John 10:10",
    "text": "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full."
  },
  {
    "ref": "John 11:25",
    "text": "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die.'"
  },
  {
    "ref": "John 13:34-35",
    "text": "A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another."
  },
  {
    "ref": "John 14:6",
    "text": "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'"
  },
  {
    "ref": "John 14:27",
    "text": "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid."
  },
  {
    "ref": "John 15:5",
    "text": "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing."
  },
  {
    "ref": "John 15:13",
    "text": "Greater love has no one than this: to lay down one's life for one's friends."
  },
  {
    "ref": "John 16:33",
    "text": "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world."
  },
  {
    "ref": "Acts 1:8",
    "text": "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."
  },
  {
    "ref": "Acts 2:38",
    "text": "Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.'"
  },
  {
    "ref": "Acts 4:12",
    "text": "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved."
  },
  {
    "ref": "Acts 16:31",
    "text": "They replied, 'Believe in the Lord Jesus, and you will be saved\u2014you and your household.'"
  },
  {
    "ref": "Romans 1:16",
    "text": "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes."
  },
  {
    "ref": "Romans 3:23",
    "text": "For all have sinned and fall short of the glory of God."
  },
  {
    "ref": "Romans 5:8",
    "text": "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us."
  },
  {
    "ref": "Romans 6:23",
    "text": "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord."
  },
  {
    "ref": "Romans 8:1",
    "text": "Therefore, there is now no condemnation for those who are in Christ Jesus."
  },
  {
    "ref": "Romans 8:28",
    "text": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."
  },
  {
    "ref": "Romans 8:31",
    "text": "What, then, shall we say in response to these things? If God is for us, who can be against us?"
  },
  {
    "ref": "Romans 8:38-39",
    "text": "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."
  },
  {
    "ref": "Romans 10:9",
    "text": "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved."
  },
  {
    "ref": "Romans 12:2",
    "text": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is."
  },
  {
    "ref": "Romans 12:12",
    "text": "Be joyful in hope, patient in affliction, faithful in prayer."
  },
  {
    "ref": "Romans 12:21",
    "text": "Do not be overcome by evil, but overcome evil with good."
  },
  {
    "ref": "Romans 15:13",
    "text": "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit."
  },
  {
    "ref": "1 Corinthians 10:13",
    "text": "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear."
  },
  {
    "ref": "1 Corinthians 13:4-7",
    "text": "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."
  },
  {
    "ref": "1 Corinthians 13:13",
    "text": "And now these three remain: faith, hope and love. But the greatest of these is love."
  },
  {
    "ref": "1 Corinthians 16:14",
    "text": "Do everything in love."
  },
  {
    "ref": "2 Corinthians 5:17",
    "text": "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"
  },
  {
    "ref": "2 Corinthians 5:21",
    "text": "God made him who had no sin to be sin for us, so that in him we might become the righteousness of God."
  },
  {
    "ref": "2 Corinthians 9:7",
    "text": "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
  },
  {
    "ref": "2 Corinthians 12:9",
    "text": "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'"
  },
  {
    "ref": "Galatians 2:20",
    "text": "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me."
  },
  {
    "ref": "Galatians 5:22-23",
    "text": "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."
  },
  {
    "ref": "Galatians 6:9",
    "text": "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up."
  },
  {
    "ref": "Ephesians 2:8-9",
    "text": "For it is by grace you have been saved, through faith\u2014and this is not from yourselves, it is the gift of God\u2014not by works, so that no one can boast."
  },
  {
    "ref": "Ephesians 2:10",
    "text": "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."
  },
  {
    "ref": "Ephesians 4:32",
    "text": "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."
  },
  {
    "ref": "Ephesians 6:10-11",
    "text": "Finally, be strong in the Lord and in his mighty power. Put on the full armor of God, so that you can take your stand against the devil's schemes."
  },
  {
    "ref": "Philippians 1:6",
    "text": "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus."
  },
  {
    "ref": "Philippians 2:3",
    "text": "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves."
  },
  {
    "ref": "Philippians 4:6-7",
    "text": "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."
  },
  {
    "ref": "Philippians 4:8",
    "text": "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable\u2014if anything is excellent or praiseworthy\u2014think about such things."
  },
  {
    "ref": "Philippians 4:13",
    "text": "I can do all this through him who gives me strength."
  },
  {
    "ref": "Philippians 4:19",
    "text": "And my God will meet all your needs according to the riches of his glory in Christ Jesus."
  },
  {
    "ref": "Colossians 3:12",
    "text": "Therefore, as God's chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience."
  },
  {
    "ref": "Colossians 3:23",
    "text": "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
  },
  {
    "ref": "1 Thessalonians 5:16-18",
    "text": "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus."
  },
  {
    "ref": "2 Timothy 1:7",
    "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline."
  },
  {
    "ref": "2 Timothy 3:16",
    "text": "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness."
  },
  {
    "ref": "Hebrews 4:12",
    "text": "For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart."
  },
  {
    "ref": "Hebrews 4:16",
    "text": "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need."
  },
  {
    "ref": "Hebrews 11:1",
    "text": "Now faith is confidence in what we hope for and assurance about what we do not see."
  },
  {
    "ref": "Hebrews 11:6",
    "text": "And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him."
  },
  {
    "ref": "Hebrews 12:1-2",
    "text": "Let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith."
  },
  {
    "ref": "Hebrews 13:8",
    "text": "Jesus Christ is the same yesterday and today and forever."
  },
  {
    "ref": "James 1:2-3",
    "text": "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance."
  },
  {
    "ref": "James 1:5",
    "text": "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you."
  },
  {
    "ref": "James 1:17",
    "text": "Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows."
  },
  {
    "ref": "James 1:19",
    "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry."
  },
  {
    "ref": "James 1:22",
    "text": "Do not merely listen to the word, and so deceive yourselves. Do what it says."
  },
  {
    "ref": "James 4:7",
    "text": "Submit yourselves, then, to God. Resist the devil, and he will flee from you."
  },
  {
    "ref": "James 4:8",
    "text": "Come near to God and he will come near to you."
  },
  {
    "ref": "1 Peter 5:7",
    "text": "Cast all your anxiety on him because he cares for you."
  },
  {
    "ref": "1 John 1:9",
    "text": "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness."
  },
  {
    "ref": "1 John 3:1",
    "text": "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!"
  },
  {
    "ref": "1 John 4:7-8",
    "text": "Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. Whoever does not love does not know God, because God is love."
  },
  {
    "ref": "1 John 4:19",
    "text": "We love because he first loved us."
  },
  {
    "ref": "1 John 5:14",
    "text": "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us."
  },
  {
    "ref": "Revelation 3:20",
    "text": "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me."
  },
  {
    "ref": "Revelation 21:4",
    "text": "'He will wipe every tear from their eyes. There will be no more death' or mourning or crying or pain, for the old order of things has passed away."
  }
];
