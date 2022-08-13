import './Socials.css';
import github from '../../../images/GitHub-Mark-120px-plus.png';
import linkedin from '../../../images/LI-In-Bug.png';
import gmail from '../../../images/gmail.png';
import QueueAnim from 'rc-queue-anim';

function Socials() {
	return (
		<QueueAnim
			delay={500}
			type={'bottom'}
			className='queue-simple'
			duration={1000}>
			<div key={'a'}>
				<img alt='Link to Github' className='social-image' src={github}></img>
				<a href='https://www.linkedin.com/in/vetle-harnes-aa1b2a170/'>
					<img
						alt='Link to LinkedIn'
						className='social-image'
						src={linkedin}></img>
				</a>
				<img alt='Send me an email!' className='social-image' src={gmail}></img>
			</div>
		</QueueAnim>
	);
}

export default Socials;
