import './about.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PDF_Icon from '../Media/Images/pdf.png';
import GoogleDocs_Icon from '../Media/Images/googleDocs.png';

function About() {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='about-container'>
				<div className='about-left-box'>
					<h1 className='about-left-title'>
						<span id='letterHi' Class='easeInOut'>
							H
						</span>
						<span id='letterhI' Class='easeInOut'>
							i
						</span>
						<span id='letterComma' Class='easeInOut'>
							!
						</span>
						<br />
						{/* <br /> */}
						<span id='letterIm' Class='easeInOut'>
							I
						</span>
						<span id='letterApos' Class='easeInOut'>
							'
						</span>
						<span id='letteriM' Class='easeInOut'>
							m
						</span>
						&nbsp;
						<span id='letterJonathan' Class='easeInOut'>
							J
						</span>
						<span id='letterjOnathan' Class='easeInOut'>
							o
						</span>
						<span id='letterjoNathan' Class='easeInOut'>
							n
						</span>
						<span id='letterjonAthan' Class='easeInOut'>
							a
						</span>
						<span id='letterjonaThan' Class='easeInOut'>
							t
						</span>
						<span id='letterjonatHan' Class='easeInOut'>
							h
						</span>
						<span id='letterjonathAn' Class='easeInOut'>
							a
						</span>
						<span id='letterjonathaN' Class='easeInOut'>
							n
						</span>
						<span id='lettertravisComma' Class='easeInOut'>
							,
						</span>
						<br />
						<span id='letterNoc' Class='easeInOut'>
							N
						</span>
						<span id='letternOc' Class='easeInOut'>
							O
						</span>
						<span id='letternoC' Class='easeInOut'>
							C
						</span>
						&nbsp;
						<span id='letterfulLstack' Class='easeInOut'>
							T
						</span>
						<span id='letterfullStack' Class='easeInOut'>
							e
						</span>
						<span id='letterfullsTack' Class='easeInOut'>
							c
						</span>
						<span id='letterfullstAck' Class='easeInOut'>
							h
						</span>
						<span id='letterfullstaCk' Class='easeInOut'>
							n
						</span>
						<span id='letterfullstacK' Class='easeInOut'>
							i
						</span>
						<span id='letterSoftware' Class='easeInOut'>
							c
						</span>
						<span id='lettersOftware' Class='easeInOut'>
							i
						</span>
						<span id='lettersoFtware' Class='easeInOut'>
							a
						</span>
						<span id='lettersofTware' Class='easeInOut'>
							n
						</span>
						<br />
					</h1>
					<p className='about-left-description'>
						Strong Technical Communication Skills
					</p>
					<div className='about-left-button-box'>
						<button
							onClick={() => navigate('/contact')}
							className='about-contact-button'>
							Contact me!
						</button>
						<div className='about-resume-box'>
							<h2 className='about-resume-title'>My Resume:</h2>
							<div className='about-resume-buttons-wrapper'>
								<a href='Travis_Lamberte_Resume.pdf' download>
									<img src={PDF_Icon} alt='PDF' className='about-resume-pdf' />
								</a>
								<a
									href='https://1drv.ms/w/c/d19ec194c3fe1971/EXEZ_sOUwZ4ggNFKFQAAAAABlehbB7DRaYfIbOEAnwyU9Q?e=KAfKMJ'
									target='_blank'
									rel='noreferrer'>
									<img
										src={GoogleDocs_Icon}
										alt='Google Docs'
										className='about-resume-googleDocs'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='about-right-box'>
					<div className='about-right-title'>About Me:</div>
					<p className='about-right-description'>
						I'm a NOC Technician. 
						<br />
						<br />
						It's important for me to keep learning new technologies and to keep
						learning more on my existing knowledge base. I enjoy challenging
						myself with{' '}
						<span onClick={() => navigate('/projects')}>projects</span>
						&nbsp; that require me to become a better Network & Cloud Technician.
						<br />
						<br />Thing I enjoy are Soccer, Spanish Music, Old School Rock, Hiking, 
						Watching moveis, and Lifting weights. I'm bilingual native Spanish and
						 Professional English. Also a US Citizen with a valid driver licenses.
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
