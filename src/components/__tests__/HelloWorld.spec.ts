import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import RepoCard from "../RepoCard.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(RepoCard, {
      props: {
        repo: {
          repoName: "portfolio",
          repoDesc: null,
          repoUrl: "https://github.com/Grimmjow2904/portfolio",
          repoLang: {
            Vue: 5099,
            TypeScript: 3587,
            JavaScript: 674,
            Shell: 581,
            HTML: 331,
            CSS: 298,
          },
        },
      },
    } as any);
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
