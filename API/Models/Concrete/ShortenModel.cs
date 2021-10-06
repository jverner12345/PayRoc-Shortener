using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Concrete
{
    public class ShortenModel
    {
        public string Key { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Base address is required")]
        public string BaseAddress { get; set; }
        public string NewAddress { get; set; }
        private string _prefix = "redirect/";
        public int? ClickCount { get; set; }
       // public string ShortLink { get; set; }
        public string LongLink { get; set; }
        public DateTime? LastAcessed { get; set; }
        public ShortenModel()
        {
        }
        public void GenerateNewKey()
        {
            try
            {
                var random = new Random(LongLink.GetHashCode());
                string input = "abcdefghijklmnopqrstuvwxyz0123456789";
                var chars = Enumerable.Range(0, 5)
                                       .Select(x => input[random.Next(0, input.Length)]);
                this.Key = new string(chars.ToArray());
                this.NewAddress = string.Format("{0}{1}{2}", this.BaseAddress, this._prefix, this.Key);
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
        }

        ///Not best practice here. A logic layer should be added. This is too small
    }
}
