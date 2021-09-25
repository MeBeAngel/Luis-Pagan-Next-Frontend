import Image from 'next/image';
import Luis from "../public//images/luis-mobile.svg";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="image">
        <Image src={Luis} alt="" />
      </div>
      <div className="bio">
        <p>
          My name is Staff <span className="bold yellow">Sergeant Luis Pagan-Montalvo;</span> and I serve the local
          people of Westchester County as a New York Army National Guard
          Recruiter. I joined the Army National Guard in January 2008 as a Field
          Artillerymen. I was 19 years old, and it was the best decision I made
          in my life.
        </p>
        <p>
          I was able to turn a part time opportunity into so much more. I
          developed myself as a young soldier with a local Bronx unit called
          Bravo Battery 1-258 Field Artillery. I was able to work my way up the
          ranks as a lower enlisted soldier into a Staff Sergeant/Section Chief
          by 2015. My experiences in that unit allowed me to take on many other
          roles that I served in as a full-time National Guardsman. Those roles
          ranged from conducting over 1,000 Military Funeral Services for the
          Military Forces Honor Guard Program into my current Recruiting
          position.
        </p>
        <p>
          I started off as a young soldier conducting services every day to a
          few years later running my own office in the Bronx. Then I eventually
          got promoted and ran five offices as the Eastern Regional Coordinator.
          This position developed me as a leader and a mentor to the young
          troops I was now overseeing as a direct line supervisor.
        </p>
        <p>
          
          I eventually moved into running the NY State Military Forces Honor
          Guard at the state-level until I passed the baton and deployed
          overseas with the 101st Expeditionary Signal Battalion. I was deployed
          to Dubai for 9 Months and was able to take charge of the entire
          country for the 101st ESB as the Non-Commissioned Officer in charge of
          the United Arab Emirates.
        </p>
        <p>
          While overseas I was interviewed and selected as a Recruiter for the
          Army National Guard. I have been recruiting since January of 2019 and
          it is the most rewarding job I have had the opportunity of stepping
          into. We change lives as Recruiters every day. This affects the young
          17-year old kids still in High School trying to start their lives on
          the right foot, as well as people who need an outlet to spark a change
          in their lives for the better.
        </p>
        <p>
          I have been able to recruit some of the best men and women in the
          force today, and they're out there every day making a change in their
          local community as well as their country! I am honored to be called
          their recruiter. My promise to you will be the attention of a
          recruiter who is always looking out for your best interest from the
          day you step into my office until the day you decide to hang up your
          hat.
        </p>
      </div>
    </div>
  );
}
