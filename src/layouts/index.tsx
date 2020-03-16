import './index.less'

export default function BasicLayout(props) {
  return (
    <div>
      {/* <header className="text-center">全局layout头部</header> */}
      {props.children}
      {/* <footer className="text-center">全局layout底部</footer> */}
    </div>
  );
}