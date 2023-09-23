import styled from 'styled-components';
import VideoCource from './VideoCource';
import { BiDownArrowCircle } from 'react-icons/bi';

const Home = () => {
    return (
        <Wrapper>
            <VideoCource />
            <div className='app-download-section flex justify-between items-center md:hidden  py-3 px-10 w-full'>
                <div className='left text-3xl font-semibold text-gray-600'>Open in App</div>
                <div className='right flex justify-center items-center gap-2 text-2xl font-semibold bg-[#f64d1a] text-white py-3 px-4 rounded-full'>
                    <div className='text-3xl'>
                        <BiDownArrowCircle />
                    </div>
                    <a href='https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks' target='_blank' rel='noreferrer'>
                        Download App
                    </a>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .app-download-section {
        position: sticky;
        bottom: 0;
        left: 0;
        background-color: #ffedd5;
    }
`;

export default Home;
