function removeDuplicates(nums) {
   let slowP=0;
   for(let fastP=0; fastP<nums.length; fastP++) {
      if (nums[slowP] !== nums[fastP]) {
          slowP++;
          nums[slowP]= nums[fastP]
      }
   }
   return slowP+1;
}
 