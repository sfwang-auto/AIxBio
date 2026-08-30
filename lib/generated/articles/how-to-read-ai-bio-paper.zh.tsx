// @ts-nocheck
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "示例文章"
        }), "：这是可复制的短篇论文笔记模板。"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "先找生物学问题",
      children: "先找生物学问题"
    }), "\n", _jsx(_components.p, {
      children: "不要从模型架构图开始。先用一句话写下研究者试图测量、预测或干预的生物学对象，再标记实验数据与计算代理目标之间的距离。"
    }), "\n", _jsx(_components.h2, {
      id: "再检查数据边界",
      children: "再检查数据边界"
    }), "\n", _jsx(_components.p, {
      children: "样本来自哪些组织、物种、平台和批次？训练集与测试集是否通过患者、供体或同源关系发生了隐性重叠？这些问题决定了结果可以被外推到哪里。"
    }), "\n", _jsx(_components.h2, {
      id: "最后才看排行榜",
      children: "最后才看排行榜"
    }), "\n", _jsx(_components.p, {
      children: "把基线、消融实验和失败案例放在同一张表中。一个模型的价值不仅来自平均分，还来自它能否提出可验证的新假设。"
    })]
  });
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
