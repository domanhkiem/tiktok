import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.frix7-1.fna.fbcdn.net/v/t1.6435-9/118404068_944685149358125_815730237661367438_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE4d_Y2J4h4JDtTXT_eJksGAJc8Q6HwN5gAlzxDofA3mOgKanuU-fkHDrKH8qc_pbeGXAIK1vA88ph514z6GRkG&_nc_ohc=UlodrOttT1IAX_NrAgr&_nc_ht=scontent.frix7-1.fna&oh=00_AfBeyhAukfiHoNE2TQhUIVU25YqnxvDftgGw6DDDzxI30g&oe=64496721"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
