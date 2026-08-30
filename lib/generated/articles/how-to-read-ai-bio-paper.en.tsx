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
          children: "Demo article:"
        }), " This is a reusable short-form paper-note template."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "start-with-the-biological-question",
      children: "Start with the biological question"
    }), "\n", _jsx(_components.p, {
      children: "Do not begin with the architecture diagram. First write one sentence describing the biological object the researchers want to measure, predict, or intervene on. Then mark the distance between experimental evidence and the computational proxy."
    }), "\n", _jsx(_components.h2, {
      id: "inspect-the-data-boundary",
      children: "Inspect the data boundary"
    }), "\n", _jsx(_components.p, {
      children: "Which tissues, species, platforms, and batches produced the samples? Do train and test sets overlap through patients, donors, or homology? These details determine how far the result can travel."
    }), "\n", _jsx(_components.h2, {
      id: "read-the-leaderboard-last",
      children: "Read the leaderboard last"
    }), "\n", _jsx(_components.p, {
      children: "Put baselines, ablations, and failure cases in the same table. A model’s value is not only its average score, but also whether it produces hypotheses that can be tested."
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
