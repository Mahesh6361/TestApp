import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsServiceService {
  constructor() { }

  displayTeams = [
    {id:1,imagePath :"https://drop.ndtv.com/albums/SPORTS/cskvsrhipl2021/thumb_640x480.jpg?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021: CSK Outclass SRH By 7 Wickets To Register 5th Straight Win",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/cskvsrhipl2021/700_7.jpg",description:"After losing Jonny Bairstow early, David Warner and Manish Pandey steadied SRH innings with a solid partnership for the second wicket."},
                                  {imagePath2:"https://drop.ndtv.com/albums/SPORTS/cskvsrhipl2021/700_6.jpg",description:"Manish Pandey, making a comeback into the side, played a wonderful innings and smashed 61 off 46 balls, with the help of five fours and a six."},
                                  {imagePath2:"https://drop.ndtv.com/albums/SPORTS/cskvsrhipl2021/700_8.jpg",description:"Warner scored a half-century (57 off 55) but was far from his fluent best. His slow knock came to haunt SRH badly as CSK chased down the total with ease."},
                                  {imagePath2:"https://drop.ndtv.com/albums/SPORTS/cskvsrhipl2021/700_5.jpg",description:"Kane Williamson blasted 26 off just 10 balls, helping SRH set a 172-run target for CSK"},
                                  {imagePath2:"https://drop.ndtv.com/albums/SPORTS/cskvsrhipl2021/700_9.jpg",description:"Lungi Ngidi, playing his second IPL game of the season, was the most successful CSK bowler on the night, returning with the figures of 2/35 from his four overs."},
                                  {imagePath2:"https://drop.ndtv.com/albums/SPORTS/cskvsrhipl2021/700_3.jpg",description:"Ruturaj Gaikwad and Faf du Plessis stitched a 129-run stand for the opening wicket to all but ensure a thumping victory for CSK."},
                                  {imagePath2:"https://drop.ndtv.com/albums/SPORTS/cskvsrhipl2021/700_4.jpg",description:"Du Plessis scored 56 off 38 balls and regained the Orange Cap having scored 270 runs from six outings."},
                                  {imagePath2:"https://drop.ndtv.com/albums/SPORTS/cskvsrhipl2021/700_2.jpg",description:"Gaikwad was the more aggressive of the two openers and blasted 75 off just 44 balls -- his highest score in IPL. He also won the Player of the Match award for his brilliant knock."},
                                  {imagePath2:"https://drop.ndtv.com/albums/SPORTS/cskvsrhipl2021/700_1.jpg",description:"Rashid Khan picked three wickets in quick time but by then it was all too late as Suresh Raina (17*) and Ravindra Jadeja (7*) got CSK over the line with nine balls left."}
    ]},
                    
    {id:2,imagePath :"https://drop.ndtv.com/albums/SPORTS/dcvrcbipl2021/thumb_640x480.jpg?output-quality=80&output-format=webp&downsize=285:*",description:"DC vs RCB: Royal Challengers Bangalore Beat Delhi Capitals By One Run To Go On Top",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/dcvrcbipl2021/8.jpg",description:"Shimron Hetmyer and Rishabh Pant's unbeaten half-centuries went in vain as RCB edged Delhi Capitals by one run on the last ball."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/dcvrcbipl2021/1.jpg",description:"Hetmyer and Pant stitched an unbeaten partnership of 78 runs for the fifth wicket but couldn't get their team over the line."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/dcvrcbipl2021/3.jpg",description:"After losing three early wickets, Rishabh Pant played a cautious knock to take the game deep. He finished with 58 not out off 48 balls as his side fell agonisingly short."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/dcvrcbipl2021/2.jpg",description:"With RCB in the driver's seat, Shimron Hetmyer blasted 53* off just 25 balls to bring DC back in the game. He smashed three sixes in the 18th over bowled by Kyle Jamieson to turn the game on its head but couldn't finish the match."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/dcvrcbipl2021/5.jpg",description:"With 14 required in the final over, Mohammed Siraj bowled brilliantly to defend the total against two well-set batsman. He also picked up the big wicket of Steve Smith inside the Powerplay."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/dcvrcbipl2021/4.jpg",description:"Earlier, AB de Villiers produced another batting masterclass blasting 75* off just 42 balls, helping RCB post a challenging total of 171/5."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/dcvrcbipl2021/6.jpg",description:"This was RCB's fifth win from six matches in the IPL 2021 which helped them regain the top spot."},
        ]},
    {id:3,imagePath :"https://drop.ndtv.com/albums/SPORTS/ipl_pbksvskkr_2021/thumb_640x480.png?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021: Kolkata Knight Riders Down Punjab Kings To End Losing Streak",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_pbksvskkr_2021/700_6.png",description:"Sunil Narine took two wickets, while Prasidh Krishna took three as Kolkata Knight Riders restricted Punjab Kings to 123/9"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_pbksvskkr_2021/700_9.png",description:"Mayank Agarwal, with 31 off 34, was Punjab Kings' top scorer"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_pbksvskkr_2021/700_10.png",description:"Chris Jordan played a late cameo of 30 off 18 deliveries to help Punjab Kings reach a respectable total"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_pbksvskkr_2021/700_5.png",description:"Punjab Kings got off to a great start with the ball, bringing KKR down to 17/3 in three overs"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_pbksvskkr_2021/700_6.png",description:"Rahul Tripathi scored 41 off 32 deliveries in a 63-run partnership with Eoin Morgan that helped steady the ship for KKR"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_pbksvskkr_2021/700_3.png",description:"Eoin Morgan finished unbeaten on 47 as he helped anchor KKR's chase"},
    ]},
    {id:4,imagePath :"https://drop.ndtv.com/albums/SPORTS/ipl_mivssrh_2021/640_640x480.jpg?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021: Mumbai Indians Outclass Kolkata Knight Riders By 10 Runs",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivssrh_2021/2(3).jpg",description:"Quinton de Kock anchored Mumbai Indians' innings with a steady 39-ball 40"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivssrh_2021/4(2).jpg",description:"Vijay Shankar dismissed two dangerous batsmen in Rohit Sharma and Suryakumar Yadav to put a big dent in MI's hopes of posting a big total"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivssrh_2021/1(3).jpg",description:"Kieron Pollard hit 35 off 22 to power MI to 150/5, with two sixes off the last two deliveries of the innings."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivssrh_2021/6(2).jpg",description:"Jonny Bairstow got SRH off to a brilliant start in the powerplay, but was out hit-wicket for 43 off 22 deliveries"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivssrh_2021/5(2).jpg",description:"Rahul Chahar took three wickets for 19 runs in his four overs"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivssrh_2021/3(2).jpg",description:"Trent Boult helped bowl SRH out for 137 with his three wickets at the death"},
    ]},
    {id:5,imagePath :"https://drop.ndtv.com/albums/SPORTS/ipl_rrvsdc_2021/thumb(1)_640x480.jpg?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021: Rajasthan Royals Rescue It At The Death To Beat Delhi Capitals By 3 Wickets",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvsdc_2021/6(1).jpg",description:"Jaydev Unadkat took three wickets in a brilliant opening spell and was awarded player of the match."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvsdc_2021/5(1).jpg",description:"Mustafizur Rahman was also impressive with the ball for Rajasthan Royals, with figures of 2/29"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvsdc_2021/1(2).jpg",description:"Rishabh Pant hit 51 off 32 deliveries to help Delhi Capitals post a respectable score"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvsdc_2021/2(2).jpg",description:"Avesh Khan took three wickets for the Capitals, as the Royals were brought down to 42/5 at one stage of their chase"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvsdc_2021/3(1).jpg",description:"David Miller kept Rajasthan Royals in the hunt with a 43-ball 62"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvsdc_2021/4(1).jpg",description:"Chris Morris smashed four sixes as he scored 36 off 18 deliveries to help the Royals finish off the chase in style and win a tightly fought contest"},
                              
    ]},
    {id:6,imagePath :"https://drop.ndtv.com/albums/SPORTS/ipl_srhvsrcb_2021/thumb_640x480.jpg?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021: SRH Flounder At The Death As RCB Steal Unlikely Win",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvsrcb_2021/2(1).jpg",description:"Jason Holder took three wickets for SunRisers Hyderabad, including that of Royal Challengers Bangalore skipper Virat Kohli"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvsrcb_2021/3.jpg",description:"Rashid Khan was brilliant as usual, with figures of 2-18. He dismissed the dangerous AB de Villiers and dried out the runs in the middle overs."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvsrcb_2021/5.jpg",description:"Glenn Maxwell hit his first IPL half-century since 2016, as his 41-ball 59 managed to drag RCB to a respectable total of 149/8."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvsrcb_2021/1(1).jpg",description:"David Warner was batting like a dream and SRH were coasting to victory until Kyle Jamieson had him hole out for 54 off 37 deliveries."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvsrcb_2021/6.jpg",description:"Shahbaz Ahmed took three wickets in the 17th over to completely turn the game around in RCB's favour."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvsrcb_2021/4.jpg",description:"Harshal Patel was RCB's star at the death again, as he finished with figures of 2-25."},
                              
    ]},
    {id:7,imagePath :"https://drop.ndtv.com/albums/SPORTS/ipl_mivskkr_2021/thumb(3)_640x480.jpg?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021: Mumbai Indians Outclass Kolkata Knight Riders By 10 Runs",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivskkr_2021/2(3).jpg",description:"Suryakumar Yadav scored 56 runs off 36 deliveries. He hit seven boundaries and a couple of sixes."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivskkr_2021/5(3).jpg",description:"Rohit Sharma played a crucial knock of 43 runs to help Mumbai Indians post a competitive total of 152."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivskkr_2021/4(3).jpg",description:"Andre Russell ran through the Mumbai Indians lower middle-order as he picked up his maiden five-wicket haul in IPL."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivskkr_2021/6(3).jpg",description:"Nitish Rana brought up his second consecutive half-century in the ongoing IPL 2021."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivskkr_2021/3(3).jpg",description:"Rahul Chahar turned the game on its head with an exceptional spell. He returned with figures of four for 27 from his four overs."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivskkr_2021/1(3).jpg",description:"Mumbai Indians successfully defended their total of 152 to register their first win of the IPL 2021."},
                              
    ]},
    {id:8,imagePath :"https://drop.ndtv.com/albums/SPORTS/ipl_rrvspbks_2021/thumb(2)_640x480.jpg?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021: Punjab Kings Pip Rajasthan Royals In High-Scoring Thriller",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvspbks_2021/700_4.jpg",description:"KL Rahul top-scored for Punjab Kings with a knock of 91. He hit seven boundaries and five sixes."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvspbks_2021/700_3.jpg",description:"Deepak Hooda scored a quick-fire half-century to push Punjab Kings' total beyond 200."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvspbks_2021/700_2.jpg",description:"Chetan Sakariya, on his IPL debut, starred with the ball. He returned with figures of three for 31 from his quota of four overs."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvspbks_2021/700_5.jpg",description:"Sanju Samson played a valiant knock of 119 but it wasn't enough to take his team over the line in a run-fest in Mumbai."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvspbks_2021/700_1(1).jpg",description:"Arshdeep Singh picked up three wickets including the all-important one of Sanju Samson on the final ball of the match."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_rrvspbks_2021/700_6.jpg",description:"Punjab Kings began their IPL 2021 campaign with a four-run win over Rajasthan Royals."},
                              
    ]},
    {id:9,imagePath :"https://drop.ndtv.com/albums/SPORTS/ipl_srhvkkr_2021/640_640x480.png?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021: Nitish Rana, Bowlers Help KKR Secure 10-Run Win Over SRH",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvkkr_2021/700_1.png",description:"Nitish Rana slammed a half-century. He smashed nine boundaries and four maximums during his knock of 80 runs."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvkkr_2021/700_2.png",description:"Rahul Tripathi also scored a half-century. He hit five boundaries and two sixes during his stay in the middle."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvkkr_2021/700_1.jpg",description:"Nitish Rana and Rahul Tripathi put on a 93-run stand for the second wicket."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvkkr_2021/700_3.png",description:"After losing early wickets, Jonny Bairstow and Manish Pandey kept SRH in the hunt by scoring half-centuries."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvkkr_2021/700_4.png",description:"Manish Pandey remained unbeaten on 61 but failed to get SRH over the line."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_srhvkkr_2021/700_5.png",description:"KKR successfully defended their total of 187 runs against SRH to start their IPL 2021 campaign on a winning note."},
                             
    ]},
    {id:10,imagePath :"https://drop.ndtv.com/albums/SPORTS/ipl_cskvsdc_2021/thumb(1)_640x480.jpg?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021: Dhawan, Shaw Fifties Guide DC To Thumping Win Over CSK",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_cskvsdc_2021/1(2).jpg",description:"Suresh Raina marked his return to the IPL with a blistering half-century."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_cskvsdc_2021/2(2).jpg",description:"Avesh Khan was the pick of the bowlers for Delhi Capitals. He picked up the wickets of Faf du Plessis and MS Dhoni."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_cskvsdc_2021/3(2).jpg",description:"Prithvi Shaw slammed 72 runs off just 38 deliveries. He hit nine boundaries and three maximums."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_cskvsdc_2021/4(2).jpg",description:"Shikhar Dhawan was adjudged player of the match for his knock of 85."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_cskvsdc_2021/6(2).jpg",description:"Prithvi Shaw and Shikhar Dhawan put on a 138-run stand for the first wicket to setup the chase for Delhi Capitals."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_cskvsdc_2021/5(2).jpg",description:"Rishabh Pant hit the winning runs as Delhi Capitals chased down the 189-run target with eight balls to spare."},
                              
    ]},
    {id:11,imagePath :"https://drop.ndtv.com/albums/SPORTS/ipl_mivsrcb_2021/thumb_640x480.jpg?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021: AB de Villiers, Harshal Patel Star As RCB Register Thrilling Win Over Mumbai Indians",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivsrcb_2021/1(1).jpg",description:"Chris Lynn top-scored for Mumbai Indians with a knock of 49 as they set RCB a 160-run target."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivsrcb_2021/2(1).jpg",description:"Harshal Patel picked up his maiden five-wicket haul in T20 cricket to help RCB restrict Mumbai Indians to 159/9."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivsrcb_2021/3(1).jpg",description:"Virat Kohli looked fluent in the middle during his 33-run knock."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivsrcb_2021/4(1).jpg",description:"Glenn Maxwell displayed his wide range of shots during his knock of 39 off 28 balls."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivsrcb_2021/5(1).jpg",description:"AB de Villiers was at his vintage best as he scored 48 runs off just 27 balls."},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl_mivsrcb_2021/6(1).jpg",description:"Harshal Patel hit the winning run as RCB got over the line in a thrilling contest against Mumbai Indians."},
                              
    ]},
    {id:12,imagePath :"https://drop.ndtv.com/albums/SPORTS/ipl2021auction/thumb_640x480.jpg?output-quality=80&output-format=webp&downsize=285:*",description:"IPL 2021 Auction: Top Five Most Expensive Buys",
                teamPlayers : [{imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl2021auction/5.jpg",description:"Chris Morris became the most expensive player in the history of IPL as Rajasthan Royals bought him for a whooping Rs 16.25 crore. (Image courtesy: BCCI/IPL)"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl2021auction/4.jpg",description:"New Zealand fast bowler Kyle Jamieson also fetched big money and was roped in by Royal Challengers Bangalore for Rs 15 crore. (Image courtesy: AFP)"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl2021auction/3.jpg",description:"Royal Challengers Bangalore splashed Rs 14.25 crore to acquire the services of Australia all-rounder Glenn Maxwell. (Image Courtesy: BCCI)"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl2021auction/6.jpg",description:"Punjab Kings spent Rs 14 crore to buy Australia's Jhye Richardson. (Image Courtesy: AFP)"},
                              {imagePath2:"https://drop.ndtv.com/albums/SPORTS/ipl2021auction/2.jpg",description:"Krishnappa Gowtham became the most expensive uncapped Indian player in IPL history as he went to Chennai Super Kings for Rs 9.25 crore. (Image Courtesy: AFP)"},
                              
    ]},

  ]

 
}
