import sankalppic from '../src/img/avatar_schedule_1.png';
import anupamshukla from '../src/img/avatar_schedule_2.png';
import yusufali from '../src/img/avatar_schedule_3.png';
import tanmaysingh from '../src/img/avatar_schedule_4.png';
import sankalshukla from '../src/img/avatar_schedule_5.png'
const eventData = [
    {
        date: "20 June",
        day: "Tuesday",
        event: [
            {
                eventTime: "2:00 PM - 3:00 PM",
                person: [{ personName: "Mr. Sankalp Shukla", member: "Member of Victory Group",image:sankalppic }],
                eventtopic: "Welcome Session",
                eventSubtopic: "Join us for an unforgettable evening of celebration and camaraderie as we kick off Aakar with a warm welcome!"
            },
            {
                eventTime: "3:00 PM - 4:30 PM",
                person: [
                    { personName: "Mr. Anupam Shukla", member: "Chairman of Victory Group",image:anupamshukla },
                    { personName: "Mr. Yusuff Ali", member: "Founder & CEO of Victory Group",image:yusufali }
                ],
                eventtopic: "Icebreaker Activities",
                eventSubtopic: "Energizing icebreaker games to break the ice and encourage mingling among participants. Facilitated activities to encourage teamwork, communication, and collaboration."
            },
            {
                eventTime: "4:30 PM - 5:30 PM",
                eventtopic: "Team Building Workshops",
                eventSubtopic: "Engage in interactive workshops focused on specific team-building skills. Workshops may cover topics such as effective communication, conflict resolution, decision-making, and goal setting."
            },
            {
                eventTime: "5:30 PM - 6:00 PM",
                eventtopic: "Reflection and Closing",
                eventSubtopic: "Gather as a whole group for reflection on the day's activities. Share insights, lessons learned, and memorable moments. Thank participants for their participation and commitment to building a stronger team. Provide information on follow-up activities or resources for continued team development."
            },
            {
                eventTime: "6:00 PM - 6:30 PM",
                person: [{ personName: "Mr. Tanmay Singh", member: "Member of Victory Group",image:tanmaysingh }],
                eventtopic: "Next Day Brief Session",
                eventSubtopic: "As we conclude our exhilarating team-building event, it's essential to take a moment to reflect on our experiences, celebrate our achievements, and chart a course for the future."
            },
            {
                eventTime: "2:00 PM - 3:00 PM",
                person: [{ personName: "Mr. Sankalp Shukla", member: "Member of Victory Group",image:sankalshukla }],
                eventtopic: "Join for the Dinner",
                eventSubtopic: "Enjoy a delicious catered dinner together. Get opportunities for informal networking and socializing."
            }
        ]
    },
    {
        date: "21 June",
        day: "Wednesday"
        
    },
    {
        date: "22 June",
        day: "Thursday"
        
    }
];
export default eventData;