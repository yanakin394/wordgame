import { ThreeDots } from 'react-loader-spinner';
import style from '../Loader/style.module.scss';

function Loader() {
    return (
        <div className={style.loader__container}>
                <p className={style.loader__msg}>Cards are loading, please, wait.</p>
                <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#0d8067" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        
    );
}

export default Loader;