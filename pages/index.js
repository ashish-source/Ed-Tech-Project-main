import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHandshakeAngle } from 'react-icons/fa6';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery(document.querySelector('.searchInput').value || '');
  }, []);

  const handleSearch = () => {
    router.push(`/search?query=${searchQuery}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Website Home</title>
      </Head>

      <header className={styles.header}>
        <h1>Website Logo</h1>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Jobs</li>
            <li>Contact us</li>
            <li>Book a demo</li>
          </ul>
        </nav>

        <div className={styles.loginLinks}>
          <div className={styles.dropdown}>
            <span className={styles.dropbtn} style={{ paddingLeft: '100px' }}>
              Login
            </span>
            <div className={styles.dropdownContent}>
              <Link href="/login/job-seeker">Job seeker login</Link>
              <Link href="/login/job-giver">Job giver login</Link>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section
          className={styles.userPanel}
          style={{
            backgroundImage: `url("/rm373batch13-085.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={styles.userPanelText}>
            <h2>
              <span className={`${styles.boldText}`}>
                Find the Best Jobs and schools
              </span>
              <br />
              <span className={`${styles.regularText}`}>
                One of India's Most Comprehensive Job and Education Search
              </span>
            </h2>
          </div>

          <div className={styles.buttonContainer}>
            <button className={`${styles.getJobButton} ${styles.customButton}`}>
              <FaHandshakeAngle className={styles.icon} />
              <span className={styles.buttonText}>Get a Job</span>
            </button>
            <button className={`${styles.hireTalentButton} ${styles.customButton}`}>
              <FaChalkboardTeacher className={styles.icon} />
              <span className={styles.buttonText}>Hire Talent</span>
            </button>
          </div>

          <div
            className={styles.searchContainer}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <input
              type="text"
              className={`${styles.searchInput} searchInput`}
              placeholder="type job title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className={styles.searchButton}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px', // Adjust the size of the icon
              }}
              onClick={handleSearch}
            >
              <BsSearch /> {}
            </button>
          </div>
        </section>

        <div className={styles.wrapper}>
  <section className={styles.pointerSection}>
    <div className={styles.points}>
      <h2>What Job Seekers will get?</h2>
      <ul>
        <li>Free resume builder.</li>
        <li>Set free job alerts and get notified when matching jobs are posted.</li>
        <li>Create multiple job preferences and get relevant job suggestions as per the preferences created.</li>
        <li>Search for relevant jobs from thousands of posted jobs on JIE.</li>
        <li>Keep track of all scheduled interviews, demonstrations and assessments.</li>
        <li>Receive offer letters directly on the JIE portal from the employers.</li>
        {/* Add more points here */}
      </ul>
      <div className={styles.buttonsContainer}>
        <button className={styles.getJobButton}>Get a Job</button>
        <button className={styles.knowMoreButton}>Know More</button>
      </div>
    </div>
  </section>
  <div className={styles.videoSpace}>
    <video controls width="400" height="300">
      <source src="/Untitled.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>


<section className={styles.pointsSectionAlternate}>
  <div className={styles.pointsAlternate}>
    <div className={styles.pointsListAlternate}>
      <h2>What employers will get?</h2>
      <ul>
        <li>One account for multiple institutes under the same group.</li>
        <li>End-to-end hiring solution. Search, save, invite, shortlist, schedule interview rounds, select, and send offers to candidates.</li>
        <li>Find relevant candidates that match your requirement. The mapping is done using all the parameters that are provided in the job posts hence the candidates listed will always be a suitable match for the job requirement.</li>
        <li>Post jobs and receive applications directly from the candidates.</li>
        <li>No yearly subscription, pay as per the usage.</li>
        <li>Free Coins on sign-up.</li>
        {/* Add more points here */}
      </ul>
      <div className={styles.buttonsContainerAlternate}>
        <button className={styles.exploreButton}>Explore</button>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
    </div>
    <div className={styles.videoSpaceAlternate}>
      {/* You can add your video element or embed code here */}
    </div>
  </div>
</section>

<section className={styles.aboutJobsSection}>
  <div className={styles.aboutJobsContent}>
    <h2 className={styles.aboutJobsHeading}>About Jobs in Education</h2>
    <p className={styles.aboutJobsText}>
    Jobs In Education is a one-stop solution for teaching job and non-teaching job openings in Pre Schools, Schools, Colleges, Private Coaching, College/Universities, Vocational Institutes, Edtech and other educational institutions across India. Employers need access to a relevant pool of employees to meet their needs and vice-versa. Jobs in Education bridges the road to the talented teaching and non-teaching staff.
With over 18 years of experience in the education sector, knowledge, know-how and understanding of the pain points of the recruitment process in the prevailing educational institutions, we intend to save time and money by providing a simplified and integrated recruitment platform which allows relevant matchmaking between the stakeholders, with a short turnaround time. The platform pays equal attention to teaching joband non-teaching jobs.
You can browse from thousands of teacher jobs vacancies and apply for relevant jobs in the education sector near to you. Narrow your job search by part-time, full-time, remote, location, salary, and role to meet your requirements.

Jobs in Education, India's leading job portal, allows you to accelerate your search for a wide range of Teaching and Non-Teaching Jobs in your preferred locations. Register right now!
    </p>
  </div>
</section>



      </main>

      <footer className={styles.footer}>{/* Footer content */}</footer>
    </div>
  );
}
