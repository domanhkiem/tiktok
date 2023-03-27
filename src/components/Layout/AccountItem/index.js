import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/118404068_944685149358125_815730237661367438_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE4d_Y2J4h4JDtTXT_eJksGAJc8Q6HwN5gAlzxDofA3mOgKanuU-fkHDrKH8qc_pbeGXAIK1vA88ph514z6GRkG&_nc_ohc=tfe1ONmhdWUAX-E3mwU&_nc_ht=scontent-lga3-2.xx&oh=00_AfB2AOqqaeGxUItb_RXp40RJZs6KlrhmaUODf5EQVq5osA&oe=64492EE1"
                alt=""
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
