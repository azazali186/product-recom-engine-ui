<template>
    <div class="flex flex-col gap-5 items-center rounded-lg py-5 border-1 border-green-400 shadow-sm shadow-green-400 p-10 hover:shadow-md hover:shadow-blue-600">
        <div class="text-2xl flex font-bold">
           Write Review
        </div>
        <div class="flex flex-col gap-5">
            <!-- <div class="flex items-center gap-[60px]">
                <span class="text-2xl font-bold">Name: </span>
                <span><input type="text" v-model="name" class="outline-gray rounded-lg focus:outline focus:outline-gray focus:border-none px-5 py-2 font-bold text-lg outline w-[600px]"></span>
            </div> -->
            <div class="flex items-center gap-5">
                <span class="text-2xl font-bold">Feedback: </span>
                <span><textarea length="250"  v-model="desc" type="textarea" class="outline-gray rounded-lg focus:outline focus:outline-gray focus:border-none px-5 py-2 font-bold text-lg outline w-[600px]" rows="10"> </textarea></span>
            </div>
            <div class="flex items-center gap-10">
                <span class="text-2xl font-bold">Ratings: </span>
                <span class="flex gap-3">
                    <div class="space-y-1 flex gap-3">
                        <URadio v-for="method of options" :key="method.value" v-model="rating" v-bind="method" />
                    </div>
                </span>
            </div>
            <div class="flex items-center gap-[40px]">
                <span class="text-2xl font-bold">Images: </span>
                <span><input type="file" multiple="10" v-bind="files" class="outline-gray rounded-lg focus:outline focus:outline-gray focus:border-none px-5 py-2 font-bold text-lg outline w-[600px]"></span>
            </div>
            <div class="flex flex-row justify-center">
                <button
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span
                        class="relative px-5 py-2.5 hover:text-white font-bold dark:text-white transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Submit
                    </span>
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
const options = [{
    value: '1',
    label: '1'
}, {
    value: '2',
    label: '2'
}, {
    value: '3',
    label: '3'
}, {
    value: '4',
    label: '4'
}, {
    value: '5',
    label: '5'
}]

const rating = ref(null)
const name = ref(null)
const desc = ref(null)
const files = ref(null)
</script>