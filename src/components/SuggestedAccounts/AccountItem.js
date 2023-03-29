import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.frix7-1.fna.fbcdn.net/v/t1.6435-9/118404068_944685149358125_815730237661367438_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE4d_Y2J4h4JDtTXT_eJksGAJc8Q6HwN5gAlzxDofA3mOgKanuU-fkHDrKH8qc_pbeGXAIK1vA88ph514z6GRkG&_nc_ohc=UlodrOttT1IAX_NrAgr&_nc_ht=scontent.frix7-1.fna&oh=00_AfBeyhAukfiHoNE2TQhUIVU25YqnxvDftgGw6DDDzxI30g&oe=64496721"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>domanhkiem</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Đỗ Mạnh Kiếm</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
