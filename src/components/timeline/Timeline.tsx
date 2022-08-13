// @ts-nocheck
import { Timeline, Event } from 'react-timeline-scribble';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

function TimelineComponent() {
	return (
		<OverPack playScale={0}>
			<QueueAnim key='queue' delay={100} type={'left'} duration={2000}>
				<div key={'a'}>
					<Timeline>
						<Event
							interval={'2018 – 2021'}
							title={'Computer engineer'}
							subtitle={'B.S - NTNU - Trondheim'}></Event>
						<Event
							interval={'2021 – 2023'}
							title={'Computer science'}
							subtitle={'M.S - NTNU - Trondheim'}>
							<strong>Spesialization - Algorithms and computers:</strong>
							<br></br> Methods and techniques that can be applied to develop
							high performance systems.
						</Event>
					</Timeline>
				</div>
			</QueueAnim>
		</OverPack>
	);
}
export default TimelineComponent;
