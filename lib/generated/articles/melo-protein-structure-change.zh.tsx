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
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mover: "mover",
    mrow: "mrow",
    msub: "msub",
    msubsup: "msubsup",
    msup: "msup",
    mtext: "mtext",
    munderover: "munderover",
    ol: "ol",
    p: "p",
    path: "path",
    section: "section",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    sup: "sup",
    svg: "svg",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "论文速览"
        }), "：Zheng 等人在 ", _jsx(_components.em, {
          children: "Nature Communications"
        }), " 提出 MELO，用两个互补坐标测量蛋白质结构变化，并把变化定位到具体氨基酸单元（残基）或片段。本文关注的不只是它“比 TM-score 更准”的结论，更关注这个结论依赖怎样的标签、阈值与比对流程。", _jsx(_components.sup, {
          children: _jsx(_components.a, {
            href: "#user-content-fn-paper",
            id: "user-content-fnref-paper",
            "data-footnote-ref": true,
            "aria-describedby": "footnote-label",
            children: "1"
          })
        })]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "真正的问题不是像不像而是哪里变了",
      children: "真正的问题不是“像不像”，而是“哪里变了”"
    }), "\n", _jsx(_components.p, {
      children: "比较两个蛋白质结构时，我们很自然地想把差异压缩成一个数。RMSD 衡量叠合后原子坐标的平均偏差，TM-score 对蛋白长度做了归一化，LDDT 则比较局部距离模式。它们各自解决了重要问题，但一个全局分数常会抹平两类生物学上有意义的变化：局部二级结构改变，以及近似刚体的片段相对移动。"
    }), "\n", _jsx(_components.p, {
      children: "可以把蛋白想成一把剪刀：两片刀刃自身的几何几乎不变，却能绕铰链相对转动。只看结构域内部，可能低估这种运动；只看整体叠合，又可能把它放大。相反，一小段 α 螺旋转为无序，也许只影响几十个残基，却仍是重要的局部变化。"
    }), "\n", _jsxs(_components.p, {
      children: ["这正是 MELO（", _jsx(_components.strong, {
        children: "ME"
      }), "asuring and ", _jsx(_components.strong, {
        children: "LO"
      }), "cating）的切入点：不要继续寻找一个万能相似度，而是把变化拆成两个问题。"]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "残基本身的局部几何有没有变化？"
      }), "\n", _jsx(_components.li, {
        children: "不同残基或结构片段之间的相对位置有没有变化？"
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "两个坐标vss-与-sps",
      children: "两个坐标：VSS 与 SPS"
    }), "\n", _jsxs(_components.p, {
      children: ["MELO 的第一个维度是 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsx(_components.mtext, {
                    children: "measur"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "VSS_{\\text{measur}}"
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
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "S"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "measur"
                              })
                            })
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
            })]
          })
        })]
      }), "，即二级结构变化（variation in secondary structure）。具体计算可以拆成四步。"]
    }), "\n", _jsx(_components.h3, {
      id: "vss-怎样从两个结构算出来",
      children: "VSS 怎样从两个结构算出来？"
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "第一步：建立残基对应关系。"
      }), " MELO 根据序列一致性选择比对方法：高于 30% 时使用 Smith–Waterman 序列比对，否则使用 US-align 结构比对。经过比对后，结构 A 与 B 得到 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "N"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "N"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.10903em"
              },
              children: "N"
            })]
          })
        })]
      }), " 对一一对应的残基。"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "第二步：把每个残基写成十维向量。"
      }), " 对第 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "i"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "i"
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
                height: "0.6595em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "i"
            })]
          })
        })]
      }), " 对残基，MELO 使用 DSSP 分别计算两个结构中的十项几何与环境特征，再形成 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsxs(_components.mover, {
                    accent: "true",
                    children: [_jsx(_components.mi, {
                      children: "v"
                    }), _jsx(_components.mo, {
                      children: "⃗"
                    })]
                  }), _jsx(_components.mi, {
                    children: "i"
                  }), _jsx(_components.mi, {
                    children: "A"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\vec v_i^A"
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
                height: "1.1em",
                verticalAlign: "-0.2587em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord accent",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.714em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord mathnormal",
                          style: {
                            marginRight: "0.03588em"
                          },
                          children: "v"
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "accent-body",
                          style: {
                            left: "-0.2077em"
                          },
                          children: _jsx(_components.span, {
                            className: "overlay",
                            style: {
                              height: "0.714em",
                              width: "0.471em"
                            },
                            children: _jsx(_components.svg, {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "0.471em",
                              height: "0.714em",
                              style: {
                                width: "0.471em"
                              },
                              viewBox: "0 0 471 714",
                              preserveAspectRatio: "xMinYMin",
                              children: _jsx(_components.path, {
                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                              })
                            })
                          })
                        })]
                      })]
                    })
                  })
                })
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
                          marginLeft: "-0.0359em",
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
                            children: "i"
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            children: "A"
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2587em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " 和 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsxs(_components.mover, {
                    accent: "true",
                    children: [_jsx(_components.mi, {
                      children: "v"
                    }), _jsx(_components.mo, {
                      children: "⃗"
                    })]
                  }), _jsx(_components.mi, {
                    children: "i"
                  }), _jsx(_components.mi, {
                    children: "B"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\vec v_i^B"
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
                height: "1.1em",
                verticalAlign: "-0.2587em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord accent",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.714em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord mathnormal",
                          style: {
                            marginRight: "0.03588em"
                          },
                          children: "v"
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "accent-body",
                          style: {
                            left: "-0.2077em"
                          },
                          children: _jsx(_components.span, {
                            className: "overlay",
                            style: {
                              height: "0.714em",
                              width: "0.471em"
                            },
                            children: _jsx(_components.svg, {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "0.471em",
                              height: "0.714em",
                              style: {
                                width: "0.471em"
                              },
                              viewBox: "0 0 471 714",
                              preserveAspectRatio: "xMinYMin",
                              children: _jsx(_components.path, {
                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                              })
                            })
                          })
                        })]
                      })]
                    })
                  })
                })
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
                          marginLeft: "-0.0359em",
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
                            children: "i"
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                              marginRight: "0.05017em"
                            },
                            children: "B"
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2587em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), "。十项特征如下：", _jsx(_components.sup, {
        children: _jsx(_components.a, {
          href: "#user-content-fn-dssp-fields",
          id: "user-content-fnref-dssp-fields",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "2"
        })
      })]
    }), "\n", _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "类别"
          }), _jsx(_components.th, {
            children: "特征"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "主链氢键"
          }), _jsx(_components.td, {
            children: "N–H···O、第二个 N–H···O、O···H–N、第二个 O···H–N"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "局部主链几何"
          }), _jsx(_components.td, {
            children: "KAPPA、PHI、PSI、ALPHA、TCO"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "溶剂暴露"
          }), _jsx(_components.td, {
            children: "ACC"
          })]
        })]
      })]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "第三步：计算逐残基差异。"
      }), " 对每对对应残基计算缩放后的余弦差异："]
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
                    children: "c"
                  }), _jsx(_components.mi, {
                    children: "i"
                  })]
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsxs(_components.mfrac, {
                  children: [_jsx(_components.mn, {
                    children: "1"
                  }), _jsx(_components.mn, {
                    children: "2"
                  })]
                }), _jsxs(_components.mrow, {
                  children: [_jsx(_components.mo, {
                    fence: "true",
                    children: "("
                  }), _jsx(_components.mn, {
                    children: "1"
                  }), _jsx(_components.mo, {
                    children: "−"
                  }), _jsxs(_components.mfrac, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsxs(_components.msubsup, {
                        children: [_jsxs(_components.mover, {
                          accent: "true",
                          children: [_jsx(_components.mi, {
                            children: "v"
                          }), _jsx(_components.mo, {
                            children: "⃗"
                          })]
                        }), _jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mi, {
                          children: "A"
                        })]
                      }), _jsx(_components.mo, {
                        children: "⋅"
                      }), _jsxs(_components.msubsup, {
                        children: [_jsxs(_components.mover, {
                          accent: "true",
                          children: [_jsx(_components.mi, {
                            children: "v"
                          }), _jsx(_components.mo, {
                            children: "⃗"
                          })]
                        }), _jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mi, {
                          children: "B"
                        })]
                      })]
                    }), _jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        stretchy: "false",
                        children: "∥"
                      }), _jsxs(_components.msubsup, {
                        children: [_jsxs(_components.mover, {
                          accent: "true",
                          children: [_jsx(_components.mi, {
                            children: "v"
                          }), _jsx(_components.mo, {
                            children: "⃗"
                          })]
                        }), _jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mi, {
                          children: "A"
                        })]
                      }), _jsx(_components.mo, {
                        stretchy: "false",
                        children: "∥"
                      }), _jsx(_components.mtext, {
                        children: " "
                      }), _jsx(_components.mo, {
                        stretchy: "false",
                        children: "∥"
                      }), _jsxs(_components.msubsup, {
                        children: [_jsxs(_components.mover, {
                          accent: "true",
                          children: [_jsx(_components.mi, {
                            children: "v"
                          }), _jsx(_components.mo, {
                            children: "⃗"
                          })]
                        }), _jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mi, {
                          children: "B"
                        })]
                      }), _jsx(_components.mo, {
                        stretchy: "false",
                        children: "∥"
                      })]
                    })]
                  }), _jsx(_components.mo, {
                    fence: "true",
                    children: ")"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "c_i=\\frac{1}{2}\\left(1-\n\\frac{\\vec v_i^A\\cdot\\vec v_i^B}\n{\\lVert\\vec v_i^A\\rVert\\,\\lVert\\vec v_i^B\\rVert}\n\\right)"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
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
                            children: "i"
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
                height: "2.5083em",
                verticalAlign: "-0.99em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mopen nulldelimiter"
              }), _jsx(_components.span, {
                className: "mfrac",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.3214em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.314em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord",
                          children: _jsx(_components.span, {
                            className: "mord",
                            children: "2"
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord",
                          children: _jsx(_components.span, {
                            className: "mord",
                            children: "1"
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.686em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              }), _jsx(_components.span, {
                className: "mclose nulldelimiter"
              })]
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsxs(_components.span, {
              className: "minner",
              children: [_jsx(_components.span, {
                className: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: _jsx(_components.span, {
                  className: "delimsizing size3",
                  children: "("
                })
              }), _jsx(_components.span, {
                className: "mord",
                children: "1"
              }), _jsx(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), _jsx(_components.span, {
                className: "mbin",
                children: "−"
              }), _jsx(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), _jsxs(_components.span, {
                className: "mord",
                children: [_jsx(_components.span, {
                  className: "mopen nulldelimiter"
                }), _jsx(_components.span, {
                  className: "mfrac",
                  children: _jsxs(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [_jsxs(_components.span, {
                      className: "vlist-r",
                      children: [_jsxs(_components.span, {
                        className: "vlist",
                        style: {
                          height: "1.5183em"
                        },
                        children: [_jsxs(_components.span, {
                          style: {
                            top: "-2.2869em"
                          },
                          children: [_jsx(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), _jsxs(_components.span, {
                            className: "mord",
                            children: [_jsx(_components.span, {
                              className: "mopen",
                              children: "∥"
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord accent",
                                children: _jsx(_components.span, {
                                  className: "vlist-t",
                                  children: _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.714em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "mord mathnormal",
                                          style: {
                                            marginRight: "0.03588em"
                                          },
                                          children: "v"
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "accent-body",
                                          style: {
                                            left: "-0.2077em"
                                          },
                                          children: _jsx(_components.span, {
                                            className: "overlay",
                                            style: {
                                              height: "0.714em",
                                              width: "0.471em"
                                            },
                                            children: _jsx(_components.svg, {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              width: "0.471em",
                                              height: "0.714em",
                                              style: {
                                                width: "0.471em"
                                              },
                                              viewBox: "0 0 471 714",
                                              preserveAspectRatio: "xMinYMin",
                                              children: _jsx(_components.path, {
                                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                                              })
                                            })
                                          })
                                        })]
                                      })]
                                    })
                                  })
                                })
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8231em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4231em",
                                          marginLeft: "-0.0359em",
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
                                            children: "i"
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.0448em",
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
                                            children: "A"
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.2769em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mclose",
                              children: "∥"
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.1667em"
                              }
                            }), _jsx(_components.span, {
                              className: "mopen",
                              children: "∥"
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord accent",
                                children: _jsx(_components.span, {
                                  className: "vlist-t",
                                  children: _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.714em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "mord mathnormal",
                                          style: {
                                            marginRight: "0.03588em"
                                          },
                                          children: "v"
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "accent-body",
                                          style: {
                                            left: "-0.2077em"
                                          },
                                          children: _jsx(_components.span, {
                                            className: "overlay",
                                            style: {
                                              height: "0.714em",
                                              width: "0.471em"
                                            },
                                            children: _jsx(_components.svg, {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              width: "0.471em",
                                              height: "0.714em",
                                              style: {
                                                width: "0.471em"
                                              },
                                              viewBox: "0 0 471 714",
                                              preserveAspectRatio: "xMinYMin",
                                              children: _jsx(_components.path, {
                                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                                              })
                                            })
                                          })
                                        })]
                                      })]
                                    })
                                  })
                                })
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8231em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4231em",
                                          marginLeft: "-0.0359em",
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
                                            children: "i"
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.0448em",
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
                                              marginRight: "0.05017em"
                                            },
                                            children: "B"
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.2769em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mclose",
                              children: "∥"
                            })]
                          })]
                        }), _jsxs(_components.span, {
                          style: {
                            top: "-3.23em"
                          },
                          children: [_jsx(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), _jsx(_components.span, {
                            className: "frac-line",
                            style: {
                              borderBottomWidth: "0.04em"
                            }
                          })]
                        }), _jsxs(_components.span, {
                          style: {
                            top: "-3.677em"
                          },
                          children: [_jsx(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), _jsxs(_components.span, {
                            className: "mord",
                            children: [_jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord accent",
                                children: _jsx(_components.span, {
                                  className: "vlist-t",
                                  children: _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.714em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "mord mathnormal",
                                          style: {
                                            marginRight: "0.03588em"
                                          },
                                          children: "v"
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "accent-body",
                                          style: {
                                            left: "-0.2077em"
                                          },
                                          children: _jsx(_components.span, {
                                            className: "overlay",
                                            style: {
                                              height: "0.714em",
                                              width: "0.471em"
                                            },
                                            children: _jsx(_components.svg, {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              width: "0.471em",
                                              height: "0.714em",
                                              style: {
                                                width: "0.471em"
                                              },
                                              viewBox: "0 0 471 714",
                                              preserveAspectRatio: "xMinYMin",
                                              children: _jsx(_components.path, {
                                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                                              })
                                            })
                                          })
                                        })]
                                      })]
                                    })
                                  })
                                })
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8413em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4413em",
                                          marginLeft: "-0.0359em",
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
                                            children: "i"
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.063em",
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
                                            children: "A"
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.2587em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), _jsx(_components.span, {
                              className: "mbin",
                              children: "⋅"
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord accent",
                                children: _jsx(_components.span, {
                                  className: "vlist-t",
                                  children: _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.714em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "mord mathnormal",
                                          style: {
                                            marginRight: "0.03588em"
                                          },
                                          children: "v"
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "accent-body",
                                          style: {
                                            left: "-0.2077em"
                                          },
                                          children: _jsx(_components.span, {
                                            className: "overlay",
                                            style: {
                                              height: "0.714em",
                                              width: "0.471em"
                                            },
                                            children: _jsx(_components.svg, {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              width: "0.471em",
                                              height: "0.714em",
                                              style: {
                                                width: "0.471em"
                                              },
                                              viewBox: "0 0 471 714",
                                              preserveAspectRatio: "xMinYMin",
                                              children: _jsx(_components.path, {
                                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                                              })
                                            })
                                          })
                                        })]
                                      })]
                                    })
                                  })
                                })
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8413em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4413em",
                                          marginLeft: "-0.0359em",
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
                                            children: "i"
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.063em",
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
                                              marginRight: "0.05017em"
                                            },
                                            children: "B"
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.2587em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            })]
                          })]
                        })]
                      }), _jsx(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-r",
                      children: _jsx(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.99em"
                        },
                        children: _jsx(_components.span, {})
                      })
                    })]
                  })
                }), _jsx(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              }), _jsx(_components.span, {
                className: "mclose delimcenter",
                style: {
                  top: "0em"
                },
                children: _jsx(_components.span, {
                  className: "delimsizing size3",
                  children: ")"
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "第四步：先平均，再拉伸。"
      }), " 对全部 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "N"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "N"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.10903em"
              },
              children: "N"
            })]
          })
        })]
      }), " 对对齐残基取平均："]
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
                    children: "c"
                  }), _jsx(_components.mtext, {
                    children: "ave"
                  })]
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsxs(_components.mfrac, {
                  children: [_jsx(_components.mn, {
                    children: "1"
                  }), _jsx(_components.mi, {
                    children: "N"
                  })]
                }), _jsxs(_components.munderover, {
                  children: [_jsx(_components.mo, {
                    children: "∑"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      children: "="
                    }), _jsx(_components.mn, {
                      children: "1"
                    })]
                  }), _jsx(_components.mi, {
                    children: "N"
                  })]
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "c"
                  }), _jsx(_components.mi, {
                    children: "i"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "c_{\\text{ave}}=\\frac{1}{N}\\sum_{i=1}^{N}c_i"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "ave"
                              })
                            })
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
                height: "3.106em",
                verticalAlign: "-1.2777em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mopen nulldelimiter"
              }), _jsx(_components.span, {
                className: "mfrac",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.3214em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.314em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord",
                          children: _jsx(_components.span, {
                            className: "mord mathnormal",
                            style: {
                              marginRight: "0.10903em"
                            },
                            children: "N"
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord",
                          children: _jsx(_components.span, {
                            className: "mord",
                            children: "1"
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.686em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              }), _jsx(_components.span, {
                className: "mclose nulldelimiter"
              })]
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mop op-limits",
              children: _jsxs(_components.span, {
                className: "vlist-t vlist-t2",
                children: [_jsxs(_components.span, {
                  className: "vlist-r",
                  children: [_jsxs(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.8283em"
                    },
                    children: [_jsxs(_components.span, {
                      style: {
                        top: "-1.8723em",
                        marginLeft: "0em"
                      },
                      children: [_jsx(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), _jsx(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: _jsxs(_components.span, {
                          className: "mord mtight",
                          children: [_jsx(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          }), _jsx(_components.span, {
                            className: "mrel mtight",
                            children: "="
                          }), _jsx(_components.span, {
                            className: "mord mtight",
                            children: "1"
                          })]
                        })
                      })]
                    }), _jsxs(_components.span, {
                      style: {
                        top: "-3.05em"
                      },
                      children: [_jsx(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), _jsx(_components.span, {
                        children: _jsx(_components.span, {
                          className: "mop op-symbol large-op",
                          children: "∑"
                        })
                      })]
                    }), _jsxs(_components.span, {
                      style: {
                        top: "-4.3em",
                        marginLeft: "0em"
                      },
                      children: [_jsx(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), _jsx(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: _jsx(_components.span, {
                          className: "mord mtight",
                          children: _jsx(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.10903em"
                            },
                            children: "N"
                          })
                        })
                      })]
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-s",
                    children: "​"
                  })]
                }), _jsx(_components.span, {
                  className: "vlist-r",
                  children: _jsx(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.2777em"
                    },
                    children: _jsx(_components.span, {})
                  })
                })]
              })
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
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
                            children: "i"
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
            })]
          })]
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["作者发现两百万个 PDB 结构对的 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "c"
                  }), _jsx(_components.mtext, {
                    children: "ave"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "c_{\\text{ave}}"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "ave"
                              })
                            })
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
            })]
          })
        })]
      }), " 大多集中在 0 到 0.1，直接使用不容易拉开差距，于是进行非线性变换："]
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
                children: [_jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsx(_components.mtext, {
                    children: "measur"
                  })]
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "1"
                }), _jsx(_components.mo, {
                  children: "−"
                }), _jsxs(_components.msup, {
                  children: [_jsxs(_components.mrow, {
                    children: [_jsx(_components.mo, {
                      fence: "true",
                      children: "("
                    }), _jsx(_components.mn, {
                      children: "1"
                    }), _jsx(_components.mo, {
                      children: "−"
                    }), _jsxs(_components.msub, {
                      children: [_jsx(_components.mi, {
                        children: "c"
                      }), _jsx(_components.mtext, {
                        children: "ave"
                      })]
                    }), _jsx(_components.mo, {
                      fence: "true",
                      children: ")"
                    })]
                  }), _jsx(_components.mn, {
                    children: "9"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "VSS_{\\text{measur}}=1-\\left(1-c_{\\text{ave}}\\right)^9"
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
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "S"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "measur"
                              })
                            })
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
                height: "0.7278em",
                verticalAlign: "-0.0833em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "1"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), _jsx(_components.span, {
              className: "mbin",
              children: "−"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1.204em",
                verticalAlign: "-0.25em"
              }
            }), _jsxs(_components.span, {
              className: "minner",
              children: [_jsxs(_components.span, {
                className: "minner",
                children: [_jsx(_components.span, {
                  className: "mopen delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  className: "mord",
                  children: "1"
                }), _jsx(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), _jsx(_components.span, {
                  className: "mbin",
                  children: "−"
                }), _jsx(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), _jsxs(_components.span, {
                  className: "mord",
                  children: [_jsx(_components.span, {
                    className: "mord mathnormal",
                    children: "c"
                  }), _jsx(_components.span, {
                    className: "msupsub",
                    children: _jsxs(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [_jsxs(_components.span, {
                        className: "vlist-r",
                        children: [_jsx(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.1514em"
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
                                className: "mord mtight",
                                children: _jsx(_components.span, {
                                  className: "mord text mtight",
                                  children: _jsx(_components.span, {
                                    className: "mord mtight",
                                    children: "ave"
                                  })
                                })
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
                  className: "mclose delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: ")"
                })]
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.954em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-3.2029em",
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
                            className: "mord mtight",
                            children: "9"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", _jsx(_components.p, {
      children: "这个变换把靠近 0 的差异拉开，并把结果继续限制在 0 到 1。"
    }), "\n", _jsx(_components.h3, {
      id: "sps-怎样衡量片段位移",
      children: "SPS 怎样衡量片段位移？"
    }), "\n", _jsxs(_components.p, {
      children: ["第二个维度是 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsx(_components.mtext, {
                    children: "measur"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS_{\\text{measur}}"
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
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "SP"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "measur"
                              })
                            })
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
            })]
          })
        })]
      }), "，即蛋白片段位移（shift among protein segments）。对齐残基后，MELO 比较结构 A 和结构 B 中每一对残基 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "i"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "j"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "i,j"
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
                height: "0.854em",
                verticalAlign: "-0.1944em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "i"
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
              style: {
                marginRight: "0.05724em"
              },
              children: "j"
            })]
          })
        })]
      }), " 的距离变化，并用两者中较大的原始距离进行归一化："]
    }), "\n", _jsx(_components.p, {
      children: "引入 SPS 的动机是把两类变化分开：VSS 关注残基局部几何是否改变，SPS 则通过残基对距离变化衡量片段之间的相对位移。"
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
                children: [_jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "D"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mtext, {
                    children: "norm"
                  })]
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsxs(_components.mfrac, {
                  children: [_jsxs(_components.mrow, {
                    children: [_jsx(_components.mo, {
                      fence: "true",
                      children: "∣"
                    }), _jsxs(_components.msubsup, {
                      children: [_jsx(_components.mi, {
                        children: "d"
                      }), _jsxs(_components.mrow, {
                        children: [_jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mo, {
                          separator: "true",
                          children: ","
                        }), _jsx(_components.mi, {
                          children: "j"
                        })]
                      }), _jsx(_components.mi, {
                        children: "A"
                      })]
                    }), _jsx(_components.mo, {
                      children: "−"
                    }), _jsxs(_components.msubsup, {
                      children: [_jsx(_components.mi, {
                        children: "d"
                      }), _jsxs(_components.mrow, {
                        children: [_jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mo, {
                          separator: "true",
                          children: ","
                        }), _jsx(_components.mi, {
                          children: "j"
                        })]
                      }), _jsx(_components.mi, {
                        children: "B"
                      })]
                    }), _jsx(_components.mo, {
                      fence: "true",
                      children: "∣"
                    })]
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "max"
                    }), _jsx(_components.mo, {
                      children: "⁡"
                    }), _jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        fence: "true",
                        children: "("
                      }), _jsxs(_components.msubsup, {
                        children: [_jsx(_components.mi, {
                          children: "d"
                        }), _jsxs(_components.mrow, {
                          children: [_jsx(_components.mi, {
                            children: "i"
                          }), _jsx(_components.mo, {
                            separator: "true",
                            children: ","
                          }), _jsx(_components.mi, {
                            children: "j"
                          })]
                        }), _jsx(_components.mi, {
                          children: "A"
                        })]
                      }), _jsx(_components.mo, {
                        separator: "true",
                        children: ","
                      }), _jsxs(_components.msubsup, {
                        children: [_jsx(_components.mi, {
                          children: "d"
                        }), _jsxs(_components.mrow, {
                          children: [_jsx(_components.mi, {
                            children: "i"
                          }), _jsx(_components.mo, {
                            separator: "true",
                            children: ","
                          }), _jsx(_components.mi, {
                            children: "j"
                          })]
                        }), _jsx(_components.mi, {
                          children: "B"
                        })]
                      }), _jsx(_components.mo, {
                        fence: "true",
                        children: ")"
                      })]
                    })]
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_{i,j}^{\\text{norm}}=\n\\frac{\\left|d_{i,j}^{A}-d_{i,j}^{B}\\right|}\n{\\max\\left(d_{i,j}^{A},d_{i,j}^{B}\\right)}"
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
                height: "1.0975em",
                verticalAlign: "-0.3831em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.02778em"
                },
                children: "D"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.7144em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.453em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.113em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "norm"
                              })
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3831em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
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
                height: "2.7877em",
                verticalAlign: "-1.153em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mopen nulldelimiter"
              }), _jsx(_components.span, {
                className: "mfrac",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.6348em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.26em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsxs(_components.span, {
                          className: "mord",
                          children: [_jsx(_components.span, {
                            className: "mop",
                            children: "max"
                          }), _jsx(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.1667em"
                            }
                          }), _jsxs(_components.span, {
                            className: "minner",
                            children: [_jsx(_components.span, {
                              className: "mopen delimcenter",
                              style: {
                                top: "0em"
                              },
                              children: _jsx(_components.span, {
                                className: "delimsizing size1",
                                children: "("
                              })
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8231em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4231em",
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
                                          children: _jsxs(_components.span, {
                                            className: "mord mtight",
                                            children: [_jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            }), _jsx(_components.span, {
                                              className: "mpunct mtight",
                                              children: ","
                                            }), _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05724em"
                                              },
                                              children: "j"
                                            })]
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.0448em",
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
                                            className: "mord mtight",
                                            children: _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "A"
                                            })
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.413em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mpunct",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.1667em"
                              }
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8231em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4231em",
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
                                          children: _jsxs(_components.span, {
                                            className: "mord mtight",
                                            children: [_jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            }), _jsx(_components.span, {
                                              className: "mpunct mtight",
                                              children: ","
                                            }), _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05724em"
                                              },
                                              children: "j"
                                            })]
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.0448em",
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
                                            className: "mord mtight",
                                            children: _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05017em"
                                              },
                                              children: "B"
                                            })
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.413em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mclose delimcenter",
                              style: {
                                top: "0em"
                              },
                              children: _jsx(_components.span, {
                                className: "delimsizing size1",
                                children: ")"
                              })
                            })]
                          })]
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.7848em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord",
                          children: _jsxs(_components.span, {
                            className: "minner",
                            children: [_jsx(_components.span, {
                              className: "mopen",
                              children: _jsx(_components.span, {
                                className: "delimsizing mult",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.85em"
                                      },
                                      children: _jsxs(_components.span, {
                                        style: {
                                          top: "-2.85em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3.2em"
                                          }
                                        }), _jsx(_components.span, {
                                          style: {
                                            width: "0.333em",
                                            height: "1.200em"
                                          },
                                          children: _jsx(_components.svg, {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "0.333em",
                                            height: "1.200em",
                                            viewBox: "0 0 333 1200",
                                            children: _jsx(_components.path, {
                                              d: "M145 15 v585 v0 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v0 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v0 v585 h43z"
                                            })
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
                                        height: "0.35em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8413em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4413em",
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
                                          children: _jsxs(_components.span, {
                                            className: "mord mtight",
                                            children: [_jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            }), _jsx(_components.span, {
                                              className: "mpunct mtight",
                                              children: ","
                                            }), _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05724em"
                                              },
                                              children: "j"
                                            })]
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.063em",
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
                                            className: "mord mtight",
                                            children: _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "A"
                                            })
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.3948em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), _jsx(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8413em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4413em",
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
                                          children: _jsxs(_components.span, {
                                            className: "mord mtight",
                                            children: [_jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            }), _jsx(_components.span, {
                                              className: "mpunct mtight",
                                              children: ","
                                            }), _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05724em"
                                              },
                                              children: "j"
                                            })]
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.063em",
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
                                            className: "mord mtight",
                                            children: _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05017em"
                                              },
                                              children: "B"
                                            })
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.3948em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mclose",
                              children: _jsx(_components.span, {
                                className: "delimsizing mult",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.85em"
                                      },
                                      children: _jsxs(_components.span, {
                                        style: {
                                          top: "-2.85em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3.2em"
                                          }
                                        }), _jsx(_components.span, {
                                          style: {
                                            width: "0.333em",
                                            height: "1.200em"
                                          },
                                          children: _jsx(_components.svg, {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "0.333em",
                                            height: "1.200em",
                                            viewBox: "0 0 333 1200",
                                            children: _jsx(_components.path, {
                                              d: "M145 15 v585 v0 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v0 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v0 v585 h43z"
                                            })
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
                                        height: "0.35em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })
                            })]
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.153em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              }), _jsx(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["其中 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "d"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mi, {
                    children: "A"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "d_{i,j}^{A}"
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
                height: "1.2361em",
                verticalAlign: "-0.3948em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
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
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "A"
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3948em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " 和 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "d"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mi, {
                    children: "B"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "d_{i,j}^{B}"
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
                height: "1.2361em",
                verticalAlign: "-0.3948em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
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
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05017em"
                              },
                              children: "B"
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3948em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " 分别是残基 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "i"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "j"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "i,j"
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
                height: "0.854em",
                verticalAlign: "-0.1944em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "i"
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
              style: {
                marginRight: "0.05724em"
              },
              children: "j"
            })]
          })
        })]
      }), " 在两个结构中的空间距离，", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "D"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mtext, {
                    children: "norm"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_{i,j}^{\\text{norm}}"
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
                height: "1.0781em",
                verticalAlign: "-0.3948em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.02778em"
                },
                children: "D"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.6644em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "norm"
                              })
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3948em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " 被限制在 0 到 1。MELO 对所有残基对取平均得到 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "D"
                  }), _jsx(_components.mtext, {
                    children: "ave"
                  }), _jsx(_components.mtext, {
                    children: "norm"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_{\\text{ave}}^{\\text{norm}}"
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
                height: "0.9303em",
                verticalAlign: "-0.247em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.02778em"
                },
                children: "D"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.6644em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.453em",
                          marginLeft: "-0.0278em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "ave"
                              })
                            })
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "norm"
                              })
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.247em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), "，再使用与 VSS 相同的变换："]
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
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsx(_components.mtext, {
                    children: "measur"
                  })]
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "1"
                }), _jsx(_components.mo, {
                  children: "−"
                }), _jsxs(_components.msup, {
                  children: [_jsxs(_components.mrow, {
                    children: [_jsx(_components.mo, {
                      fence: "true",
                      children: "("
                    }), _jsx(_components.mn, {
                      children: "1"
                    }), _jsx(_components.mo, {
                      children: "−"
                    }), _jsxs(_components.msubsup, {
                      children: [_jsx(_components.mi, {
                        children: "D"
                      }), _jsx(_components.mtext, {
                        children: "ave"
                      }), _jsx(_components.mtext, {
                        children: "norm"
                      })]
                    }), _jsx(_components.mo, {
                      fence: "true",
                      children: ")"
                    })]
                  }), _jsx(_components.mn, {
                    children: "9"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS_{\\text{measur}}=1-\\left(1-D_{\\text{ave}}^{\\text{norm}}\\right)^9"
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
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "SP"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "measur"
                              })
                            })
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
                height: "0.7278em",
                verticalAlign: "-0.0833em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "1"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), _jsx(_components.span, {
              className: "mbin",
              children: "−"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1.204em",
                verticalAlign: "-0.25em"
              }
            }), _jsxs(_components.span, {
              className: "minner",
              children: [_jsxs(_components.span, {
                className: "minner",
                children: [_jsx(_components.span, {
                  className: "mopen delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  className: "mord",
                  children: "1"
                }), _jsx(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), _jsx(_components.span, {
                  className: "mbin",
                  children: "−"
                }), _jsx(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), _jsxs(_components.span, {
                  className: "mord",
                  children: [_jsx(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.02778em"
                    },
                    children: "D"
                  }), _jsx(_components.span, {
                    className: "msupsub",
                    children: _jsxs(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [_jsxs(_components.span, {
                        className: "vlist-r",
                        children: [_jsxs(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.7144em"
                          },
                          children: [_jsxs(_components.span, {
                            style: {
                              top: "-2.453em",
                              marginLeft: "-0.0278em",
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
                                className: "mord mtight",
                                children: _jsx(_components.span, {
                                  className: "mord text mtight",
                                  children: _jsx(_components.span, {
                                    className: "mord mtight",
                                    children: "ave"
                                  })
                                })
                              })
                            })]
                          }), _jsxs(_components.span, {
                            style: {
                              top: "-3.113em",
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
                                className: "mord mtight",
                                children: _jsx(_components.span, {
                                  className: "mord text mtight",
                                  children: _jsx(_components.span, {
                                    className: "mord mtight",
                                    children: "norm"
                                  })
                                })
                              })
                            })]
                          })]
                        }), _jsx(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), _jsx(_components.span, {
                        className: "vlist-r",
                        children: _jsx(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.247em"
                          },
                          children: _jsx(_components.span, {})
                        })
                      })]
                    })
                  })]
                }), _jsx(_components.span, {
                  className: "mclose delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: ")"
                })]
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.954em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-3.2029em",
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
                            className: "mord mtight",
                            children: "9"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "L"
                }), _jsx(_components.mi, {
                  children: "O"
                }), _jsxs(_components.msup, {
                  children: [_jsx(_components.mi, {
                    children: "T"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "S"
                    }), _jsx(_components.mi, {
                      children: "P"
                    }), _jsx(_components.mi, {
                      children: "S"
                    })]
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "PLOT^{SPS}"
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
                height: "0.8413em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "P"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "L"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.02778em"
              },
              children: "O"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.13889em"
                },
                children: "T"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05764em"
                              },
                              children: "SPS"
                            })
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })
        })]
      }), " 不把距离矩阵压成一个数，而是保留每个 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "D"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mtext, {
                    children: "norm"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_{i,j}^{\\text{norm}}"
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
                height: "1.0781em",
                verticalAlign: "-0.3948em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.02778em"
                },
                children: "D"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.6644em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "norm"
                              })
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3948em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), "，因此能显示哪些残基片段之间发生了相对移动。"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "使用限制。"
      }), " 后续计算只使用这 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "N"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "N"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.10903em"
              },
              children: "N"
            })]
          })
        })]
      }), " 对对应残基：VSS 对每一对对应残基计算 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "c"
                  }), _jsx(_components.mi, {
                    children: "i"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "c_i"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
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
                            children: "i"
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
            })]
          })
        })]
      }), "，SPS 则在这些对应残基之间计算 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "D"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mtext, {
                    children: "norm"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_{i,j}^{\\text{norm}}"
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
                height: "1.0781em",
                verticalAlign: "-0.3948em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.02778em"
                },
                children: "D"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.6644em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "norm"
                              })
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3948em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), "。未匹配残基不参与平均。因此，若结构变化主要发生在插入、缺失或其他未对齐区域，指标可能低估整条蛋白的结构变化，解读时应同时关注对齐覆盖率。"]
    }), "\n", _jsx(_components.p, {
      children: "作者还给出一个方便排序的总分："
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
                children: [_jsx(_components.mi, {
                  children: "M"
                }), _jsx(_components.mi, {
                  children: "E"
                }), _jsx(_components.mi, {
                  children: "L"
                }), _jsx(_components.mi, {
                  children: "O"
                }), _jsx(_components.mtext, {
                  children: "-"
                }), _jsx(_components.mi, {
                  children: "s"
                }), _jsx(_components.mi, {
                  children: "c"
                }), _jsx(_components.mi, {
                  children: "o"
                }), _jsx(_components.mi, {
                  children: "r"
                }), _jsx(_components.mi, {
                  children: "e"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mi, {
                  children: "max"
                }), _jsx(_components.mo, {
                  children: "⁡"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "m"
                    }), _jsx(_components.mi, {
                      children: "e"
                    }), _jsx(_components.mi, {
                      children: "a"
                    }), _jsx(_components.mi, {
                      children: "s"
                    }), _jsx(_components.mi, {
                      children: "u"
                    }), _jsx(_components.mi, {
                      children: "r"
                    })]
                  })]
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "m"
                    }), _jsx(_components.mi, {
                      children: "e"
                    }), _jsx(_components.mi, {
                      children: "a"
                    }), _jsx(_components.mi, {
                      children: "s"
                    }), _jsx(_components.mi, {
                      children: "u"
                    }), _jsx(_components.mi, {
                      children: "r"
                    })]
                  })]
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "MELO\\text{-}score=\\max(VSS_{measur},SPS_{measur})"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "ME"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "L"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.02778em"
              },
              children: "O"
            }), _jsx(_components.span, {
              className: "mord text",
              children: _jsx(_components.span, {
                className: "mord",
                children: "-"
              })
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "score"
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
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mop",
              children: "max"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "S"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "m"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "e"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "a"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "s"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "u"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "r"
                            })]
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
              className: "mpunct",
              children: ","
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "SP"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "m"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "e"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "a"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "s"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "u"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "r"
                            })]
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
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      })
    }), "\n", _jsx(_components.p, {
      children: "但 MELO 最有信息量的输出并不是这个最大值，而是二维坐标本身："
    }), "\n", _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "区域"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mi, {
                        children: "V"
                      }), _jsx(_components.mi, {
                        children: "S"
                      }), _jsxs(_components.msub, {
                        children: [_jsx(_components.mi, {
                          children: "S"
                        }), _jsxs(_components.mrow, {
                          children: [_jsx(_components.mi, {
                            children: "m"
                          }), _jsx(_components.mi, {
                            children: "e"
                          }), _jsx(_components.mi, {
                            children: "a"
                          }), _jsx(_components.mi, {
                            children: "s"
                          }), _jsx(_components.mi, {
                            children: "u"
                          }), _jsx(_components.mi, {
                            children: "r"
                          })]
                        })]
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "VSS_{measur}"
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
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.22222em"
                    },
                    children: "V"
                  }), _jsx(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.05764em"
                    },
                    children: "S"
                  }), _jsxs(_components.span, {
                    className: "mord",
                    children: [_jsx(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.05764em"
                      },
                      children: "S"
                    }), _jsx(_components.span, {
                      className: "msupsub",
                      children: _jsxs(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [_jsxs(_components.span, {
                          className: "vlist-r",
                          children: [_jsx(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.1514em"
                            },
                            children: _jsxs(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0576em",
                                marginRight: "0.05em"
                              },
                              children: [_jsx(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), _jsx(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: _jsxs(_components.span, {
                                  className: "mord mtight",
                                  children: [_jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "m"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "e"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "a"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "s"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "u"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.02778em"
                                    },
                                    children: "r"
                                  })]
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
                  })]
                })
              })]
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mi, {
                        children: "S"
                      }), _jsx(_components.mi, {
                        children: "P"
                      }), _jsxs(_components.msub, {
                        children: [_jsx(_components.mi, {
                          children: "S"
                        }), _jsxs(_components.mrow, {
                          children: [_jsx(_components.mi, {
                            children: "m"
                          }), _jsx(_components.mi, {
                            children: "e"
                          }), _jsx(_components.mi, {
                            children: "a"
                          }), _jsx(_components.mi, {
                            children: "s"
                          }), _jsx(_components.mi, {
                            children: "u"
                          }), _jsx(_components.mi, {
                            children: "r"
                          })]
                        })]
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "SPS_{measur}"
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
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.13889em"
                    },
                    children: "SP"
                  }), _jsxs(_components.span, {
                    className: "mord",
                    children: [_jsx(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.05764em"
                      },
                      children: "S"
                    }), _jsx(_components.span, {
                      className: "msupsub",
                      children: _jsxs(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [_jsxs(_components.span, {
                          className: "vlist-r",
                          children: [_jsx(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.1514em"
                            },
                            children: _jsxs(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0576em",
                                marginRight: "0.05em"
                              },
                              children: [_jsx(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), _jsx(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: _jsxs(_components.span, {
                                  className: "mord mtight",
                                  children: [_jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "m"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "e"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "a"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "s"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "u"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.02778em"
                                    },
                                    children: "r"
                                  })]
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
                  })]
                })
              })]
            })
          }), _jsx(_components.th, {
            children: "结构解释"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Q1"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "<"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "<0.5"
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
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "<"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "<"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "<0.5"
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
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "<"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            children: "未达到结构变化阈值"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Q2"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "<"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "<0.5"
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
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "<"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "≥"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\ge 0.5"
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
                      height: "0.7719em",
                      verticalAlign: "-0.136em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "≥"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            children: "以片段或结构域位移为主"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Q3"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "≥"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\ge 0.5"
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
                      height: "0.7719em",
                      verticalAlign: "-0.136em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "≥"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "≥"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\ge 0.5"
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
                      height: "0.7719em",
                      verticalAlign: "-0.136em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "≥"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            children: "二级结构变化与片段位移并存"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Q4"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "≥"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\ge 0.5"
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
                      height: "0.7719em",
                      verticalAlign: "-0.136em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "≥"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "<"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "<0.5"
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
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "<"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            children: "以局部二级结构变化为主"
          })]
        })]
      })]
    }), "\n", _jsx(_components.p, {
      children: "一个最大值无法区分 Q2、Q3 与 Q4，而二维坐标可以。这也是“一个分数不够”的核心含义。"
    }), "\n", _jsx(_components.h2, {
      id: "05-不是自然常数",
      children: "0.5 不是自然常数"
    }), "\n", _jsx(_components.p, {
      children: "MELO 用 0.5 作为两个坐标的判别阈值。这个值并非来自某条物理定律，而是作者借鉴 TM-score 的阈值思路，使用 SCOP2 和 CATH 中大量结构对的后验分布进行校准。论文在 SCOP2 的 class、fold、superfamily、family 四个层级上分别构造了约 3.08、4.09、4.11 和 4.13 亿个结构对，用分类层级表示由大到小的结构差异。"
    }), "\n", _jsx(_components.p, {
      children: "在这些基准上，MELO 在四个层级的准确率都保持在 99.7% 以上；TM-score 则从 99.8% 降至 93.8%。当只保留序列一致性高于 70% 的结构对时，MELO 报告的准确率仍高于 99.9%，TM-score 从 96.5% 下降到 62.4%，在 superfamily 和 family 层级的差距超过 30 个百分点。"
    }), "\n", _jsxs(_components.p, {
      children: ["这些数字很醒目，但“准确率”必须连同标签一起读。这里的正确答案主要来自结构分类层级，而不是实验测得的酶活、结合亲和力或细胞表型。因此它强力支持的是：", _jsx(_components.strong, {
        children: "MELO 更符合这套结构差异定义，尤其能区分高序列相似度下的细微结构差异"
      }), "。它不能单独证明：每个越过 0.5 的结构变化都具有功能意义。"]
    }), "\n", _jsx(_components.h2, {
      id: "三个案例说明两个坐标为何必要",
      children: "三个案例说明两个坐标为何必要"
    }), "\n", _jsx(_components.h3, {
      id: "ospa内部没怎么变结构域却移动了",
      children: "OspA：内部没怎么变，结构域却移动了"
    }), "\n", _jsxs(_components.p, {
      children: ["在经过 β-hairpin 替换和缩短的 OspA 中，MELO 给出 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.13"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "VSS=0.13"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.13"
            })]
          })]
        })]
      }), "、", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.63"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS=0.63"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.63"
            })]
          })]
        })]
      }), "，落在 Q2。二级结构大体保持，结构域之间却出现明显位移；论文报告 TM-score 和 LDDT 没有识别出这项变化。这个案例最直观地说明，测量“片段内部像不像”与“片段之间怎么移动”不是同一件事。"]
    }), "\n", _jsx(_components.h3, {
      id: "crabp-ii配体结合同时改变局部结构与口袋几何",
      children: "CRABP II：配体结合同时改变局部结构与口袋几何"
    }), "\n", _jsxs(_components.p, {
      children: ["细胞视黄酸结合蛋白 II（CRABP II）的 apo 与 holo 构象比较得到 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.53"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "VSS=0.53"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.53"
            })]
          })]
        })]
      }), "、", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.58"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS=0.58"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.58"
            })]
          })]
        })]
      }), "，属于 Q3。", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "L"
                }), _jsx(_components.mi, {
                  children: "O"
                }), _jsxs(_components.msup, {
                  children: [_jsx(_components.mi, {
                    children: "T"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "V"
                    }), _jsx(_components.mi, {
                      children: "S"
                    }), _jsx(_components.mi, {
                      children: "S"
                    })]
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "PLOT^{VSS}"
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
                height: "0.8413em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "P"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "L"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.02778em"
              },
              children: "O"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.13889em"
                },
                children: "T"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.22222em"
                              },
                              children: "V"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05764em"
                              },
                              children: "SS"
                            })]
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })
        })]
      }), " 将变化定位到第二段螺旋、βD 和 βJ 附近，", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "L"
                }), _jsx(_components.mi, {
                  children: "O"
                }), _jsxs(_components.msup, {
                  children: [_jsx(_components.mi, {
                    children: "T"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "S"
                    }), _jsx(_components.mi, {
                      children: "P"
                    }), _jsx(_components.mi, {
                      children: "S"
                    })]
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "PLOT^{SPS}"
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
                height: "0.8413em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "P"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "L"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.02778em"
              },
              children: "O"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.13889em"
                },
                children: "T"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05764em"
                              },
                              children: "SPS"
                            })
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })
        })]
      }), " 则突出第二段螺旋及 βE–βF 之间的位移。作者据此描述视黄酸结合前后的口袋扩张与收缩。"]
    }), "\n", _jsx(_components.p, {
      children: "这个案例展示了定位输出的真正价值：总分只能告诉你“变了”，局部图才可能引导后续突变设计、动力学模拟或实验验证。值得注意的是，定位仍然是一张结构差异地图，不自动给出因果机制。"
    }), "\n", _jsx(_components.h3, {
      id: "kras比对方式本身会改变结论",
      children: "KRAS：比对方式本身会改变结论"
    }), "\n", _jsxs(_components.p, {
      children: ["Mg²⁺ 游离与结合状态的 KRAS 比较尤其重要，因为它暴露了流程中的敏感环节。用 Smith–Waterman 序列比对建立残基对应时，MELO 得到约 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.61"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS=0.61"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.61"
            })]
          })]
        })]
      }), "，能够捕捉 βB、βC 等区域的位移；换成 US-align 的结构比对后，部分差异区域为了优化全局叠合而被错位，", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
            })]
          })
        })]
      }), " 降到 0.28。"]
    }), "\n", _jsx(_components.p, {
      children: "也就是说，MELO 并非独立于 alignment。对高序列相似结构，作者更倾向序列比对；对插入、缺失或远缘结构，如何建立可信的残基对应仍需要研究者判断。一个小数点后的分数，背后可能先藏着一个离散的比对决策。"
    }), "\n", _jsx(_components.h2, {
      id: "发现-12562-组变化究竟意味着什么",
      children: "“发现 12,562 组变化”究竟意味着什么"
    }), "\n", _jsxs(_components.p, {
      children: ["作者从 38,128 个单蛋白 PDB 结构出发，形成超过两百万个序列一致性高于 70% 的结构对。MELO 判定其中 12,562 对存在变化，而 TM-score 判定 1,411 对。Q2、Q3、Q4 中，两者结论不一致的比例分别达到 86.45%、97.23% 和 91.95%。论文将这批结果作为“传统方法遗漏的结构变化”开放下载，并报告 MELO 处理两百万对结构约需 109 小时，快于其测试中的 TM-score（199 小时）和 LDDT（1,044 小时）。", _jsx(_components.sup, {
        children: _jsx(_components.a, {
          href: "#user-content-fn-data",
          id: "user-content-fnref-data",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "3"
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["这是一批很有价值的", _jsx(_components.strong, {
        children: "候选集"
      }), "，而不是 12,562 个已经得到功能验证的新发现。论文进一步观察到其中 22.8% 的结构对具有不同的功能注释；反过来说，77.2% 仍共享相同注释。共享注释并不排除功能差异，但也不能据此宣称存在尚未发现的生物学效应。更稳妥的用途是：用 MELO 缩小人工检查范围，再结合配体状态、实验条件、结构分辨率、分子动力学与湿实验决定优先级。"]
    }), "\n", _jsx(_components.h2, {
      id: "值得保留的四点怀疑",
      children: "值得保留的四点怀疑"
    }), "\n", _jsx(_components.h3, {
      id: "1-结构分类准确率不等于功能预测准确率",
      children: "1. 结构分类准确率不等于功能预测准确率"
    }), "\n", _jsx(_components.p, {
      children: "SCOP2/CATH 提供了可规模化的监督信号，却不是功能效应的金标准。若研究问题是“这个错义突变是否致病”，MELO 可以提供结构证据，但不能替代稳定性、结合、表达或细胞实验。"
    }), "\n", _jsx(_components.h3, {
      id: "2-固定阈值会制造边界",
      children: "2. 固定阈值会制造边界"
    }), "\n", _jsxs(_components.p, {
      children: ["论文自己给出了一个很好的反例：葡萄糖激酶 open 与 closed 构象的 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
            })]
          })
        })]
      }), " 约为 0.41–0.48，低于 0.5，因而落入 Q1，尽管分布已相对同一构象对照发生偏移。类似地，MEF2B D83V 的全局指标没有过线，局部图却能看到受影响的螺旋。接近阈值时，连续分数和局部图比二元标签更值得看。"]
    }), "\n", _jsxs(_components.h3, {
      id: "3-max-简单但会丢掉联合信息",
      children: ["3. ", _jsx(_components.code, {
        children: "max"
      }), " 简单，但会丢掉联合信息"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "max"
                }), _jsx(_components.mo, {
                  children: "⁡"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\max(VSS,SPS)"
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
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mop",
              children: "max"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SS"
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
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " 有利于排序，却让 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mn, {
                  children: "0.8"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mn, {
                  children: "0.1"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "(0.8,0.1)"
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
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.8"
            }), _jsx(_components.span, {
              className: "mpunct",
              children: ","
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.1"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " 与 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mn, {
                  children: "0.8"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mn, {
                  children: "0.8"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "(0.8,0.8)"
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
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.8"
            }), _jsx(_components.span, {
              className: "mpunct",
              children: ","
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.8"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " 拥有相同总分。实际解释时应始终保留两个原始坐标，不要只把 MELO-score 放进下游表格。"]
    }), "\n", _jsx(_components.h3, {
      id: "4-论文内部也需要一致性检查",
      children: "4. 论文内部也需要一致性检查"
    }), "\n", _jsxs(_components.p, {
      children: ["SARS‑CoV‑2 spike 的案例报告 ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.56"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "VSS=0.56"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.56"
            })]
          })]
        })]
      }), "、", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.35"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS=0.35"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.35"
            })]
          })]
        })]
      }), "。按照论文给出的阈值定义，这应落在 Q4；图注也称其为 Q4，但正文一处写成 Q3。这里不替作者裁定，只把它记录为文本与数值的不一致，并以明确的阈值规则解释结果。"]
    }), "\n", _jsx(_components.h2, {
      id: "什么时候值得使用-melo",
      children: "什么时候值得使用 MELO？"
    }), "\n", _jsx(_components.p, {
      children: "MELO 最适合的问题不是“这两个蛋白是否属于同一折叠”，而是以下场景："
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "比较同一蛋白的 apo/holo、离子结合前后或不同环境条件；"
      }), "\n", _jsx(_components.li, {
        children: "检查错义突变、短插入缺失或工程化变体是否引起局部变化；"
      }), "\n", _jsx(_components.li, {
        children: "在大量高序列相似结构对中筛选值得人工复核的候选；"
      }), "\n", _jsx(_components.li, {
        children: "需要把整体差异进一步定位到残基、二级结构或结构域关系。"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "一个可执行的阅读与分析顺序是：先检查结构质量和缺失残基；MELO 会对缺失残基和不完整侧链进行建模，因此还应确认哪些坐标来自修补，因为它们可能影响局部几何特征与 VSS。随后确认序列比对是否符合生物学对应关系；同时报告 VSS、SPS 与四象限，而非只报最大值；打开两张局部图核对变化位置；最后再用实验条件、功能注释和独立方法验证。"
    }), "\n", _jsxs(_components.p, {
      children: ["MELO 的贡献不是宣布旧指标失效。RMSD、TM-score、LDDT 与 MELO 回答的是不同尺度的问题。它真正值得带走的设计思想是：面对细微结构变化，", _jsx(_components.strong, {
        children: "测量幅度、区分变化类型、定位变化区域"
      }), "应当是三个彼此关联、却不能压缩成同一个数字的任务。"]
    }), "\n", _jsx(_components.h2, {
      id: "资源",
      children: "资源"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://www.nature.com/articles/s41467-025-68110-8",
          children: "论文原文"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://pubmed.ncbi.nlm.nih.gov/41490886/",
          children: "PubMed 记录"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://melo.idrblab.cn/",
          children: "MELO 在线服务器"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/idrblab/MELO",
          children: "源代码与安装说明"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://doi.org/10.5281/zenodo.17360644",
          children: "Zenodo 归档"
        })
      }), "\n"]
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
            children: ["Zheng, L. et al. “Measuring and locating the changes in protein structure using MELO.” ", _jsx(_components.em, {
              children: "Nature Communications"
            }), " 17, 1360 (2026). DOI: ", _jsx(_components.a, {
              href: "https://doi.org/10.1038/s41467-025-68110-8",
              children: "10.1038/s41467-025-68110-8"
            }), ". ", _jsx(_components.a, {
              href: "#user-content-fnref-paper",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              className: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", _jsxs(_components.li, {
          id: "user-content-fn-dssp-fields",
          children: ["\n", _jsxs(_components.p, {
            children: ["DSSP 方法详见 Kabsch, W. & Sander, C. “Dictionary of protein secondary structure: pattern recognition of hydrogen-bonded and geometrical features.” ", _jsx(_components.em, {
              children: "Biopolymers"
            }), " 22, 2577–2637 (1983). DOI: ", _jsx(_components.a, {
              href: "https://doi.org/10.1002/bip.360221211",
              children: "10.1002/bip.360221211"
            }), "。 ", _jsx(_components.a, {
              href: "#user-content-fnref-dssp-fields",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
              className: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", _jsxs(_components.li, {
          id: "user-content-fn-data",
          children: ["\n", _jsxs(_components.p, {
            children: ["运行时间来自论文 Data availability 部分，是作者报告的基准结果；不同硬件、并行配置和输入长度下不能直接外推。 ", _jsx(_components.a, {
              href: "#user-content-fnref-data",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3",
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
