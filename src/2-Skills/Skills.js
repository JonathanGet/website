import './skills.css';
import { useState, useEffect } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { GiClick } from 'react-icons/gi';
import ReactImg from '../Media/Images/skills/react.png';
import JavascriptImg from '../Media/Images/skills/javascript.png';
import CSSImg from '../Media/Images/skills/css.png';
import NodeImg from '../Media/Images/skills/node.png';
import SQLImg from '../Media/Images/skills/sql.png';
import DjangoImg from '../Media/Images/skills/Django.png';
import GoImg from '../Media/Images/skills/go.png';
import Cisco from '../Media/Images/skills/Cisco.jpg';
import Cisco2 from '../Media/Images/skills/CCNA-Logo-.jpg'
import PythonImg from '../Media/Images/skills/python.png';
import JavaImg from '../Media/Images/skills/java.png';
import CWUImg from '../Media/Images/cwu_logo.png';
import MetaImg from '../Media/Images/meta_logo.png';
import GoogleImg from '../Media/Images/google_logo.png';
import IBMImg from '../Media/Images/IBM_logo.png';
import Azure from '../Media/Images/Azure-900.png';
import cwuDiploma from '../Media/Images/cwuDiploma.png';
import TypeWriterEffect from 'react-typewriter-effect';
import { useInView } from 'react-intersection-observer';

function Skills() {
	useEffect(() => window.scrollTo(0, 0), []);
	const [mouse1, setMouse1] = useState(false);
	const [mouse2, setMouse2] = useState(false);
	const [mouse3, setMouse3] = useState(false);
	const [mouse4, setMouse4] = useState(false);
	const [cert, setCert] = useState(false);
	const [edSepRef, edSepInView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const [edTitleRef, edTitleInView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const [ed1Ref, ed1InView] = useInView({ threshold: 0, triggerOnce: true });
	const [ed2Ref, ed2InView] = useInView({ threshold: 0, triggerOnce: true });
	const [ed3Ref, ed3InView] = useInView({ threshold: 0, triggerOnce: true });
	const [ed4Ref, ed4InView] = useInView({ threshold: 0, triggerOnce: true });
	return (
		<div className='skills-container'>
			<div className='skills-wrapper'>
				<h1 className='skills-header'>
					<span>T</span>
					<span>e</span>
					<span>c</span>
					<span>h</span>
					<span>n</span>
					<span>i</span>
					<span>c</span>
					<span>a</span>
					<span>l</span>
					&nbsp;
					<span>E</span>
					<span>x</span>
					<span>p</span>
					<span>e</span>
					<span>r</span>
					<span>t</span>
					<span>i</span>
					<span>s</span>
					<span>e</span>
				</h1>
				<p className='skills-description'>
					<TypeWriterEffect
						startDelay={1000}
						cursorColor='white'
						text="I'm a fast learner who uses documentation and online resources to build clean, reusable, and easy to read code."
						typeSpeed={35}
						hideCursorAfterText={true}
					/>
				</p>
				<div className='skills-box'>
					<h1 className='skills-title'>Frontend</h1>
					<div className='skills-content'>
						<div id='ReactSkill' className='skills-item'>
							<img src={ReactImg} alt='React' />
							<h2>React JS</h2>
							<p>Seasoned React Developer</p>
						</div>
						<div id='JavascriptSkill' className='skillSeparator'></div>
						<div id='JavascriptSkill' className='skills-item'>
							<img src={JavascriptImg} alt='Javascript' />
							<h2>Javascript</h2>
							<p>Very strong JavaScript fundamentals.</p>
						</div>

						<div
							id='CSSSkill'
							className='skillSeparator hiddenSkillSeparator'></div>
						<div id='CSSSkill' className='skills-item responsiveSkillsItem3'>
							<img src={CSSImg} alt='CSS' />
							<h2>CSS</h2>
							<p>
								I stay current on new CSS features to get the most out of the
								latest updates.
							</p>
						</div>
					</div>
				</div>
				<div className='skills-box'>
					<h1 className='skills-title'>Backend</h1>
					<div className='skills-content'>
						<div id='NodeSkill' className='skills-item'>
							<img src={NodeImg} alt='Node JS' />
							<h2>Node JS</h2>
							<p>Proficient Node Developer.</p>
						</div>
						<div id='SQLSkill' className='skillSeparator'></div>
						<div id='SQLSkill' className='skills-item'>
							<img src={SQLImg} alt='SQL' />
							<h2>SQL</h2>
							<p>Strong SQL skills and great database design fundamentals.</p>
						</div>
						<div
							id='DjangoSkill'
							className='skillSeparator hiddenSkillSeparator'></div>
						<div id='DjangoSkill' className='skills-item responsiveSkillsItem1'>
							<img src={DjangoImg} alt='Django' />
							<h2>Django</h2>
							<p>Seasoned Django Developer</p>
						</div>
					</div>
				</div>
				<div className='skills-box'>
					<h1 className='skills-title'>Networking</h1>
					<div className='skills-content'>
						<div id='Cisco' className='skills-item'>
							<img src={Cisco} alt='Cisco' />
							<h2>Cisco</h2>
							<p>Proficient in Cisco Terminal.</p>
						</div>
						<div id='PythonSkill' className='skillSeparator'></div>
						<div id='PythonSkill' className='skills-item'>
							<img src={PythonImg} alt='Python' />
							<h2>Python</h2>
							<p>Strong Python skills and data structure fundamentals.</p>
						</div>
						<div
							id='JavaSkill'
							className='skillSeparator hiddenSkillSeparator'></div>
						<div id='JavaSkill' className='skills-item responsiveSkillsItem1'>
							<img src={JavaImg} alt='Java' />
							<h2>Java</h2>
							<p>Functional Java Skills</p>
						</div>
					</div>
				</div>
			</div>

			<div
				className='education-separator'
				ref={edSepRef}
				id={edSepInView ? 'education-separator-active' : undefined}></div>
			<div className='education-wrapper'>
				<h1
					className='education-header'
					ref={edTitleRef}
					id={edTitleInView ? 'certTitle-active' : undefined}>
					<span>E</span>
					<span>d</span>
					<span>u</span>
					<span>c</span>
					<span>a</span>
					<span>t</span>
					<span>i</span>
					<span>o</span>
					<span>n</span>&nbsp;
					<span>a</span>
					<span>n</span>
					<span>d</span>&nbsp;
					<span>C</span>
					<span>e</span>
					<span>r</span>
					<span>t</span>
					<span>i</span>
					<span>f</span>
					<span>i</span>
					<span>c</span>
					<span>a</span>
					<span>t</span>
					<span>i</span>
					<span>o</span>
					<span>n</span>
					<span>s</span>
				</h1>
				<div className='cert-items'>
					<div
						className='cwu-item'
						ref={ed1Ref}
						id={ed1InView ? 'cert1-active' : undefined}
						onMouseEnter={() => setMouse1(true)}
						onMouseLeave={() => setMouse1(false)}>
						<div
							className='cwu-img-wrapper'
							onMouseEnter={() => setMouse1(false)}
							onMouseLeave={() => setMouse1(true)}
							onClick={() => setCert(!cert)}>
							<div className='cwu-images'>
								<img
									className='cwu-img'
									src={CWUImg}
									alt='CWU'
									style={cert ? { opacity: '0' } : { opacity: '1' }}
								/>
								<img
									className='cwu-img'
									src={cwuDiploma}
									alt='CWU School of Science'
									style={cert ? { opacity: '1' } : { opacity: '0' }}
								/>
							</div>
							<GiClick id={mouse1 ? 'cwu-pointer' : 'cwu-pointer-gone'} />
							<div className='cwu-img-hover-box'>
								<h1 style={cert ? { opacity: '1' } : { opacity: '0' }}>
									Click to hide certificate
								</h1>
								<h1 style={cert ? { opacity: '0' } : { opacity: '1' }}>
									Click to view certificate
								</h1>
							</div>
						</div>
						<div className='cwu-text-box'>
							<h3>Ellensburg, WA</h3>
							<h1>BS in Chemistry & Minor in Math</h1>
							<h4>Central Washington University</h4>
							<p>
								A rounded education in advanced areas of science including
								Chemistry, Math, Computer Science, Physics, Engineering,
								Biology, and Education.
							</p>
							<div className='cwu-description-box'>
								<p>As a student:</p>
								<ul>
									<li>Studied multiple scientific areas</li>
									<li>Participated in Undergraduate Research</li>
									<li>Made math studies a priority</li>
									<li>Learned ways to solve complex problems</li>
								</ul>
							</div>
							<p>
								Conducted undergraduate research on C60 Buckminsterfullerene
								nanoparticles and their toxicity on biological systems. Research
								included imaging nanoparticles using scanning tunneling
								microscopy.
							</p>
						</div>
					</div>
					<div
						ref={ed4Ref}
						className='cert-item'
						id={ed4InView ? 'cert4-active' : undefined}
						onMouseEnter={() => setMouse3(true)}
						onMouseLeave={() => setMouse3(false)}>
						<a
							href='https://learn.microsoft.com/api/credentials/share/en-us/JonathanRamos-2077/63370EC20EDB199E?sharingId=4A9ADC1BB4D6896C'
							target='_blank'
							rel='noreferrer'>
							<div
								className='cert-img-wrapper'
								onMouseEnter={() => setMouse3(false)}
								onMouseLeave={() => setMouse3(true)}>
								<img
									className='cert-img'
									src={Azure}
									alt='Azure 900'
								/>
								<GiClick id={mouse3 ? 'cert-pointer' : 'cert-pointer-gone'} />
								<div className='cert-img-hover-box'>
									<h1>View certificate</h1>
									<BsBoxArrowUpRight id='cert-arrow' />
								</div>
							</div>
						</a>
						<div className='cert-text-box'>
							<h1 className='cert-title'>Azure Fundamentals</h1>
							<p>
								The Microsoft Professional Certification for Azure Fundamentals.
							</p>
						</div>
					</div>
					<div
						ref={ed2Ref}
						className='cert-item'
						id={ed2InView ? 'cert2-active' : undefined}
						onMouseEnter={() => setMouse2(true)}
						onMouseLeave={() => setMouse2(false)}>
						<a
							href='https://cp.certmetrics.com/cisco/en/public/verify/credential/f44e23e38d704c7987f5986a03afaa72'
							target='_blank'
							rel='noreferrer'>
							<div
								className='cert-img-wrapper'
								onMouseEnter={() => setMouse2(false)}
								onMouseLeave={() => setMouse2(true)}>
								<img className='cert-img' src={Cisco2} alt='AWS' />
								<GiClick id={mouse2 ? 'cert-pointer' : 'cert-pointer-gone'} />
								<div className='cert-img-hover-box'>
									<h1>View certificate</h1>
									<BsBoxArrowUpRight id='cert-arrow' />
								</div>
							</div>
						</a>
						<div className='cert-text-box'>
							<h1 className='cert-title'>Cisco CCNA 200-301 Certified</h1>
							<p>
							The Cisco Certified Network Associe.
							</p>
						</div>
					</div>
					<div
						ref={ed3Ref}
						className='cert-item'
						id={ed3InView ? 'cert3-active' : undefined}
						onMouseEnter={() => setMouse3(true)}
						onMouseLeave={() => setMouse3(false)}>
						<a
							href='https://coursera.org/share/915698565a35c0b029c5e759531b0a76'
							target='_blank'
							rel='noreferrer'>
							<div
								className='cert-img-wrapper'
								onMouseEnter={() => setMouse3(false)}
								onMouseLeave={() => setMouse3(true)}>
								<img
									className='cert-img'
									src={GoogleImg}
									alt='Comptia Security +'
								/>
								<GiClick id={mouse3 ? 'cert-pointer' : 'cert-pointer-gone'} />
								<div className='cert-img-hover-box'>
									<h1>View certificate</h1>
									<BsBoxArrowUpRight id='cert-arrow' />
								</div>
							</div>
						</a>
						<div className='cert-text-box'>
							<h1 className='cert-title'>Google IT Support</h1>
							<p>Google's Professional Certificate for IT professionals.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
