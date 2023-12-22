import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

function Popper({ className, children }) {
  return <div className={cx('wrapper', className)}>{children}</div>
}

Popper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Popper