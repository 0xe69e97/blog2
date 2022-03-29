/** @jsxImportSource theme-ui */
import { Link } from 'react-router-dom'
import data from "./data"
import ContentWithAside from "./ContentWithAside"

function Content() {
  // 将静态数据分割为两个部分，按照日期进行排序
  // 第一部分进行不是固定顺序排序
  const sortA = data.filter(item => !item.pinned).sort((a, b) => +new Date(b.date) - +new Date(a.date))
  // 第二部分进行是固定顺序的排序
  const sortB = data.filter(item => item.pinned).sort((a, b) => +new Date(b.date) - +new Date(a.date))
  // 链接数组，进行渲染
  const list = [...sortB, ...sortA]
  return (
    <>
      {list.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </>
  )
}

function Item({ title, date, url, type, description, pinned, path }) {
  const formattedDate = new Date(date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  console.log(path)
  return (
    <div
      sx={{
        my: [4, 5],
        "& aside": { transition: "color 0.25s" },
        "&:hover aside": { color: ["none", "#fff"] },
      }}
    >
      <ContentWithAside
        main={
          <Link
            to={path ?? '/'}
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h3 sx={{ my: [1, 0] }}>{title}</h3>
            {description && (
              <p sx={{ fontSize: "16px", opacity: 0.8, m: 0, pt: [0, 1] }}>
                {description}
              </p>
            )}
          </Link>
        }
        aside={
          <div sx={{ verticalAlign: "bottom", opacity: [0.8, 1], pt: [0, 1] }}>
            <h4
              sx={{
                textTransform: "uppercase",
                m: 0,
                fontSize: [1, 2],
                fontWeight: [700, 900],
                display: ["inline", "block"],
              }}
            >
              {pinned && <Pin />} {type}
            </h4>
            <small sx={{ ml: [2, 0] }}>{formattedDate}</small>
          </div>
        }
      />
    </div>
  )
}

function Pin() {
  return (
    <svg viewBox="0 0 24 24" style={{ height: "1em", verticalAlign: "middle" }}>
      <title>Pinned Project</title>
      <path
        d="M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242a.763.763 0 00.037-.787.762.762 0 00-.675-.403h-9.14a.765.765 0 00-.638 1.191l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116a.726.726 0 00.132.594c.103.132.304.29.68.29H8.64l2.904 6.712a.498.498 0 00.918 0l2.903-6.713h4.057c.376 0 .576-.156.68-.286a.74.74 0 00.135-.59z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export default Content
