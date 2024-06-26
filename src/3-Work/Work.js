import './work.css';
import './otheritem.css';
import OtherItem from './OtherItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight, BsBoxArrowUpRight } from 'react-icons/bs';
import Modal from './Modal/Modal';
import { useInView } from 'react-intersection-observer';
//Feature GIF's
import UnchaGif from '../Media/Gifs/UnchaGIF.gif';
import SnakeGif from '../Media/Gifs/SnakeGIF.gif';
import Tilt3DGif from '../Media/Gifs/Tilt3DGIF.gif';
import BubbleGumGif from '../Media/Gifs/BubbleGumGIF.gif';
// Feature Logos
import BubbleGumImg from '../Media/Images/projectImages/BubbleGumIMG.png';
import SnakeImg from '../Media/Images/projectImages/SnakeIMG.png';
import UnchaImg from '../Media/Images/projectImages/UnchaIMG.png';
import Tilt3DImg from '../Media/Images/projectImages/Tilt3DIMG.png';
// Other Logos
import ComingSoonLogo from '../Media/Images/other-work-icons/ComingSoonLogo.png';
import OldSiteLogo from '../Media/Images/other-work-icons/OldSiteLogo.png';
import TetrominosLogo from '../Media/Images/other-work-icons/Tetrominos.png';
import OrbitsLogo from '../Media/Images/other-work-icons/OrbitsLogo.png';
import BeemoLogo from '../Media/Images/other-work-icons/BeemoLogo.png';
import UncleHawaiiLogo from '../Media/Images/other-work-icons/UncleHawaiiLogo.png';
import PPortLogo from '../Media/Images/other-work-icons/pprevLogo.png';
import TBGif from '../Media/Images/other-work-icons/TBGIFLogo.gif';

function Work() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const navigate = useNavigate();
	const [port1, setPort1] = useState(false);
	const [port2, setPort2] = useState(false);
	const [port3, setPort3] = useState(false);
	const [port4, setPort4] = useState(false);
	const [modalID, setModalID] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	const [otherSepRef, otherSepInView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const [otherTitleRef, otherTitleInView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const [otherDescRef, otherDescInView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const otherData = [
		{
			id: 1,
			title: 'Prev. Portfolio',
			image: PPortLogo,
			github: 'https://github.com/seattletravis/seattletravis',
			link: 'https://seattletravis.com',
			largeTitle: false,
		},
		{
			id: 6,
			title: 'Apparel Shop',
			image: UncleHawaiiLogo,
			github: 'https://github.com/seattletravis',
			link: 'https://www.unclehawaii.com/',
			largeTitle: true,
		},
		{
			id: 2,
			title: 'Beemo Date & Time',
			image: BeemoLogo,
			github: 'https://github.com/seattletravis',
			link: 'https://travis.lamberte.com/clock/index.html',
			largeTitle: false,
		},
		{
			id: 3,
			title: 'Orbits',
			image: OrbitsLogo,
			github: 'https://github.com/seattletravis',
			link: 'https://travis.lamberte.com/orbit/index.html',
			largeTitle: false,
		},
		{
			id: 4,
			title: "90's Throwback",
			image: TBGif,
			github: 'https://github.com/seattletravis',
			link: 'https://travis.lamberte.com/throwback90s/index.html',
			largeTitle: false,
		},
		{
			id: 5,
			title: 'Tetrominos',
			image: TetrominosLogo,
			github: 'https://github.com/seattletravis',
			link: 'https://travis.lamberte.com/tetromino/index.html',
			largeTitle: false,
		},
		{
			id: 7,
			title: 'Old Website',
			image: OldSiteLogo,
			github: 'https://github.com/seattletravis',
			link: 'https://travis.lamberte.com',
			largeTitle: false,
		},
		{
			id: 8,
			title: 'More Coming Soon...',
			image: ComingSoonLogo,
			github: 'https://github.com/seattletravis',
			link: 'https://seattletravis.com',
			largeTitle: false,
		},
	];
	function handleOpenModal(id) {
		setModalID(id);
		setPort1(false);
		setPort2(false);
		setPort3(false);
		setPort4(false);
		setOpenModal(true);
	}
	return (
		<div className='work-container'>
			<Modal open={openModal} setOpenModal={setOpenModal} modalID={modalID} />
			<div className='port-wrapper'>
				<h1 className='port-header'>
					<span>M</span>
					<span>y</span>&nbsp;
					<span>P</span>
					<span>o</span>
					<span>r</span>
					<span>t</span>
					<span>f</span>
					<span>o</span>
					<span>l</span>
					<span>i</span>
					<span>o</span>
				</h1>
				<p className='port-description'>
					<span>A&nbsp;</span>
					<span>gallery&nbsp;</span>
					<span>of&nbsp;</span>
					<span>recent&nbsp;</span>
					<span>projects&nbsp;</span>
					<span>I've&nbsp;</span>
					<span>built.&nbsp;</span>
					<span onClick={() => navigate('/contact')}>Contact me</span>
					<span>&nbsp;for&nbsp;</span>
					<span>a&nbsp;</span>
					<span>complete&nbsp;</span>
					<span>code&nbsp;</span>
					<span>walkthrough.&nbsp;</span>
				</p>
				<div className='port-items'>
					{/* EVERYTHING BUBBLE GUM */}
					<div
						className='port-item'
						id='portItem1'
						onMouseEnter={() => setPort1(true)}
						onMouseLeave={() => setPort1(false)}>
						<div className='port-gif-box'>
							<div className='port-gif-wrapper'>
								<img
									className='port-gif'
									src={BubbleGumGif}
									alt='Bubble Gum Guessing Game'
									style={port1 ? { opacity: '1' } : { opacity: '0' }}
								/>
								<img
									className='port-gif port-gif-logo'
									src={BubbleGumImg}
									alt='BUbble Gum Guessing Game'
									style={port1 ? { opacity: '0' } : { opacity: '1' }}
								/>
							</div>
							<a
								href='https://travis.lamberte.com/bubbleGum/index.html'
								target='_blank'
								rel='noreferrer'>
								<div className='portGifPopup'>
									<p>Go to site</p>
									<BsBoxArrowUpRight id='goToSitePort' />
								</div>
							</a>
						</div>
						<div className='port-text-box'>
							<h1 className='port-title'>BubbleGum3D</h1>
							<a
								className='port-title-site'
								href='https://travis.lamberte.com/bubbleGum/index.html'
								target='_blank'
								rel='noreferrer'>
								https://travis.lamberte.com/bubblegum/index.html
							</a>
							<p className='port-headline'>
								A fully immersive 3D environment game build with ThreeJS, and a
								physics engine.
							</p>
							<div className='port-btn-box'>
								<div
									className='port-btn-more'
									onClick={() => handleOpenModal(1)}>
									<span id='port-more-text'>More Details</span>
									<BsArrowRight id='port-more-arrow' />
								</div>
							</div>
						</div>
					</div>
					{/* EVERYTHING TILT3D */}
					<div
						className='port-item'
						id='portItem2'
						onMouseEnter={() => setPort2(true)}
						onMouseLeave={() => setPort2(false)}>
						<div className='port-gif-box'>
							<div className='port-gif-wrapper'>
								<img
									className='port-gif'
									src={Tilt3DGif}
									alt='Tilt3D Image'
									style={port2 ? { opacity: '1' } : { opacity: '0' }}
								/>
								<img
									className='port-gif port-gif-logo'
									src={Tilt3DImg}
									alt='Tilt3D Image'
									style={port2 ? { opacity: '0' } : { opacity: '1' }}
								/>
							</div>
							<a
								href='https://travis.lamberte.com/tilt3dSinglePlayer/index.html'
								target='_blank'
								rel='noreferrer'>
								<div className='portGifPopup'>
									<p>Go to site</p>
									<BsBoxArrowUpRight id='goToSitePort' />
								</div>
							</a>
						</div>
						<div className='port-text-box'>
							<h1 className='port-title'>
								Tilt3D<span>&trade;</span>
							</h1>
							<a
								className='port-title-site'
								href='https://travis.lamberte.com/tilt3dSinglePlayer/index.html'
								target='_blank'
								rel='noreferrer'>
								https://travis.lamberte.com/tilt3dSinglePlayer/index.html
							</a>
							<p className='port-headline'>
								Let's push ThreeJS to it's limits with this Jenga Style game
								built in a fully immersive 3D environment.
							</p>
							<div className='port-btn-box'>
								<div
									className='port-btn-more'
									onClick={() => handleOpenModal(2)}>
									<span id='port-more-text'>More Details</span>
									<BsArrowRight id='port-more-arrow' />
								</div>
							</div>
						</div>
					</div>
					{/* EVERYTHING SNAKE EATS BOIDS */}
					<div
						className='port-item'
						id='portItem3'
						onMouseEnter={() => setPort3(true)}
						onMouseLeave={() => setPort3(false)}>
						<div className='port-gif-box'>
							<div className='port-gif-wrapper'>
								<img
									className='port-gif'
									src={SnakeGif}
									alt='Snake Eats Boids Image'
									style={port3 ? { opacity: '1' } : { opacity: '0' }}
								/>
								<img
									className='port-gif port-gif-logo'
									src={SnakeImg}
									alt='Snake Eats Boids Image'
									style={port3 ? { opacity: '0' } : { opacity: '1' }}
								/>
							</div>
							<a
								href='https://lambertedesign.com'
								target='_blank'
								rel='noreferrer'>
								<div className='portGifPopup'>
									<p>Go to site</p>
									<BsBoxArrowUpRight id='goToSitePort' />
								</div>
							</a>
						</div>
						<div className='port-text-box'>
							<h1 className='port-title'>
								Snake Eats Boids<span>&trade;</span>
							</h1>
							<a
								className='port-title-site'
								href='https://lambertedesign.com'
								target='_blank'
								rel='noreferrer'>
								https://lambertedesign.com
							</a>
							<p className='port-headline'>
								Boid AI Flocking Implementation in the food objects of this
								classic snake game.
							</p>
							<div className='port-btn-box'>
								<div
									className='port-btn-more'
									onClick={() => handleOpenModal(3)}>
									<span id='port-more-text'>More Details</span>
									<BsArrowRight id='port-more-arrow' />
								</div>
							</div>
						</div>
					</div>
					{/* EVERYTHING UNCHA */}
					<div
						className='port-item'
						id='portItem4'
						onMouseEnter={() => setPort4(true)}
						onMouseLeave={() => setPort4(false)}>
						<div className='port-gif-box'>
							<div className='port-gif-wrapper'>
								<img
									className='port-gif'
									src={UnchaGif}
									alt='Grocery Magix Gif'
									style={port4 ? { opacity: '1' } : { opacity: '0' }}
								/>
								<img
									className='port-gif port-gif-logo'
									src={UnchaImg}
									alt='Grocery Magix Logo'
									style={port4 ? { opacity: '0' } : { opacity: '1' }}
								/>
							</div>
							<a
								href='https://github.com/seattletravis/bg_remover_Part_6/'
								target='_blank'
								rel='noreferrer'>
								<div className='portGifPopup'>
									<p>Go to site</p>
									<BsBoxArrowUpRight id='goToSitePort' />
								</div>
							</a>
						</div>
						<div className='port-text-box'>
							<h1 className='port-title'>Uncha Image Tool</h1>
							<a
								className='port-title-site'
								href='https://github.com/seattletravis/Uncha/'
								target='_blank'
								rel='noreferrer'>
								https://github.com/seattletravis/Uncha/
							</a>
							<p className='port-headline'>
								A powerful Window's application to remove backgrounds from the
								PNG images in a directory.
							</p>
							<div className='port-btn-box'>
								<div
									className='port-btn-more'
									onClick={() => handleOpenModal(4)}>
									<span id='port-more-text'>More Details</span>
									<BsArrowRight id='port-more-arrow' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className='other-separator'
				ref={otherSepRef}
				id={otherSepInView ? 'education-separator-active' : undefined}></div>
			<div className='other-wrapper'>
				<h1
					className='other-header'
					ref={otherTitleRef}
					id={otherTitleInView ? 'certTitle-active' : undefined}>
					<span>O</span>
					<span>t</span>
					<span>h</span>
					<span>e</span>
					<span>r</span>&nbsp;
					<span>W</span>
					<span>o</span>
					<span>r</span>
					<span>k</span>
				</h1>
				<p
					className='other-description'
					ref={otherDescRef}
					id={otherDescInView ? 'otherDesc-active' : undefined}>
					More of my projects.
				</p>
				<div className='other-items'>
					{otherData.map((data) => (
						<OtherItem key={data.id} data={data} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Work;
