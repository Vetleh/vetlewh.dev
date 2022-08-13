import QueueAnim from 'rc-queue-anim';
import Arrow from '../../../images/right-arrow.png';
import './More.css';

function More() {
	return (
		<QueueAnim
			delay={500}
			type={'bottom'}
			className='queue-simple'
			duration={1000}>
			<img key={'a'} className='arrow' src={Arrow}></img>
		</QueueAnim>
	);
}

export default More;
