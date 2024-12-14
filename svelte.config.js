import { preprocessMeltUI, sequence } from "@melt-ui/pp"

export default {
  preprocess: sequence([preprocessMeltUI()]),
}
