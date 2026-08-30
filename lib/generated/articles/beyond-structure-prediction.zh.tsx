// @ts-nocheck
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    math: "math",
    mi: "mi",
    mo: "mo",
    mrow: "mrow",
    msub: "msub",
    mtext: "mtext",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    sup: "sup",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "示例文章"
        }), "：本文用于展示 AI × Bio 的写作、公式、代码和引用能力。正式发布前请用你的研究笔记替换或扩展。"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "从预测问题换一个角度",
      children: "从预测问题换一个角度"
    }), "\n", _jsxs(_components.p, {
      children: ["蛋白质结构预测常被描述为从序列 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "s"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "s"
              })]
            })
          })
        }), _jsx(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "s"
            })]
          })
        })]
      }), " 到三维坐标 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "x"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "x"
              })]
            })
          })
        }), _jsx(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "x"
            })]
          })
        })]
      }), " 的映射："]
    }), "\n", _jsx(_components.span, {
      className: "katex-display",
      children: _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "p"
                  }), _jsx(_components.mi, {
                    children: "θ"
                  })]
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "x"
                }), _jsx(_components.mo, {
                  children: "∣"
                }), _jsx(_components.mi, {
                  children: "s"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mo, {
                  children: "∫"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "p"
                  }), _jsx(_components.mi, {
                    children: "θ"
                  })]
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "x"
                }), _jsx(_components.mo, {
                  children: "∣"
                }), _jsx(_components.mi, {
                  children: "z"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "s"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "p"
                  }), _jsx(_components.mi, {
                    children: "θ"
                  })]
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "z"
                }), _jsx(_components.mo, {
                  children: "∣"
                }), _jsx(_components.mi, {
                  children: "s"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), _jsx(_components.mtext, {
                  children: " "
                }), _jsx(_components.mi, {
                  children: "d"
                }), _jsx(_components.mi, {
                  children: "z"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "p_\\theta(x\\mid s)=\\int p_\\theta(x\\mid z,s)p_\\theta(z\\mid s)\\,dz"
              })]
            })
          })
        }), _jsxs(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [_jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsx(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.02778em"
                            },
                            children: "θ"
                          })
                        })]
                      })
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "∣"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "="
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "2.2222em",
                verticalAlign: "-0.8622em"
              }
            }), _jsx(_components.span, {
              className: "mop op-symbol large-op",
              style: {
                marginRight: "0.44445em",
                position: "relative",
                top: "-0.0011em"
              },
              children: "∫"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsx(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.02778em"
                            },
                            children: "θ"
                          })
                        })]
                      })
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "∣"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            }), _jsx(_components.span, {
              className: "mpunct",
              children: ","
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsx(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.02778em"
                            },
                            children: "θ"
                          })
                        })]
                      })
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "∣"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            })]
          })]
        })]
      })
    }), "\n", _jsx(_components.p, {
      children: "但对包含蛋白质、核酸、小分子与离子的复合体系而言，模型面对的并不只是“坐标回归”。它还必须学习哪些实体可能相互作用、局部几何如何受化学约束，以及数据分布中哪些偏差会被当成规律。"
    }), "\n", _jsx(_components.h2, {
      id: "三个阅读问题",
      children: "三个阅读问题"
    }), "\n", _jsx(_components.h3, {
      id: "1-表示里已经写入了什么",
      children: "1. 表示里已经写入了什么？"
    }), "\n", _jsxs(_components.p, {
      children: ["原子类型、键连接、残基编号和模板信息都不是中性的输入。阅读模型论文时，应先区分模型", _jsx(_components.strong, {
        children: "学到"
      }), "的结构与研究者在表示中", _jsx(_components.strong, {
        children: "预先编码"
      }), "的结构。"]
    }), "\n", _jsx(_components.h3, {
      id: "2-目标函数奖励了什么",
      children: "2. 目标函数奖励了什么？"
    }), "\n", _jsx(_components.p, {
      children: "扩散模型可以把坐标生成写成逐步去噪。一个极简的伪代码是："
    }), "\n", _jsx(_components.pre, {
      children: _jsxs(_components.code, {
        className: "hljs language-python",
        children: [_jsx(_components.span, {
          className: "hljs-keyword",
          children: "for"
        }), " t ", _jsx(_components.span, {
          className: "hljs-keyword",
          children: "in"
        }), " ", _jsx(_components.span, {
          className: "hljs-built_in",
          children: "reversed"
        }), "(noise_schedule):\n    score = model(noisy_coordinates, tokens, t)\n    noisy_coordinates = denoise(noisy_coordinates, score, t)\n"]
      })
    }), "\n", _jsx(_components.p, {
      children: "最终指标很高，并不自动意味着模型理解了结合自由能、构象动力学或细胞环境。"
    }), "\n", _jsx(_components.h3, {
      id: "3-失败发生在哪里",
      children: "3. 失败发生在哪里？"
    }), "\n", _jsx(_components.p, {
      children: "真正有信息量的问题通常是：模型在哪些分子类别、构象状态或分布外样本上失效？失败模式比单一平均分更接近模型的知识边界。"
    }), "\n", _jsx(_components.h2, {
      id: "一张可复用的阅读清单",
      children: "一张可复用的阅读清单"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "明确任务的生物学对象和实验参照。"
      }), "\n", _jsx(_components.li, {
        children: "画出输入表示、模型中间状态与输出之间的数据流。"
      }), "\n", _jsx(_components.li, {
        children: "区分训练目标、验证指标与真实使用目标。"
      }), "\n", _jsx(_components.li, {
        children: "记录数据泄漏、同源性和时间切分方式。"
      }), "\n", _jsx(_components.li, {
        children: "把作者没有回答的问题写成下一篇笔记。"
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["AlphaFold 3 展示了统一建模多类生物分子相互作用的能力，也让“模型究竟知道什么”成为更值得持续追问的问题。", _jsx(_components.sup, {
        children: _jsx(_components.a, {
          href: "#user-content-fn-paper",
          id: "user-content-fnref-paper",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      })]
    }), "\n", _jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [_jsx(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", _jsxs(_components.ol, {
        children: ["\n", _jsxs(_components.li, {
          id: "user-content-fn-paper",
          children: ["\n", _jsxs(_components.p, {
            children: ["Abramson et al., ", _jsx(_components.em, {
              children: "Accurate structure prediction of biomolecular interactions with AlphaFold 3"
            }), ", Nature 630, 493–500 (2024). ", _jsx(_components.a, {
              href: "#user-content-fnref-paper",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              className: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
