import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">今日心情</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
