import { defineStore } from 'pinia'

export const useDataStore = defineStore({
    id: 'data',
    state: () => ({
        csvData: [],
        selectedXField: 'none',
        selectedYField: 'none',
        selectedChart: 'histogram',
    }),
    getters: {
        getColumns(state) {
            // 假設 CSV 數據的第一行是欄位名稱
            return state.csvData.length > 0 ? state.csvData[0] : [];
        }
    },
    actions: {
        setData(newData) {
            this.csvData = newData;
        }
    }
});
